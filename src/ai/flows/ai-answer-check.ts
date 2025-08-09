'use server';

/**
 * @fileOverview An AI-powered answer checker for CSS exam aspirants.
 *
 * - aiAnswerCheck - A function that accepts a user's answer and an ideal answer, then returns a detailed score breakdown with strengths, weaknesses, and improvement tips.
 * - AiAnswerCheckInput - The input type for the aiAnswerCheck function.
 * - AiAnswerCheckOutput - The return type for the aiAnswerCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAnswerCheckInputSchema = z.object({
  userAnswer: z
    .string()
    .describe('The answer provided by the user.'),
  idealAnswer: z
    .string()
    .describe('The ideal answer to the question.'),
});
export type AiAnswerCheckInput = z.infer<typeof AiAnswerCheckInputSchema>;

const AiAnswerCheckOutputSchema = z.object({
  scoreContent: z.number().describe('The score for the content of the answer (0-1).'),
  scoreStructure: z.number().describe('The score for the structure of the answer (0-1).'),
  scoreGrammar: z.number().describe('The score for the grammar of the answer (0-1).'),
  totalScore: z.number().describe('The total score for the answer (0-1).'),
  feedbackStrengths: z.string().describe('Feedback on the strengths of the answer.'),
  feedbackWeaknesses: z.string().describe('Feedback on the weaknesses of the answer.'),
  improvementTips: z.string().describe('Tips for improving the answer.'),
});
export type AiAnswerCheckOutput = z.infer<typeof AiAnswerCheckOutputSchema>;

export async function aiAnswerCheck(input: AiAnswerCheckInput): Promise<AiAnswerCheckOutput> {
  return aiAnswerCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAnswerCheckPrompt',
  input: {schema: AiAnswerCheckInputSchema},
  output: {schema: AiAnswerCheckOutputSchema},
  prompt: `You are an FPSC CSS examiner.
Compare the following user answer with the ideal answer.
Use this marking breakdown: Content (40%), Structure (30%), Grammar (30%).

User Answer:
{{userAnswer}}

Ideal Answer:
{{idealAnswer}}

Return JSON with the following keys:
scoreContent: The score for the content of the answer (0-1).
scoreStructure: The score for the structure of the answer (0-1).
scoreGrammar: The score for the grammar of the answer (0-1).
totalScore: The total score for the answer (0-1).
feedbackStrengths: Feedback on the strengths of the answer.
feedbackWeaknesses: Feedback on the weaknesses of the answer.
improvementTips: Tips for improving the answer.`,
});

const aiAnswerCheckFlow = ai.defineFlow(
  {
    name: 'aiAnswerCheckFlow',
    inputSchema: AiAnswerCheckInputSchema,
    outputSchema: AiAnswerCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
