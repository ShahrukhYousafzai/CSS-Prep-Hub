"use server";

import { revalidatePath } from "next/cache";
import { aiAnswerCheck, type AiAnswerCheckInput } from "@/ai/flows/ai-answer-check";
import { aiOcr, type AiOcrInput } from "@/ai/flows/ai-ocr";

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

export async function ocrAction(input: AiOcrInput) {
    try {
        const output = await aiOcr(input);
        return { success: true, data: output.text };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
