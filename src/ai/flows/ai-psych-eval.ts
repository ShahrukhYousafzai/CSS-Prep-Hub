'use server';

/**
 * @fileOverview An AI-powered psychological evaluation tool for CSS exam aspirants.
 *
 * - aiPsychEval - A function that accepts a user's test responses and returns personality insights.
 * - AiPsychEvalInput - The input type for the aiPsychEval function.
 * - AiPsychEvalOutput - The return type for the aiPsychEval function.
 */

import {ai} from '@/ai/genkit';
import { AiPsychEvalInputSchema, AiPsychEvalOutputSchema, type AiPsychEvalInput, type AiPsychEvalOutput } from '@/lib/types';


export async function aiPsychEval(input: AiPsychEvalInput): Promise<AiPsychEvalOutput> {
  return aiPsychEvalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPsychEvalPrompt',
  input: {schema: AiPsychEvalInputSchema},
  output: {schema: AiPsychEvalOutputSchema},
  prompt: `You are an expert occupational psychologist specializing in assessments for civil service and bureaucracy. Your task is to analyze a candidate's responses to a personality test. Provide a constructive, insightful, and balanced evaluation. Avoid definitive or alarming labels. The tone should be encouraging and focused on self-reflection for a high-pressure, public-facing career.

Analyze the following responses:

**Multiple-Choice Answers:**
{{#each mcqAnswers as |value key|}}
- Question ID {{key}}: User chose an option described as '{{value}}'.
{{/each}}

**Sentence Completions:**
{{#each sentenceCompletions as |value key|}}
- Prompt ID {{key}}: "{{@key}}" - User responded: "{{value}}"
{{/each}}

Based on this, provide a detailed psychological evaluation in the specified JSON format. Your analysis should synthesize information from both MCQs and sentence completions to identify patterns and core traits.
`,
});

const aiPsychEvalFlow = ai.defineFlow(
  {
    name: 'aiPsychEvalFlow',
    inputSchema: AiPsychEvalInputSchema,
    outputSchema: AiPsychEvalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
