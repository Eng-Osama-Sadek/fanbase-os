import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Lightbulb } from "lucide-react";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const community = await prisma.community.findUnique({
    where: { id },
    include: {
      members: { include: { user: true } },
      ideas: { include: { author: true }, orderBy: { aiScore: "desc" } },
      creator: true,
    },
  });

  if (!community) notFound();

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/communities"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Communities
      </Link>

      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl">
          {community.icon || community.name[0]}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{community.name}</h1>
          <p className="text-gray-400 mt-1">{community.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Users size={14} /> {community.members.length} members
            </span>
            <span className="flex items-center gap-1">
              <Lightbulb size={14} /> {community.ideas.length} ideas
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Ideas in this Community</h2>
        {community.ideas.length === 0 ? (
          <div className="text-gray-500 py-8 text-center bg-gray-900 border border-gray-800 rounded-lg">
            No ideas yet. Be the first to pitch one!
          </div>
        ) : (
          <div className="space-y-3">
            {community.ideas.map((idea) => (
              <div
                key={idea.id}
                className="p-5 bg-gray-900 border border-gray-800 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{idea.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{idea.content}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      by <span className="text-gray-300">{idea.author.name}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      {idea.aiScore ?? 0}
                    </div>
                    <div className="text-xs text-gray-500">AI Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}