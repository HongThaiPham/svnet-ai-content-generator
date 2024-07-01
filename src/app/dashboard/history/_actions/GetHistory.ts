"use server";

import { db } from "@/lib/db";
import { AIOutput } from "@/lib/db-schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export async function GetHistory() {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const result = await db
    .select()
    .from(AIOutput)
    .where(
      eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress || "")
    );

  return result;
}
