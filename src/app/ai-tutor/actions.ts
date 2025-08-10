
"use server";

import { aiTutor, type AiTutorInput } from "@/ai/flows/ai-tutor-flow";

export async function aiTutorAction(input: AiTutorInput) {
  try {
    const output = await aiTutor(input);
    return { success: true, data: output.response };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: errorMessage };
  }
}
