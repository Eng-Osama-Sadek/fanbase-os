import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus } from "lucide-react";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const colorMap: Record<string, string> = {
  Developers: "bg-blue-500",
  Designers: "bg-pink-500",
  Investors: "bg-yellow-500",
  Musicians: "bg-purple-500",
  "Fitness Enthusiasts": "bg-green-500",
  "Content Creators": "bg-orange-500",
};

export default async function CommunitiesPage() {
  const communities = await prisma.community.findMany({
    include: {
      _count: { select: { members: true, ideas: true } },
    },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Communities</h1>
          <p className="text-gray-400 mt-1">Organize your followers into interest-based groups.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} /> Create Community
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {communities.map((community) => (
          <Card key={community.id} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 cursor-pointer transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${colorMap[community.name] || "bg-gray-500"} flex items-center justify-center text-white font-bold text-lg`}>
                  {community.icon || community.name[0]}
                </div>
                <div>
                  <CardTitle className="text-lg text-white">{community.name}</CardTitle>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Users size={12} /> {community._count.members} members · {community._count.ideas} ideas
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{community.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Engagement</span>
                <span className="text-purple-400 font-bold">{Math.min(95, 60 + community._count.ideas * 5)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: `${Math.min(95, 60 + community._count.ideas * 5)}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {communities.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No communities yet. Click "Create Community" to get started.
        </div>
      )}
    </div>
  );
}