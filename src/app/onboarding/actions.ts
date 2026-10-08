"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function completeOnboarding(formData: FormData) {
  const clerkId = formData.get("clerkId") as string;
  const username = formData.get("username") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const bio = formData.get("bio") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!clerkId || !username || !name || !email) {
    return { error: "All required fields must be filled" };
  }

  const existing = await prisma.user.findUnique({
    where: { username },
  });

  if (existing && existing.clerkId !== clerkId) {
    return { error: "Username is already taken" };
  }

  await prisma.user.upsert({
    where: { clerkId },
    update: { username, name, email, bio: bio || null, imageUrl: imageUrl || null, role: "CREATOR" },
    create: {
      clerkId,
      username,
      name,
      email,
      bio: bio || null,
      imageUrl: imageUrl || null,
      role: "CREATOR",
    },
  });

  revalidatePath("/dashboard");
  return { success: true };
}