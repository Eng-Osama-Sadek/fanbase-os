"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function joinCommunity(
  formData: FormData
): Promise<{ success?: boolean; error?: string }> {
  const communityId = formData.get("communityId") as string;
  const userName = formData.get("userName") as string;

  if (!communityId || !userName) {
    return { error: "Missing fields" };
  }

  let user = await prisma.user.findFirst({
    where: { name: userName, role: "FAN" },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        clerkId: `fan_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: userName,
        email: `fan_${Date.now()}@fanbase.local`,
        role: "FAN",
      },
    });
  }

  const existing = await prisma.communityMember.findFirst({
    where: { userId: user.id, communityId },
  });

  if (existing) {
    return { error: "You are already a member" };
  }

  await prisma.communityMember.create({
    data: { userId: user.id, communityId },
  });

  revalidatePath(`/`);
  return { success: true };
}