"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus } from "lucide-react";

const communities = [
  { name: "Developers", members: 4200, description: "Coders, engineers, and tech enthusiasts sharing knowledge.", color: "bg-blue-500", engagement: 92 },
  { name: "Designers", members: 3800, description: "UI/UX designers and visual creators collaborating on projects.", color: "bg-pink-500", engagement: 87 },
  { name: "Investors", members: 1200, description: "Angel investors and VCs looking for promising ventures.", color: "bg-yellow-500", engagement: 78 },
  { name: "Musicians", members: 2500, description: "Musicians, producers, and audio creators sharing their craft.", color: "bg-purple-500", engagement: 84 },
  { name: "Fitness Enthusiasts", members: 5100, description: "Health and fitness lovers sharing routines and motivation.", color: "bg-green-500", engagement: 95 },
  { name: "Content Creators", members: 6300, description: "YouTubers, streamers, and writers building their audiences.", color: "bg-orange-500", engagement: 89 },
];

export default function CommunitiesPage() {
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
          <Card key={community.name} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 cursor-pointer transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${community.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {community.name[0]}
                </div>
                <div>
                  <CardTitle className="text-lg">{community.name}</CardTitle>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Users size={12} /> {community.members.toLocaleString()} members
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{community.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Engagement</span>
                <span className="text-purple-400 font-bold">{community.engagement}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${community.engagement}%` }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
