
"use server";

import { revalidatePath } from "next/cache";
import { generateEssay, type GenerateEssayInput } from "@/ai/flows/ai-generate-essay";

export async function generateEssayAction(input: GenerateEssayInput) {
  try {
    const output = await generateEssay(input);
    revalidatePath("/past-papers");
    return { success: true, data: output.essay };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: errorMessage };
  }
}
