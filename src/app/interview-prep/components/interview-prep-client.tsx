
"use client";

import React, { useState, useMemo, useEffect } from 'react';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { interviewQuestions } from '@/lib/data';
import type { InterviewQuestion } from '@/lib/types';
import { Bot, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const QUESTIONS_PER_PAGE = 10;

export function InterviewPrepClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [randomQuestion, setRandomQuestion] = useState<InterviewQuestion | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => ['All', ...Array.from(new Set(interviewQuestions.map((q) => q.category)))], []);

  const filteredQuestions = useMemo(() => {
    if (activeTab === 'All') return interviewQuestions;
    return interviewQuestions.filter((q) => q.category === activeTab);
  }, [activeTab]);

  useEffect(() => {
    setCurrentPage(1);
    handleRandomQuestion();
  }, [activeTab]);

  const handleRandomQuestion = () => {
    if (filteredQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      setRandomQuestion(filteredQuestions[randomIndex]);
    } else {
      setRandomQuestion(null);
    }
  };

  const paginatedQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(startIndex, endIndex);
  }, [filteredQuestions, currentPage]);

  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-between pt-4">
        <Button 
          variant="outline"
          onClick={() => setCurrentPage(p => p - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <span className="text-sm font-medium text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle>AI Mock Interview</CardTitle>
          <CardDescription>
            Practice a random question with AI feedback. (Feature coming soon!)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {randomQuestion && (
                 <div className="p-4 rounded-lg border bg-muted">
                    <p className="font-semibold">{randomQuestion.questionText}</p>
                    <p className="text-sm text-muted-foreground mt-2">{randomQuestion.suggestedAnswer}</p>
                </div>
            )}
             <div className="flex gap-2">
                <Button onClick={handleRandomQuestion}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Get Another Random Question
                </Button>
                <Button variant="outline" disabled>
                    <Bot className="mr-2 h-4 w-4" />
                    Start AI Mock Interview
                </Button>
             </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interview Q&A Bank</CardTitle>
          <CardDescription>
            Browse questions by category to prepare for your interview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                {categories.map(category => (
                     <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
            </TabsList>
            <div className="mt-4">
                 {paginatedQuestions.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full space-y-2">
                    {paginatedQuestions.map((q) => (
                        <AccordionItem value={q.id} key={q.id} className="border-b-0 rounded-lg bg-card overflow-hidden border">
                        <AccordionTrigger className="p-4 hover:no-underline">
                            <div className="text-left">
                            <p className="font-semibold">{q.questionText}</p>
                             <p className="text-sm text-muted-foreground">{q.category}</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pt-0">
                            <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-primary mb-2">Suggested Answer</h4>
                                <p className="text-muted-foreground text-sm">{q.suggestedAnswer}</p>
                            </div>
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                ) : (
                    <div className="flex items-center justify-center h-40 rounded-lg border border-dashed">
                        <p className="text-muted-foreground">No questions found for this category.</p>
                    </div>
                )}
                 {renderPagination()}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
