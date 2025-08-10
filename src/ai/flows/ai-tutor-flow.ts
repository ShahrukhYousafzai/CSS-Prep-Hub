
'use server';
/**
 * @fileOverview An AI-powered tutor for CSS exam aspirants.
 *
 * - aiTutor - A function that accepts a user's query and chat history and returns an AI-generated response.
 * - AiTutorInput - The input type for the aiTutor function.
 * - AiTutorOutput - The return type for the aiTutor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { pastPaperQuestions } from '@/lib/data';

const AiTutorInputSchema = z.object({
  query: z.string().describe('The user\'s current question or message.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The history of the conversation so far.'),
});
export type AiTutorInput = z.infer<typeof AiTutorInputSchema>;

const AiTutorOutputSchema = z.object({
  response: z.string().describe('The AI\'s response to the user\'s query.'),
});
export type AiTutorOutput = z.infer<typeof AiTutorOutputSchema>;

export async function aiTutor(input: AiTutorInput): Promise<AiTutorOutput> {
  return aiTutorFlow(input);
}

// Convert the structured past paper data into a simplified string format for the prompt.
const pastPapersKnowledge = pastPaperQuestions.map(paper => {
  const questions = paper.questions.map(q => `  - Question: ${q.questionText}\n    Ideal Answer: ${q.idealAnswer}`).join('\n');
  return `Subject: ${paper.subject} (${paper.year})\n${questions}`;
}).join('\n\n');


const prompt = ai.definePrompt({
  name: 'aiTutorPrompt',
  input: {schema: AiTutorInputSchema},
  output: {schema: AiTutorOutputSchema},
  prompt: `You are the "CSS Prep Hub AI Tutor", a friendly and knowledgeable assistant for students preparing for the CSS exams in Pakistan. Your goal is to provide helpful, encouraging, and accurate guidance.

You have access to a comprehensive database of past CSS exam papers. Use this knowledge to answer user questions about exam patterns, common topics, question types, and to provide general advice.

**Your Persona:**
- **Expert:** You are well-versed in all CSS subjects.
- **Encouraging:** You should motivate students and build their confidence.
- **Supportive:** You are a study partner, not just a machine.
- **Concise:** Provide clear and to-the-point answers. Use formatting like lists and bold text to improve readability.

**Your Capabilities:**
- Answer questions about specific subjects and topics based on past papers.
- Provide guidance on study strategies and exam preparation techniques.
- Explain concepts and provide examples based on the provided past paper data.
- Do NOT answer questions that are off-topic or unrelated to CSS exams or studying. Politely decline and steer the conversation back to CSS prep.

**Conversation History:**
{{#each history}}
- {{role}}: {{content}}
{{/each}}

**User's Current Query:**
{{query}}

**Knowledge Base (Past Papers):**
---
{{pastPapersKnowledge}}
---

Based on the conversation history and your knowledge base, provide a helpful and relevant response to the user's current query. Address the user directly.
`,
});

const aiTutorFlow = ai.defineFlow(
  {
    name: 'aiTutorFlow',
    inputSchema: AiTutorInputSchema,
    outputSchema: AiTutorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({ ...input, pastPapersKnowledge });
    return output!;
  }
);
