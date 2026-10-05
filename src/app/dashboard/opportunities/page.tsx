import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, TrendingUp, DollarSign, Users, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

const opportunities = [
  { slug: "brand-partnership-techcorp", title: "Brand Partnership with TechCorp", type: "SPONSORSHIP", value: "$15,000", community: "Content Creators", deadline: "Oct 20", match: 95 },
  { slug: "podcast-guest", title: "Podcast Guest Appearance", type: "COLLAB", value: "Exposure", community: "Content Creators", deadline: "Oct 25", match: 88 },
  { slug: "seed-investment", title: "Seed Investment Offer", type: "INVESTMENT", value: "$250,000", community: "Investors", deadline: "Nov 1", match: 92 },
  { slug: "book-publishing", title: "Book Publishing Deal", type: "PARTNERSHIP", value: "$40,000", community: "Content Creators", deadline: "Nov 15", match: 85 },
  { slug: "music-festival", title: "Music Festival Headliner", type: "EVENT", value: "$8,000", community: "Musicians", deadline: "Oct 30", match: 78 },
];

const typeConfig: Record<string, { color: string; icon: any }> = {
  SPONSORSHIP: { color: "bg-green-900 text-green-300", icon: DollarSign },
  COLLAB: { color: "bg-blue-900 text-blue-300", icon: Users },
  INVESTMENT: { color: "bg-purple-900 text-purple-300", icon: TrendingUp },
  PARTNERSHIP: { color: "bg-yellow-900 text-yellow-300", icon: Briefcase },
  EVENT: { color: "bg-pink-900 text-pink-300", icon: Sparkles },
};

export default function OpportunitiesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-white">
            <Briefcase className="text-purple-500" /> Opportunities
          </h1>
          <p className="text-gray-400 mt-1">AI-surfaced opportunities from your network.</p>
        </div>
        <div className="px-4 py-2 bg-purple-900/30 border border-purple-800 rounded-lg text-sm text-purple-300 flex items-center gap-2">
          <Sparkles size={14} /> 5 new this week
        </div>
      </div>

      <div className="space-y-4">
        {opportunities.map((opp) => {
          const config = typeConfig[opp.type];
          const Icon = config.icon;
          return (
            <Link key={opp.slug} href={`/dashboard/opportunities/${opp.slug}`} className="block">
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-lg ${config.color} shrink-0`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-white">{opp.title}</h3>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${config.color}`}>
                            {opp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{opp.community}</span>
                          <span>Deadline: {opp.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">{opp.value}</div>
                      <div className="text-xs text-gray-500">AI Match: {opp.match}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
