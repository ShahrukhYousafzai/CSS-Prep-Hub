"use server";

import { revalidatePath } from "next/cache";
import { aiAnswerCheck, type AiAnswerCheckInput } from "@/ai/flows/ai-answer-check";

export async function checkAnswerAction(input: AiAnswerCheckInput) {
  try {
    const output = await aiAnswerCheck(input);
    revalidatePath("/ai-answer-check");
    return { success: true, data: output };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: errorMessage };
  }
}
