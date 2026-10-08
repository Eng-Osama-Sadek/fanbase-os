import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { ArrowLeft, Users, Lightbulb } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PublicCommunityPage({
  params,
}: {
  params: Promise<{ username: string; communityId: string }>;
}) {
  const { username, communityId } = await params;

  const community = await prisma.community.findUnique({
    where: { id: communityId },
    include: {
      creator: true,
      ideas: {
        include: { author: true },
        orderBy: { aiScore: "desc" },
      },
      _count: { select: { members: true } },
    },
  });

  if (!community || community.creator.username !== username) notFound();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-8 pt-8">
        <Link
          href={`/${username}`}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Back to {community.creator.name}
        </Link>

        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl">
            {community.icon || community.name[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{community.name}</h1>
            <p className="text-gray-400 mt-1">{community.description}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users size={14} /> {community._count.members} members
              </span>
              <span className="flex items-center gap-1">
                <Lightbulb size={14} /> {community.ideas.length} ideas
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Community Ideas</h2>
          <div className="space-y-3">
            {community.ideas.length === 0 ? (
              <div className="text-center py-8 text-gray-500 bg-gray-900 border border-gray-800 rounded-xl">
                No ideas yet. Be the first!
              </div>
            ) : (
              community.ideas.map((idea) => (
                <div
                  key={idea.id}
                  className="p-5 bg-gray-900 border border-gray-800 rounded-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{idea.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{idea.content}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        by <span className="text-gray-300">{idea.author.name}</span>
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-purple-400">
                        {idea.aiScore ?? 0}
                      </div>
                      <div className="text-xs text-gray-500">AI Score</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}