'use server';

/**
 * @fileOverview An AI-powered OCR service to extract text from an image.
 *
 * - aiOcr - A function that accepts an image data URI and returns the extracted text.
 * - AiOcrInput - The input type for the aiOcr function.
 * - AiOcrOutput - The return type for the aiOcr function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiOcrInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "An image of a document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AiOcrInput = z.infer<typeof AiOcrInputSchema>;

const AiOcrOutputSchema = z.object({
  text: z.string().describe('The text extracted from the image.'),
});
export type AiOcrOutput = z.infer<typeof AiOcrOutputSchema>;

export async function aiOcr(input: AiOcrInput): Promise<AiOcrOutput> {
  return aiOcrFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiOcrPrompt',
  input: {schema: AiOcrInputSchema},
  output: {schema: AiOcrOutputSchema},
  prompt: `You are an OCR expert. Extract all text from the following image.
Image: {{media url=imageDataUri}}`,
});

const aiOcrFlow = ai.defineFlow(
  {
    name: 'aiOcrFlow',
    inputSchema: AiOcrInputSchema,
    outputSchema: AiOcrOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
