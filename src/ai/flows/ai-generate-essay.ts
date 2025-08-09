
'use server';

/**
 * @fileOverview An AI-powered essay generator.
 *
 * - generateEssay - A function that accepts a topic and an outline and returns a full essay.
 * - GenerateEssayInput - The input type for the generateEssay function.
 * - GenerateEssayOutput - The return type for the generateEssay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEssayInputSchema = z.object({
  topic: z
    .string()
    .describe('The topic of the essay.'),
  outline: z
    .string()
    .describe('A brief outline or summary of the points to cover in the essay.'),
});
export type GenerateEssayInput = z.infer<typeof GenerateEssayInputSchema>;

const GenerateEssayOutputSchema = z.object({
  essay: z.string().describe('The full, comprehensive essay.'),
});
export type GenerateEssayOutput = z.infer<typeof GenerateEssayOutputSchema>;

export async function generateEssay(input: GenerateEssayInput): Promise<GenerateEssayOutput> {
  return generateEssayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEssayPrompt',
  input: {schema: GenerateEssayInputSchema},
  output: {schema: GenerateEssayOutputSchema},
  prompt: `You are an expert CSS exam essay writer. Your task is to expand the given outline into a full, comprehensive, and well-structured essay of approximately 2500-3000 words. The essay should be formal in tone, with clear arguments, and supported by relevant examples and analysis where appropriate.

Essay Topic:
"{{topic}}"

Essay Outline:
{{outline}}

Write the full essay based on the provided outline. Ensure the output is a single, coherent piece of text in the 'essay' field of the JSON output.`,
});

const generateEssayFlow = ai.defineFlow(
  {
    name: 'generateEssayFlow',
    inputSchema: GenerateEssayInputSchema,
    outputSchema: GenerateEssayOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
