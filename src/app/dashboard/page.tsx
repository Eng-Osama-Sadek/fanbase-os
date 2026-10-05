"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, MessageSquare } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Good morning, Creator! 👋</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> AI Representative Active
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { title: "Total Followers", value: "700K", icon: Users, change: "+12% this week" },
          { title: "Community Members", value: "120K", icon: Users, change: "+5% this week" },
          { title: "Active Ideas", value: "340", icon: Lightbulb, change: "+24 new" },
          { title: "Unread DMs", value: "1.2K", icon: MessageSquare, change: "87 important" },
        ].map((stat) => (
          <Card key={stat.title} className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Users className="text-purple-500" /> Your Communities
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Developers", members: "4.2k", color: "bg-blue-500" },
              { name: "Designers", members: "3.8k", color: "bg-pink-500" },
              { name: "Investors", members: "1.2k", color: "bg-yellow-500" },
              { name: "Musicians", members: "2.5k", color: "bg-purple-500" },
              { name: "Fitness Enthusiasts", members: "5.1k", color: "bg-green-500" },
              { name: "Content Creators", members: "6.3k", color: "bg-orange-500" },
            ].map((community) => (
              <Card key={community.name} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 cursor-pointer transition-all">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${community.color} flex items-center justify-center text-white font-bold`}>
                    {community.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{community.name}</h3>
                    <p className="text-sm text-gray-400">{community.members} members</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold flex items-center gap-2 mt-8">
            <Lightbulb className="text-yellow-500" /> Top Ideas from Your Community
          </h2>
          <div className="space-y-3">
            {[
              { title: "AI writes a book", author: "Sarah M.", score: 92, status: "PROMOTED" },
              { title: "Art Supply Toolkit", author: "John D.", score: 88, status: "APPROVED" },
              { title: "Cobra Yoga moves", author: "Mike R.", score: 75, status: "PENDING" },
            ].map((idea) => (
              <div key={idea.title} className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <div>
                  <h4 className="font-medium">{idea.title}</h4>
                  <p className="text-sm text-gray-500">by {idea.author}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${idea.status === 'PROMOTED' ? 'bg-green-900 text-green-300' : 'bg-gray-800 text-gray-400'}`}>
                    {idea.status}
                  </span>
                  <span className="text-purple-400 font-bold">{idea.score}/100</span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
              <p className="text-sm text-gray-400">I have organized your inbox and found 3 high-value opportunities today.</p>
              <div className="space-y-2">
                <div className="p-3 bg-gray-800 rounded-lg text-sm">
                  <span className="text-green-400 font-semibold">Opportunity:</span> Collab with @TechGuru on AI tools.
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-sm">
                  <span className="text-blue-400 font-semibold">Idea:</span> Community member suggested a 30-Day Challenge.
                </div>
              </div>
              <a
  href="/dashboard/ai-chat"
  className="block w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-center text-white"
>
  Open AI Chat
</a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
