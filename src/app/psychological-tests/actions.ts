"use server";

import { revalidatePath } from "next/cache";
import { aiPsychEval } from "@/ai/flows/ai-psych-eval";
import type { AiPsychEvalInput } from "@/lib/types";

export async function evaluatePsychTest(input: AiPsychEvalInput) {
  try {
    const output = await aiPsychEval(input);
    revalidatePath("/psychological-tests");
    return { success: true, data: output };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: errorMessage };
  }
}
