"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MessageSquare, Lightbulb, Activity } from "lucide-react";

export default function AnalyticsPage() {
  const metrics = [
    { title: "Total Reach", value: "2.4M", change: "+18%", icon: Users, color: "text-blue-400" },
    { title: "Engagement Rate", value: "8.7%", change: "+2.3%", icon: Activity, color: "text-green-400" },
    { title: "DM Response Time", value: "1.2h", change: "-45%", icon: MessageSquare, color: "text-purple-400" },
    { title: "Ideas Generated", value: "340", change: "+24", icon: Lightbulb, color: "text-yellow-400" },
  ];

  const weeklyData = [45, 62, 78, 55, 89, 72, 95];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <BarChart3 className="text-purple-500" /> Analytics
        </h1>
        <p className="text-gray-400 mt-1">Track your community growth and engagement.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.title} className="bg-gray-900 border-gray-800">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <m.icon className={m.color} size={20} />
                <span className="text-xs text-green-400 font-medium">{m.change}</span>
              </div>
              <div className="text-2xl font-bold">{m.value}</div>
              <div className="text-xs text-gray-500 mt-1">{m.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="text-purple-500" size={20} /> Weekly Engagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-48 gap-3">
            {weeklyData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-xs text-gray-400">{value}%</div>
                <div className="w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-lg" style={{ height: `${value}%` }}></div>
                <div className="text-xs text-gray-500">{days[i]}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-base">Top Communities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Fitness Enthusiasts", value: 95 },
              { name: "Developers", value: 92 },
              { name: "Content Creators", value: 89 },
              { name: "Designers", value: 87 },
            ].map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">{c.name}</span>
                  <span className="text-purple-400 font-medium">{c.value}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${c.value}%` }}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-base">AI Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "DM Categorization", value: "94%" },
              { label: "Idea Relevance", value: "89%" },
              { label: "Opportunity Match", value: "91%" },
              { label: "Avg Response", value: "1.2s" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-sm font-bold text-purple-400">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}