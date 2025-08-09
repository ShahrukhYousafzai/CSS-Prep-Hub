"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';
import { quizzes } from '@/lib/mock-data';
import type { Quiz, QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';

export function QuizzesClient() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNextQuestion = () => {
    if (selectedQuiz && currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetakeQuiz = () => {
    if (selectedQuiz) {
      handleStartQuiz(selectedQuiz);
    }
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
  };

  if (!selectedQuiz) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardHeader>
              <CardTitle>{quiz.subject}</CardTitle>
              <CardDescription>{quiz.questions.length} questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleStartQuiz(quiz)}>Start Quiz</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (showResults) {
    const score = selectedQuiz.questions.reduce((acc, question, index) => {
      return acc + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    const percentage = (score / selectedQuiz.questions.length) * 100;

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Award className="mx-auto h-16 w-16 text-amber-500" />
          <CardTitle className="text-3xl">Quiz Results</CardTitle>
          <CardDescription>Subject: {selectedQuiz.subject}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg">You scored</p>
            <p className="text-5xl font-bold text-primary">{percentage.toFixed(0)}%</p>
            <p className="text-muted-foreground">({score} out of {selectedQuiz.questions.length} correct)</p>
          </div>
          <div className="space-y-4">
            {selectedQuiz.questions.map((q, index) => (
              <div key={index} className="p-4 rounded-md border">
                <p className="font-semibold">{index + 1}. {q.questionText}</p>
                <div className={cn("mt-2 flex items-center gap-2 text-sm",
                  selectedAnswers[index] === q.correctAnswer ? "text-emerald-600" : "text-destructive"
                )}>
                  {selectedAnswers[index] === q.correctAnswer ? <CheckCircle size={16} /> : <XCircle size={16} />}
                  <span>Your answer: {selectedAnswers[index] || "Not answered"}</span>
                </div>
                {selectedAnswers[index] !== q.correctAnswer && (
                   <div className="mt-1 flex items-center gap-2 text-sm text-emerald-600">
                     <CheckCircle size={16} />
                     <span>Correct answer: {q.correctAnswer}</span>
                   </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <Button onClick={handleRetakeQuiz}>
              <RotateCw className="mr-2 h-4 w-4" />
              Retake Quiz
            </Button>
            <Button variant="outline" onClick={handleBackToList}>Back to Quiz List</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion: QuizQuestion = selectedQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <Progress value={progress} className="mb-2" />
        <CardTitle>{selectedQuiz.subject}</CardTitle>
        <CardDescription>Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <p className="text-lg font-semibold">{currentQuestion.questionText}</p>
            <RadioGroup
              value={selectedAnswers[currentQuestionIndex] || ''}
              onValueChange={handleAnswerSelect}
              className="space-y-2"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-base font-normal">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="mt-6 flex justify-end">
            {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
              <Button type="button" onClick={handleNextQuestion} disabled={!selectedAnswers[currentQuestionIndex]}>
                Next Question
              </Button>
            ) : (
              <Button type="button" onClick={handleSubmit} disabled={!selectedAnswers[currentQuestionIndex]}>
                Submit & View Results
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
