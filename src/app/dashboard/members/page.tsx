import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Star, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

const members = [
  { slug: "sarah-m", name: "Sarah M.", handle: "@sarahm", community: "Content Creators", ideas: 12, reputation: 98 },
  { slug: "john-d", name: "John D.", handle: "@johnd", community: "Designers", ideas: 8, reputation: 92 },
  { slug: "alex-k", name: "Alex K.", handle: "@alexk", community: "Developers", ideas: 15, reputation: 96 },
  { slug: "lisa-t", name: "Lisa T.", handle: "@lisat", community: "Investors", ideas: 6, reputation: 88 },
  { slug: "mike-r", name: "Mike R.", handle: "@miker", community: "Fitness Enthusiasts", ideas: 9, reputation: 85 },
  { slug: "emma-w", name: "Emma W.", handle: "@emmaw", community: "Musicians", ideas: 7, reputation: 90 },
];

export default function MembersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-white">
            <UserPlus className="text-purple-500" /> Members
          </h1>
          <p className="text-gray-400 mt-1">Your most valuable community contributors.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input placeholder="Search members..." className="bg-transparent outline-none text-sm w-48 text-white placeholder-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {members.map((member) => (
          <Link key={member.slug} href={`/dashboard/members/${member.slug}`} className="block">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all cursor-pointer h-full">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">
                  {member.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <Star className="text-yellow-500" size={14} />
                  </div>
                  <p className="text-xs text-gray-500">{member.handle} · {member.community}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                    <span>{member.ideas} ideas</span>
                    <span className="flex items-center gap-1 text-purple-400">
                      <TrendingUp size={10} /> {member.reputation}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
