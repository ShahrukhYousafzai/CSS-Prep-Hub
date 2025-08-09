"use client";

import React, { useState, useTransition } from 'react';
import { Bot, FileUp, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { pastPaperQuestions } from '@/lib/mock-data';
import type { PastPaperQuestion, AIFeedback } from '@/lib/types';
import { checkAnswerAction } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { FeedbackDisplay } from './feedback-display';

export function AIAnswerCheckerClient() {
  const [selectedQuestion, setSelectedQuestion] =
    useState<PastPaperQuestion | null>(pastPaperQuestions[0]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedQuestion || !userAnswer.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Please select a question and write an answer.',
        variant: 'destructive',
      });
      return;
    }

    setFeedback(null);

    startTransition(async () => {
      const result = await checkAnswerAction({
        userAnswer,
        idealAnswer: selectedQuestion.idealAnswer,
      });

      if (result.success && result.data) {
        setFeedback(result.data);
         toast({
          title: "Evaluation Complete!",
          description: "Your answer has been marked by the AI.",
        });
      } else {
        toast({
          title: 'Evaluation Failed',
          description: result.error || 'An unexpected error occurred.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <div className="grid h-[calc(100vh-5rem)] gap-4 md:grid-cols-[300px_1fr]">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Past Papers</CardTitle>
          <CardDescription>Select a question to practice.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <ScrollArea className="h-full">
            <div className="flex flex-col p-2">
              {pastPaperQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestion(q)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors',
                    selectedQuestion?.id === q.id && 'bg-muted'
                  )}
                >
                  <h3 className="font-semibold text-sm">{q.subject} ({q.year})</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {q.questionText}
                  </p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        {selectedQuestion ? (
          <>
            <Card className="flex-grow-[2] flex flex-col">
              <CardHeader>
                <CardTitle>{selectedQuestion.subject} ({selectedQuestion.year})</CardTitle>
                <CardDescription>{selectedQuestion.questionText}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <form onSubmit={handleSubmit} className="flex flex-col h-full gap-4">
                  <Textarea
                    placeholder="Write your answer here..."
                    className="flex-grow resize-none text-base"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  <div className="flex items-center gap-2">
                    <Button type="submit" disabled={isPending || !userAnswer.trim()}>
                      {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Bot className="mr-2 h-4 w-4" />
                      )}
                      Submit for AI Check
                    </Button>
                    <Button variant="outline" type="button" disabled={isPending}>
                      <FileUp className="mr-2 h-4 w-4" />
                      Upload Image (OCR)
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="flex-grow-[3]">
              {isPending && (
                <div className="flex items-center justify-center h-full rounded-lg border border-dashed">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-lg font-semibold">AI is marking your answer...</p>
                    <p className="text-sm text-muted-foreground">This may take a moment. Please wait.</p>
                  </div>
                </div>
              )}
              {feedback && <FeedbackDisplay feedback={feedback} />}
              {!isPending && !feedback && (
                 <div className="flex items-center justify-center h-full rounded-lg border border-dashed">
                    <div className="text-center text-muted-foreground">
                      <Bot className="mx-auto h-12 w-12" />
                      <p className="mt-4 text-lg font-semibold">Awaiting Submission</p>
                      <p className="text-sm">Your feedback will appear here after you submit an answer.</p>
                    </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <Card className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Select a question to begin.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
