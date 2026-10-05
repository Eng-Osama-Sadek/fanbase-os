import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, MessageSquare } from "lucide-react";
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

export default async function DashboardOverview() {
  const [communities, ideas, counts] = await Promise.all([
    prisma.community.findMany({
      include: { _count: { select: { members: true, ideas: true } } },
      orderBy: { createdAt: "asc" },
      take: 6,
    }),
    prisma.idea.findMany({
      include: { author: true, community: true },
      orderBy: { aiScore: "desc" },
      take: 5,
    }),
    Promise.all([
      prisma.user.count(),
      prisma.community.count(),
      prisma.idea.count(),
      prisma.message.count(),
    ]),
  ]);

  const [userCount, communityCount, ideaCount, messageCount] = counts;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          Good morning, Creator! 👋
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> AI
          Representative Active
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            title: "Total Followers",
            value: "700K",
            icon: Users,
            change: "+12% this week",
          },
          {
            title: "Community Members",
            value: `${communityCount}`,
            icon: Users,
            change: `+${userCount} users`,
          },
          {
            title: "Active Ideas",
            value: `${ideaCount}`,
            icon: Lightbulb,
            change: "Live from DB",
          },
          {
            title: "Unread DMs",
            value: `${messageCount}`,
            icon: MessageSquare,
            change: "AI filtered",
          },
        ].map((stat) => (
          <Card key={stat.title} className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Communities */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Users className="text-purple-500" /> Your Communities
            </h2>
            <Link
              href="/dashboard/communities"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {communities.map((community) => (
              <Link
                key={community.id}
                href={`/dashboard/communities/${community.id}`}
                className="block"
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 cursor-pointer transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${
                        colorMap[community.name] || "bg-gray-500"
                      } flex items-center justify-center text-white font-bold`}
                    >
                      {community.icon || community.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {community.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {community._count.members} members ·{" "}
                        {community._count.ideas} ideas
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Top Ideas */}
          <h2 className="text-xl font-semibold flex items-center gap-2 mt-8 text-white">
            <Lightbulb className="text-yellow-500" /> Top Ideas from Your
            Community
          </h2>
          <div className="space-y-3">
            {ideas.map((idea) => {
              const score = idea.aiScore ?? 0;
              const statusColor =
                idea.status === "PROMOTED"
                  ? "bg-green-900 text-green-300"
                  : idea.status === "APPROVED"
                  ? "bg-blue-900 text-blue-300"
                  : "bg-gray-800 text-gray-400";
              return (
                <Link
                  key={idea.id}
                  href="/dashboard/ideas"
                  className="block"
                >
                  <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/30 transition-all">
                    <div>
                      <h4 className="font-medium text-white">{idea.title}</h4>
                      <p className="text-sm text-gray-500">
                        by {idea.author.name} · in {idea.community.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${statusColor}`}
                      >
                        {idea.status}
                      </span>
                      <span className="text-purple-400 font-bold">
                        {score}/100
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* AI Representative Widget */}
        <div className="col-span-1">
          <Card className="bg-gray-900 border-gray-800 sticky top-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                Your AI Representative
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-400">
                I've organized your inbox and found 3 high-value opportunities
                today.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-gray-800 rounded-lg text-sm text-gray-300">
                  <span className="text-green-400 font-semibold">
                    Opportunity:
                  </span>{" "}
                  Collab with @TechGuru on AI tools.
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-sm text-gray-300">
                  <span className="text-blue-400 font-semibold">Idea:</span>{" "}
                  Community member suggested a 30-Day Challenge.
                </div>
              </div>
              <Link
                href="/dashboard/ai-chat"
                className="block w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-center text-white"
              >
                Open AI Chat
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}