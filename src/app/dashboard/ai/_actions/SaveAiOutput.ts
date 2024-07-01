"use server";

import { db } from "@/lib/db";
import { AIOutput } from "@/lib/db-schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

export async function SaveAiOuput(formData: any, slug: string, output: string) {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const result = await db.insert(AIOutput).values({
    formData: formData,
    templateSlug: slug,
    aiResponse: output,
    createdBy: user.primaryEmailAddress?.emailAddress || "",
    createdAt: dayjs().format("YYYY-MM-DD"),
  });
  return result;
}
