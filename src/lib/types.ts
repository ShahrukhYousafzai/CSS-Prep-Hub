export interface PastPaperQuestion {
  id: string;
  year: number;
  subject: string;
  questionText: string;
  idealAnswer: string;
}

export type AIFeedback = {
  scoreContent: number;
  scoreStructure: number;
  scoreGrammar: number;
  totalScore: number;
  feedbackStrengths: string;
  feedbackWeaknesses: string;
  improvementTips: string;
}

export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: string;
  subject: string;
  questions: QuizQuestion[];
}

export interface InterviewQuestion {
  id: string;
  category: 'General Knowledge' | 'Current Affairs' | 'Personality';
  questionText: string;
  suggestedAnswer: string;
}