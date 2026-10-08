"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitIdea(formData: FormData) {
  const communityId = formData.get("communityId") as string;
  const authorName = formData.get("authorName") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!communityId || !title || !content || !authorName) {
    return { error: "All fields are required" };
  }

  let author = await prisma.user.findFirst({
    where: { name: authorName, role: "FAN" },
  });

  if (!author) {
    author = await prisma.user.create({
      data: {
        clerkId: `fan_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: authorName,
        email: `fan_${Date.now()}@fanbase.local`,
        role: "FAN",
      },
    });
  }

  await prisma.idea.create({
    data: {
      title,
      content,
      status: "PENDING",
      aiScore: Math.floor(Math.random() * 40) + 60,
      authorId: author.id,
      communityId,
    },
  });

  revalidatePath(`/`);
  return { success: true };
}