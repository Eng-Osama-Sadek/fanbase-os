import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Users, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

const colorMap: Record<string, string> = {
  Developers: "bg-blue-500",
  Designers: "bg-pink-500",
  Investors: "bg-yellow-500",
  Musicians: "bg-purple-500",
  "Fitness Enthusiasts": "bg-green-500",
  "Content Creators": "bg-orange-500",
};

export default async function CreatorProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const creator = await prisma.user.findUnique({
    where: { username },
    include: {
      createdCommunities: {
        include: { _count: { select: { members: true, ideas: true } } },
      },
    },
  });

  if (!creator) notFound();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">
      <div className="max-w-md w-full space-y-6 pt-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center text-3xl font-bold bg-purple-600">
            {creator.name[0]}
          </div>
          <h1 className="text-2xl font-bold">{creator.name}</h1>
          <p className="text-gray-400">
            {creator.bio || "Welcome to my community"}
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <Users size={14} /> Join a Community
          </h2>
          <div className="space-y-2">
            {creator.createdCommunities.map((community) => (
              <Link
                key={community.id}
                href={"/" + username + "/" + community.id}
                className="block"
              >
                <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 hover:border-purple-500/50 rounded-xl transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div
                      className={
                        "w-10 h-10 rounded-full " +
                        (colorMap[community.name] || "bg-gray-500") +
                        " flex items-center justify-center text-lg"
                      }
                    >
                      {community.icon || community.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold">{community.name}</h3>
                      <p className="text-xs text-gray-500">
                        {community._count.members} members
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-500" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 pt-8">
          Powered by Fanbase OS
        </div>
      </div>
    </div>
  );
}