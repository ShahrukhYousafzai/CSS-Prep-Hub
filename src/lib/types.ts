import { z } from 'zod';

// A single question within a paper
export interface PaperQuestion {
  id: string;
  questionNumber?: string; // e.g., "Q.2", "Q.4 (a)"
  questionText: string;
  idealAnswer: string;
  questionType: 'Essay' | 'Precis' | 'Comprehension' | 'Correction' | 'Analogy' | 'Idioms' | 'Translation' | 'MCQ' | 'Other';
  options?: string[]; // For MCQs
}

// Represents a full past paper, which can contain multiple questions
export interface PastPaper {
  id: string;
  year: number;
  subject: string;
  questions: PaperQuestion[];
}

export type EnrichedQuestion = PaperQuestion & {
  subject: string;
  year: number;
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
  id:string;
  subject: string;
  questions: QuizQuestion[];
}

export interface InterviewQuestion {
  id: string;
  category: 'General Knowledge' | 'Current Affairs' | 'Personality';
  questionText: string;
  suggestedAnswer: string;
}

export interface PsychTestMCQ {
  id: string;
  questionText: string;
  options: { text: string, value: string }[];
}

export interface PsychTestSentenceCompletion {
  id: string;
  prompt: string;
}

export interface PsychTest {
  id: string;
  title: string;
  mcqs: PsychTestMCQ[];
  sentenceCompletions: PsychTestSentenceCompletion[];
}

export const AiPsychEvalInputSchema = z.object({
  mcqAnswers: z.record(z.string()).describe("A map of MCQ question IDs to the user's chosen value (e.g., 'analytical', 'leader')."),
  sentenceCompletions: z.record(z.string()).describe("A map of sentence completion IDs to the user's full sentence response."),
});
export type AiPsychEvalInput = z.infer<typeof AiPsychEvalInputSchema>;

export const AiPsychEvalOutputSchema = z.object({
  overallAnalysis: z.string().describe("A brief, holistic overview of the user's personality based on their responses."),
  keyTraits: z.array(z.object({
    trait: z.string().describe("The identified personality trait (e.g., 'Analytical Thinking', 'Leadership Potential')."),
    analysis: z.string().describe("A detailed analysis of the identified trait, citing evidence from the user's responses."),
  })).describe("An array of key personality traits identified from the responses."),
  potentialStrengths: z.string().describe("A summary of potential strengths for a civil service career based on the analysis."),
  areasForReflection: z.string().describe("Gentle suggestions on areas the user might want to reflect upon for personal growth."),
});
export type AiPsychEvalOutput = z.infer<typeof AiPsychEvalOutputSchema>;


export interface AIPsychEvaluation {
    overallAnalysis: string;
    keyTraits: {
        trait: string;
        analysis: string;
    }[];
    potentialStrengths: string;
    areasForReflection: string;
}

export interface SubjectWiseQuestion {
  id: string;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionText: string;
  idealAnswer: string;
  group: 'Compulsory' | 'Group I' | 'Group II' | 'Group III' | 'Group IV' | 'Group V' | 'Group VI' | 'Group VII';
}
