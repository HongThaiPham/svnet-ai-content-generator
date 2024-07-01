"use server";

import { db } from "@/lib/db";
import { AIOutput } from "@/lib/db-schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function GetUsageCredit() {
  const user = await currentUser();

  if (!user) {
    return {
      totalCredits: 10000,
      usedCredit: 0,
    };
  }

  const result = await db
    .select()
    .from(AIOutput)
    .where(
      eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress || "")
    );

  const usedCredit: number = result.reduce((acc, item) => {
    return acc + Number(item.aiResponse?.length || 0);
  }, 0);

  return {
    totalCredits: 10000,
    usedCredit,
  };
}
