"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./actions";

export function OnboardingForm({
  defaultName,
  defaultEmail,
  imageUrl,
  clerkId,
}: {
  defaultName: string;
  defaultEmail: string;
  imageUrl: string;
  clerkId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    const result = await completeOnboarding(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input type="hidden" name="clerkId" value={clerkId} />
      <input type="hidden" name="imageUrl" value={imageUrl} />

      <div>
        <label className="text-sm text-gray-400 mb-1 block">Username</label>
        <input
          name="username"
          required
          placeholder="alex-creator"
          pattern="[a-z0-9-]+"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          This will be your public URL: yoursite.com/username
        </p>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-1 block">Display Name</label>
        <input
          name="name"
          required
          defaultValue={defaultName}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-1 block">Email</label>
        <input
          name="email"
          required
          type="email"
          defaultValue={defaultEmail}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-1 block">Bio</label>
        <textarea
          name="bio"
          rows={3}
          placeholder="Tell your followers about yourself..."
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg text-sm font-medium text-white transition-colors"
      >
        {loading ? "Creating profile..." : "Complete Setup"}
      </button>
    </form>
  );
}