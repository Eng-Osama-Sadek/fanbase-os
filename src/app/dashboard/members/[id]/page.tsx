import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, TrendingUp, Lightbulb } from "lucide-react";

export const dynamic = "force-dynamic";

const membersData: Record<string, any> = {
  "sarah-m": {
    name: "Sarah M.",
    handle: "@sarahm",
    community: "Content Creators",
    ideas: 12,
    reputation: 98,
    bio: "Content creator focused on AI writing tools and community building. Writes a weekly newsletter with 50K+ subscribers.",
    recentIdeas: [
      { title: "AI writes a book", score: 92 },
      { title: "Newsletter collaboration series", score: 87 },
      { title: "Weekly writing workshop", score: 78 },
    ],
  },
  "john-d": {
    name: "John D.",
    handle: "@johnd",
    community: "Designers",
    ideas: 8,
    reputation: 92,
    bio: "UI/UX designer specializing in creator tools and community platforms. Has designed 30+ products.",
    recentIdeas: [
      { title: "Art Supply Toolkit", score: 88 },
      { title: "Community design system", score: 82 },
    ],
  },
  "alex-k": {
    name: "Alex K.",
    handle: "@alexk",
    community: "Developers",
    ideas: 15,
    reputation: 96,
    bio: "Full-stack developer and open-source contributor. Built several production apps used by 100K+ users.",
    recentIdeas: [
      { title: "30-Day Coding Challenge", score: 85 },
      { title: "AI code review bot", score: 91 },
      { title: "Community hackathon", score: 84 },
    ],
  },
  "lisa-t": {
    name: "Lisa T.",
    handle: "@lisat",
    community: "Investors",
    ideas: 6,
    reputation: 88,
    bio: "Angel investor with 40+ portfolio companies. Focused on creator economy and AI tools.",
    recentIdeas: [{ title: "Investor AMA Series", score: 81 }],
  },
  "mike-r": {
    name: "Mike R.",
    handle: "@miker",
    community: "Fitness Enthusiasts",
    ideas: 9,
    reputation: 85,
    bio: "Certified fitness coach with a passion for building health-focused communities.",
    recentIdeas: [{ title: "Cobra Yoga moves", score: 75 }],
  },
  "emma-w": {
    name: "Emma W.",
    handle: "@emmaw",
    community: "Musicians",
    ideas: 7,
    reputation: 90,
    bio: "Independent musician and producer. Released 5 albums and collaborated with 20+ artists.",
    recentIdeas: [
      { title: "Community album", score: 89 },
      { title: "Music production workshop", score: 83 },
    ],
  },
};

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = membersData[id];

  if (!member) notFound();

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/members"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Members
      </Link>

      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
          {member.name[0]}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">{member.name}</h1>
            <Star className="text-yellow-500" size={20} />
          </div>
          <p className="text-gray-400 mt-1">
            {member.handle} · {member.community}
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">{member.bio}</p>

          <div className="flex items-center gap-6 mt-6">
            <div>
              <div className="text-2xl font-bold text-purple-400">{member.ideas}</div>
              <div className="text-xs text-gray-500">Ideas Submitted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 flex items-center gap-1">
                <TrendingUp size={18} /> {member.reputation}
              </div>
              <div className="text-xs text-gray-500">Reputation</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" size={20} /> Recent Ideas
        </h2>
        <div className="space-y-3">
          {member.recentIdeas.map((idea: any, i: number) => (
            <div
              key={i}
              className="flex items-center justify-between p-5 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/30 transition-all"
            >
              <h3 className="text-white font-medium">{idea.title}</h3>
              <div className="text-purple-400 font-bold">{idea.score}/100</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}