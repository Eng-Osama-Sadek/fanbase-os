"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Sparkles, ExternalLink } from "lucide-react";

const opportunities = [
  { title: "Brand Partnership with TechCorp", type: "SPONSORSHIP", value: "$15,000", community: "Content Creators", deadline: "Oct 20", match: 95 },
  { title: "Podcast Guest Appearance", type: "COLLAB", value: "Exposure", community: "Content Creators", deadline: "Oct 25", match: 88 },
  { title: "Seed Investment Offer", type: "INVESTMENT", value: "$250,000", community: "Investors", deadline: "Nov 1", match: 92 },
  { title: "Book Publishing Deal", type: "PARTNERSHIP", value: "$40,000", community: "Content Creators", deadline: "Nov 15", match: 85 },
  { title: "Music Festival Headliner", type: "EVENT", value: "$8,000", community: "Musicians", deadline: "Oct 30", match: 78 },
];

export default function OpportunitiesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Briefcase className="text-purple-500" /> Opportunities
          </h1>
          <p className="text-gray-400 mt-1">AI-surfaced opportunities from your network.</p>
        </div>
        <div className="px-4 py-2 bg-purple-900/30 border border-purple-800 rounded-lg text-sm text-purple-300 flex items-center gap-2">
          <Sparkles size={14} /> 5 new this week
        </div>
      </div>

      <div className="space-y-4">
        {opportunities.map((opp) => (
          <Card key={opp.title} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{opp.title}</h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-purple-900 text-purple-300">{opp.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{opp.community}</span>
                    <span>Deadline: {opp.deadline}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-400">{opp.value}</div>
                  <div className="text-xs text-gray-500">AI Match: {opp.match}%</div>
                  <button className="mt-2 text-xs text-purple-400 flex items-center gap-1 ml-auto">
                    View <ExternalLink size={10} />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}