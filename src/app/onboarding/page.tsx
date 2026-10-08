import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { OnboardingForm } from "./OnboardingForm";

export const dynamic = "force-dynamic";

export default async function OnboardingPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/");
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (existingUser?.username) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome to Fanbase OS 👋
        </h1>
        <p className="text-gray-400 mb-6">
          Let&apos;s set up your creator profile.
        </p>
        <OnboardingForm
          defaultName={clerkUser.firstName || "Creator"}
          defaultEmail={clerkUser.emailAddresses[0]?.emailAddress || ""}
          imageUrl={clerkUser.imageUrl}
          clerkId={clerkUser.id}
        />
      </div>
    </div>
  );
}