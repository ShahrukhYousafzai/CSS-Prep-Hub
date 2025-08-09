"use client";

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Bot, Loader2, Sparkles, Lightbulb, BarChart, CheckCircle, RefreshCw } from 'lucide-react';
import { psychTest } from '@/lib/mock-data';
import type { AIPsychEvaluation } from '@/lib/types';
import { evaluatePsychTest } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


type TestState = 'not_started' | 'in_progress' | 'completed';

export function PsychologicalTestsClient() {
  const [testState, setTestState] = useState<TestState>('not_started');
  const [currentStep, setCurrentStep] = useState(0);
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, string>>({});
  const [sentenceAnswers, setSentenceAnswers] = useState<Record<string, string>>({});
  const [evaluation, setEvaluation] = useState<AIPsychEvaluation | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const totalSteps = psychTest.mcqs.length + psychTest.sentenceCompletions.length;
  const progress = (currentStep / totalSteps) * 100;

  const handleStartTest = () => {
    setTestState('in_progress');
    setCurrentStep(0);
    setMcqAnswers({});
    setSentenceAnswers({});
    setEvaluation(null);
  };
  
  const handleRetakeTest = () => {
    handleStartTest();
  }

  const handleNextStep = () => {
    // Validation
    if (currentStep < psychTest.mcqs.length) {
      if (!mcqAnswers[psychTest.mcqs[currentStep].id]) {
        toast({ title: "Please select an option.", variant: "destructive" });
        return;
      }
    } else {
      const sentenceIndex = currentStep - psychTest.mcqs.length;
      if (!sentenceAnswers[psychTest.sentenceCompletions[sentenceIndex].id]?.trim()) {
        toast({ title: "Please complete the sentence.", variant: "destructive" });
        return;
      }
    }
    setCurrentStep(s => s + 1);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const result = await evaluatePsychTest({
        mcqAnswers,
        sentenceCompletions: sentenceAnswers,
      });

      if (result.success && result.data) {
        setEvaluation(result.data);
        setTestState('completed');
        toast({
          title: "Evaluation Complete!",
          description: "The AI has analyzed your responses.",
        });
      } else {
        toast({
          title: "Evaluation Failed",
          description: result.error || "An unexpected error occurred.",
          variant: 'destructive',
        });
      }
    });
  };

  const renderCurrentStep = () => {
    if (currentStep < psychTest.mcqs.length) {
      const question = psychTest.mcqs[currentStep];
      return (
        <div>
          <Label className="text-lg font-semibold">{currentStep + 1}. {question.questionText}</Label>
          <RadioGroup
            value={mcqAnswers[question.id] || ''}
            onValueChange={(value) => setMcqAnswers(prev => ({ ...prev, [question.id]: value }))}
            className="mt-4 space-y-2"
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50">
                <RadioGroupItem value={option.value} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`} className="text-base font-normal flex-1 cursor-pointer">{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    } else {
      const sentenceIndex = currentStep - psychTest.mcqs.length;
      const sentence = psychTest.sentenceCompletions[sentenceIndex];
      return (
        <div>
          <Label htmlFor={sentence.id} className="text-lg font-semibold">{currentStep + 1}. Complete the sentence:</Label>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-muted-foreground">{sentence.prompt}</span>
            <Textarea
              id={sentence.id}
              placeholder="Your completion here..."
              value={sentenceAnswers[sentence.id] || ''}
              onChange={(e) => setSentenceAnswers(prev => ({ ...prev, [sentence.id]: e.target.value }))}
              className="flex-1"
            />
          </div>
        </div>
      );
    }
  };

  if (testState === 'not_started') {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            Psychological Test Simulation
          </CardTitle>
          <CardDescription>
            This test is designed to provide simulated insights into personality traits relevant to civil service.
            It consists of multiple-choice questions and sentence completions. Answer honestly for the most helpful feedback.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> This is a simulation for educational purposes and not a clinical diagnostic tool.
            The AI-generated feedback is intended for self-reflection and personal development.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStartTest}>Begin Test</Button>
        </CardFooter>
      </Card>
    );
  }
  
  if (testState === 'completed' && evaluation) {
    return (
         <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-primary"/>
                    <div>
                        <CardTitle className="text-2xl">AI Personality Insights</CardTitle>
                        <CardDescription>Based on your responses, here is a summary of potential traits.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2"><Bot size={20}/> Overall Analysis</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{evaluation.overallAnalysis}</p>
                </div>

                <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                    {evaluation.keyTraits.map((trait, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
                                <CheckCircle size={18} className="text-emerald-500" /> {trait.trait}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground">
                                {trait.analysis}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-emerald-50 dark:bg-emerald-900/30">
                        <CardHeader>
                           <CardTitle className="text-base text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                                <Lightbulb size={18}/> Potential Strengths
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-emerald-800 dark:text-emerald-300">
                           {evaluation.potentialStrengths}
                        </CardContent>
                    </Card>
                     <Card className="bg-amber-50 dark:bg-amber-900/30">
                        <CardHeader>
                            <CardTitle className="text-base text-amber-700 dark:text-amber-400 flex items-center gap-2">
                                <BarChart size={18}/> Areas for Reflection
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-amber-800 dark:text-amber-300">
                            {evaluation.areasForReflection}
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
             <CardFooter>
                 <Button onClick={handleRetakeTest}>
                     <RefreshCw className="mr-2 h-4 w-4" />
                     Take Again
                 </Button>
             </CardFooter>
        </Card>
    )
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <Progress value={isPending ? 100 : progress} className="mb-2 h-2" />
        <CardTitle>{psychTest.title}</CardTitle>
        <CardDescription>
          {isPending ? 'Submitting for evaluation...' : `Question ${currentStep + 1} of ${totalSteps}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-[200px]">
        {isPending ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
             <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
             <p className="mt-4 text-lg font-semibold">AI is analyzing your responses...</p>
             <p className="text-sm text-muted-foreground">This may take a moment. Please wait.</p>
          </div>
        ) : (
          renderCurrentStep()
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {currentStep < totalSteps - 1 ? (
          <Button onClick={handleNextStep}>Next</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" /> Get AI Evaluation
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
