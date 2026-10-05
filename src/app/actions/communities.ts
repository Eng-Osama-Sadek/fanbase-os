"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createCommunity(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string;

  if (!name || !description) {
    return { error: "Name and description are required" };
  }

  // Get the first user (creator)
  const user = await prisma.user.findFirst();
  if (!user) {
    return { error: "No creator found" };
  }

  await prisma.community.create({
    data: {
      name,
      description,
      icon: icon || "📁",
      creatorId: user.id,
    },
  });

  revalidatePath("/dashboard/communities");
  return { success: true };
}