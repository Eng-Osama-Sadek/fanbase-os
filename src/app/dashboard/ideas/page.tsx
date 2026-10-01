"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, MessageSquare, CheckCircle, Clock } from "lucide-react";

const ideas = [
  { title: "AI writes a book", author: "Sarah M.", community: "Content Creators", score: 92, status: "PROMOTED", votes: 1240, comments: 87, description: "Use AI to co-write a book with community members contributing chapters." },
  { title: "Art Supply Toolkit", author: "John D.", community: "Designers", score: 88, status: "APPROVED", votes: 890, comments: 45, description: "Curated art supply kits for beginners with community discounts." },
  { title: "30-Day Coding Challenge", author: "Alex K.", community: "Developers", score: 85, status: "APPROVED", votes: 1560, comments: 203, description: "A community-wide challenge to build one project every day for 30 days." },
  { title: "Cobra Yoga moves", author: "Mike R.", community: "Fitness Enthusiasts", score: 75, status: "PENDING", votes: 430, comments: 28, description: "Weekly yoga sessions streamed for the fitness community." },
  { title: "Investor AMA Series", author: "Lisa T.", community: "Investors", score: 81, status: "PENDING", votes: 670, comments: 52, description: "Monthly Ask-Me-Anything sessions with angel investors." },
];

const statusConfig: Record<string, { color: string; icon: any }> = {
  PROMOTED: { color: "bg-green-900 text-green-300", icon: CheckCircle },
  APPROVED: { color: "bg-blue-900 text-blue-300", icon: TrendingUp },
  PENDING: { color: "bg-gray-800 text-gray-400", icon: Clock },
};

export default function IdeasPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Lightbulb className="text-yellow-500" /> Ideas
          </h1>
          <p className="text-gray-400 mt-1">Discover and promote the best ideas from your community.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Promoted", "Approved", "Pending"].map((filter) => (
            <button key={filter} className="px-3 py-1.5 text-sm rounded-lg bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {ideas.map((idea) => {
          const config = statusConfig[idea.status];
          const StatusIcon = config.icon;
          return (
            <Card key={idea.title} className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{idea.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${config.color}`}>
                        <StatusIcon size={12} /> {idea.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{idea.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>by <span className="text-gray-300">{idea.author}</span></span>
                      <span>in <span className="text-purple-400">{idea.community}</span></span>
                      <span className="flex items-center gap-1"><TrendingUp size={12} /> {idea.votes} votes</span>
                      <span className="flex items-center gap-1"><MessageSquare size={12} /> {idea.comments} comments</span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold text-purple-400">{idea.score}</div>
                    <div className="text-xs text-gray-500">AI Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
