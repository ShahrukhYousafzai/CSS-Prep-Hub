
"use client";

import React, { useState, useMemo, useTransition } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Loader2 } from 'lucide-react';
import { pastPaperQuestions } from '@/lib/data';
import { generateEssayAction } from '../actions';
import { useToast } from '@/hooks/use-toast';
import type { EnrichedQuestion } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function PastPapersClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [generatedAnswers, setGeneratedAnswers] = useState<Record<string, string>>({});
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const allQuestions = useMemo((): EnrichedQuestion[] => {
    return pastPaperQuestions.flatMap(paper => 
      paper.questions.map(question => ({
        ...question,
        subject: paper.subject,
        year: paper.year,
      }))
    );
  }, []);

  const years = useMemo(() => ['all', ...Array.from(new Set(allQuestions.map((q) => q.year.toString()))).sort((a, b) => Number(b) - Number(a))], [allQuestions]);
  const subjects = useMemo(() => ['all', ...Array.from(new Set(allQuestions.map((q) => q.subject)))] , [allQuestions]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((question) => {
      const yearMatch = selectedYear === 'all' || question.year.toString() === selectedYear;
      const subjectMatch = selectedSubject === 'all' || question.subject === selectedSubject;
      const searchTermMatch =
        question.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.questionText.toLowerCase().includes(searchTerm.toLowerCase());
      return yearMatch && subjectMatch && searchTermMatch;
    });
  }, [searchTerm, selectedYear, selectedSubject, allQuestions]);

  const handleGenerateAnswer = (questionId: string, topic: string, outline: string) => {
    setGeneratingId(questionId);
    startTransition(async () => {
      const result = await generateEssayAction({ topic, outline });
      if (result.success && result.data) {
        setGeneratedAnswers(prev => ({ ...prev, [questionId]: result.data }));
        toast({
          title: 'Answer Generated!',
          description: 'The AI has generated a full model answer.',
        });
      } else {
        toast({
          title: 'Generation Failed',
          description: result.error || 'Could not generate the answer.',
          variant: 'destructive',
        });
      }
      setGeneratingId(null);
    });
  };

  const renderAnswer = (q: EnrichedQuestion) => {
    if (q.questionType === 'Essay') {
        return (
          <>
            {generatingId === q.id ? (
              <div className="flex items-center justify-center h-24 rounded-lg border border-dashed">
                <div className="text-center">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                  <p className="mt-2 font-semibold">Generating full answer...</p>
                  <p className="text-xs text-muted-foreground">This may take a moment.</p>
                </div>
              </div>
            ) : generatedAnswers[q.id] ? (
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">AI Generated Answer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-sm">{generatedAnswers[q.id]}</p>
                </CardContent>
              </Card>
            ) : (
              <Button
                onClick={() => handleGenerateAnswer(q.id, q.questionText, q.idealAnswer)}
                disabled={isPending}
              >
                <Bot className="mr-2 h-4 w-4" />
                Generate Full Answer with AI
              </Button>
            )}
          </>
        );
    }
    
    if (q.questionType === 'MCQ' || q.questionType === 'Analogy') {
      return (
          <div className="space-y-4">
            <RadioGroup disabled defaultValue={q.idealAnswer}>
                {(q.options ?? []).map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50 has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground">
                        <RadioGroupItem value={option} id={`${q.id}-${index}`} className="border-muted-foreground has-[[data-state=checked]]:border-primary-foreground" />
                        <Label htmlFor={`${q.id}-${index}`} className="text-base font-normal flex-1 cursor-pointer">{option}</Label>
                    </div>
                ))}
            </RadioGroup>
          </div>
      );
    }

    // Default rendering for other question types
    return (
      <div>
        <h4 className="font-semibold text-primary mb-2">Ideal Answer</h4>
        <div className="text-muted-foreground text-sm whitespace-pre-wrap">{q.idealAnswer}</div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Filter Past Papers</CardTitle>
          <CardDescription>
            Refine your search by year, subject, or keywords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Search subjects or questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {filteredQuestions.length > 0 ? (
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredQuestions.map((q) => (
            <AccordionItem value={q.id} key={q.id} className="border-b-0 rounded-lg bg-card overflow-hidden border">
              <AccordionTrigger className="p-4 hover:no-underline">
                <div className="flex-1 text-left">
                   <p className="font-semibold whitespace-pre-wrap">
                     {q.questionNumber ? `${q.questionNumber} ` : ''}
                     {q.questionText}
                   </p>
                   <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <Badge variant="outline">{q.subject}</Badge>
                    <Badge variant="secondary">{q.year}</Badge>
                    <Badge variant="outline">{q.questionType}</Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0">
                {renderAnswer(q)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Card className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">No matching past papers found.</p>
        </Card>
      )}
    </div>
  );
}
