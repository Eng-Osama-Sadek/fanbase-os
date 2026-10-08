"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { joinCommunity } from "./joinActions";

export function JoinButton({ communityId }: { communityId: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    const result = await joinCommunity(formData);

    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setOpen(false);
      setSuccess(false);
      window.location.reload();
    }, 1500);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium text-white transition-colors flex items-center justify-center gap-2"
      >
        <Users size={18} /> Join Community
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-white mb-4">Join Community</h3>

            {success ? (
              <div className="text-green-400 text-center py-6">
                ✅ Welcome! You&apos;ve joined the community.
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-3">
                <input type="hidden" name="communityId" value={communityId} />
                <input
                  name="userName"
                  required
                  placeholder="Your name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
                />
                {error && <div className="text-red-400 text-sm">{error}</div>}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg text-sm text-white"
                  >
                    {loading ? "Joining..." : "Join"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}