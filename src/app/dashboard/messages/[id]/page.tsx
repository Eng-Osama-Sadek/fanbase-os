import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, Lightbulb, Heart, AlertCircle } from "lucide-react";

export const dynamic = "force-dynamic";

const messagesData: Record<string, any> = {
  "0": { sender: "@TechGuru", platform: "X", category: "OPPORTUNITY", summary: "Wants to collaborate on an AI tools review series.", time: "2m ago", content: "Hey! I loved your recent post about AI.", fullConversation: [{ from: "them", text: "Hey! Loved your recent post about AI." }, { from: "them", text: "Would you be open to a collab on a review series?" }] },
  "1": { sender: "Sarah M.", platform: "IG", category: "IDEA", summary: "Suggests a 30-day challenge.", time: "15m ago", content: "I have an idea for a community challenge.", fullConversation: [{ from: "them", text: "Hi! I have an idea for a community challenge." }, { from: "them", text: "What if we do a 30-day challenge?" }] },
  "2": { sender: "@VC_Fund", platform: "LinkedIn", category: "OPPORTUNITY", summary: "Interested in investing.", time: "1h ago", content: "We would love to discuss potential investment.", fullConversation: [{ from: "them", text: "We've been following your work." }, { from: "them", text: "Would love to discuss a potential investment." }] },
  "3": { sender: "John D.", platform: "X", category: "FAN_MAIL", summary: "Thanks for inspiring him.", time: "3h ago", content: "Your content changed my life.", fullConversation: [{ from: "them", text: "Just wanted to say thank you." }, { from: "them", text: "Your content changed my life. I just landed my first dev job!" }] },
  "4": { sender: "SpamBot", platform: "IG", category: "SPAM", summary: "Promotional spam.", time: "5h ago", content: "Click here to win...", fullConversation: [{ from: "them", text: "Click here to win a free iPhone..." }] },
};

const categoryConfig: Record<string, { color: string; icon: any; label: string }> = {
  OPPORTUNITY: { color: "bg-green-900/50 text-green-300 border-green-800", icon: Briefcase, label: "Opportunity" },
  IDEA: { color: "bg-yellow-900/50 text-yellow-300 border-yellow-800", icon: Lightbulb, label: "Idea" },
  FAN_MAIL: { color: "bg-pink-900/50 text-pink-300 border-pink-800", icon: Heart, label: "Fan Mail" },
  SPAM: { color: "bg-gray-800 text-gray-400 border-gray-700", icon: AlertCircle, label: "Spam" },
};

export default async function MessageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const message = messagesData[id];
  if (!message) notFound();
  const config = categoryConfig[message.category];
  const Icon = config.icon;

  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/dashboard/messages" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Back to Messages
      </Link>

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg border ${config.color}`}>
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">{message.sender}</h1>
            <span className={`px-2 py-0.5 text-xs rounded-full ${config.color}`}>{config.label}</span>
          </div>
          <p className="text-sm text-gray-500">via {message.platform} · {message.time}</p>
          <p className="text-gray-300 mt-4">{message.summary}</p>
        </div>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
        <h2 className="text-sm font-medium text-gray-400 mb-4">Conversation</h2>
        <div className="space-y-3">
          {message.fullConversation.map((msg: any, i: number) => (
            <div key={i} className="p-3 rounded-lg max-w-[80%] bg-gray-800 text-gray-200">{msg.text}</div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium text-white transition-colors">Reply</button>
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-colors">Archive</button>
      </div>
    </div>
  );
}