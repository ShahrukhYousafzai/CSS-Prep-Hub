
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function PastPapersClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [generatedAnswers, setGeneratedAnswers] = useState<Record<string, string>>({});
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const years = useMemo(() => ['all', ...Array.from(new Set(pastPaperQuestions.map((q) => q.year.toString()))).sort((a, b) => Number(b) - Number(a))], []);
  const subjects = useMemo(() => ['all', ...Array.from(new Set(pastPaperQuestions.map((q) => q.subject)))], []);

  const filteredPapers = useMemo(() => {
    return pastPaperQuestions.filter((paper) => {
      const yearMatch = selectedYear === 'all' || paper.year.toString() === selectedYear;
      const subjectMatch = selectedSubject === 'all' || paper.subject === selectedSubject;
      const searchTermMatch =
        paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.questions.some(q => q.questionText.toLowerCase().includes(searchTerm.toLowerCase()));
      return yearMatch && subjectMatch && searchTermMatch;
    });
  }, [searchTerm, selectedYear, selectedSubject]);

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

      {filteredPapers.length > 0 ? (
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredPapers.map((paper) => (
            <AccordionItem value={paper.id} key={paper.id} className="border-b-0 rounded-lg bg-card overflow-hidden border">
              <AccordionTrigger className="p-4 hover:no-underline">
                <div className="text-left">
                  <p className="font-semibold text-lg">{paper.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {paper.year}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0">
                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {paper.questions.map(q => (
                       <AccordionItem value={q.id} key={q.id} className="border-b-0 rounded-lg bg-muted/50 overflow-hidden">
                          <AccordionTrigger className="p-4 hover:no-underline text-left">
                            <span className="font-semibold">{q.questionNumber ? `${q.questionNumber} ` : ''}{q.questionType === 'Essay' ? q.questionText : `(${q.questionType})`}</span>
                          </AccordionTrigger>
                           <AccordionContent className="p-4 pt-0">
                              <div className="space-y-4">
                                {q.questionType !== 'Essay' && <p className='text-sm font-semibold'>{q.questionText}</p>}
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Ideal Answer</h4>
                                  <div className="text-muted-foreground text-sm whitespace-pre-wrap">{q.idealAnswer}</div>
                                </div>
                                {q.questionType === 'Essay' && (
                                   <div className="mt-4">
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
                                  </div>
                                )}
                              </div>
                           </AccordionContent>
                       </AccordionItem>
                    ))}
                  </Accordion>
                </div>
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
