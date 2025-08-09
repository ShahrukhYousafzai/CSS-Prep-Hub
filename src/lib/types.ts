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
