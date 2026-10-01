"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Sparkles, AlertCircle, Briefcase, Heart, Lightbulb } from "lucide-react";

const messages = [
  { sender: "@TechGuru", platform: "X", category: "OPPORTUNITY", summary: "Wants to collaborate on an AI tools review series.", time: "2m ago", content: "Hey! I loved your recent post about AI. Would you be open to a collab on a review series?" },
  { sender: "Sarah M.", platform: "IG", category: "IDEA", summary: "Suggests a 30-day challenge for the community.", time: "15m ago", content: "I have an idea for a community challenge that could really boost engagement..." },
  { sender: "@VC_Fund", platform: "LinkedIn", category: "OPPORTUNITY", summary: "Interested in investing in your next venture.", time: "1h ago", content: "We have been following your work and would love to discuss potential investment..." },
  { sender: "John D.", platform: "X", category: "FAN_MAIL", summary: "Thanks for inspiring him to start coding.", time: "3h ago", content: "Your content changed my life. I just landed my first dev job!" },
  { sender: "SpamBot", platform: "IG", category: "SPAM", summary: "Promotional spam message.", time: "5h ago", content: "Click here to win a free iPhone..." },
];

const categoryConfig: Record<string, { color: string; icon: any; label: string }> = {
  OPPORTUNITY: { color: "bg-green-900/50 text-green-300 border-green-800", icon: Briefcase, label: "Opportunity" },
  IDEA: { color: "bg-yellow-900/50 text-yellow-300 border-yellow-800", icon: Lightbulb, label: "Idea" },
  FAN_MAIL: { color: "bg-pink-900/50 text-pink-300 border-pink-800", icon: Heart, label: "Fan Mail" },
  SPAM: { color: "bg-gray-800 text-gray-400 border-gray-700", icon: AlertCircle, label: "Spam" },
};

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <MessageSquare className="text-purple-500" /> Messages
          </h1>
          <p className="text-gray-400 mt-1">AI-filtered inbox. Only what matters.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-800 rounded-lg text-sm">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-purple-300">AI Organized 1,247 messages today</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const Icon = config.icon;
          const count = messages.filter(m => m.category === key).length;
          return (
            <Card key={key} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`p-2 rounded-lg border ${config.color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-xs text-gray-400">{config.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="space-y-3">
        {messages.map((msg, i) => {
          const config = categoryConfig[msg.category];
          const Icon = config.icon;
          return (
            <Card key={i} className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg border ${config.color} shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold">{msg.sender}</span>
                      <span className="text-xs text-gray-500">via {msg.platform}</span>
                      <span className="text-xs text-gray-500">· {msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{msg.summary}</p>
                    <p className="text-xs text-gray-600 italic">"{msg.content}"</p>
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
