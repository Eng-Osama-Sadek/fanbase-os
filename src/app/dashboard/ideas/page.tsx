import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const statusConfig: Record<string, { color: string; icon: any }> = {
  PROMOTED: { color: "bg-green-900 text-green-300", icon: CheckCircle },
  APPROVED: { color: "bg-blue-900 text-blue-300", icon: TrendingUp },
  PENDING: { color: "bg-gray-800 text-gray-400", icon: Clock },
};

export default async function IdeasPage() {
  const ideas = await prisma.idea.findMany({
    include: {
      author: true,
      community: true,
    },
    orderBy: { aiScore: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-white">
            <Lightbulb className="text-yellow-500" /> Ideas
          </h1>
          <p className="text-gray-400 mt-1">Discover and promote the best ideas from your community.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Promoted", "Approved", "Pending"].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1.5 text-sm rounded-lg bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {ideas.map((idea) => {
          const config = statusConfig[idea.status] || statusConfig.PENDING;
          const StatusIcon = config.icon;
          const score = idea.aiScore ?? 0;

          return (
            <Card
              key={idea.id}
              className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{idea.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${config.color}`}
                      >
                        <StatusIcon size={12} /> {idea.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{idea.content}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>
                        by <span className="text-gray-300">{idea.author.name}</span>
                      </span>
                      <span>
                        in <span className="text-purple-400">{idea.community.name}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp size={12} /> {Math.floor(score * 15)} votes
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} /> {Math.floor(score / 3)} comments
                      </span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold text-purple-400">{score}</div>
                    <div className="text-xs text-gray-500">AI Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {ideas.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No ideas yet. Community members can submit them from the link-in-bio page.
        </div>
      )}
    </div>
  );
}