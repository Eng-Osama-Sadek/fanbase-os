import Link from "next/link";
import {
  Sparkles,
  Users,
  Lightbulb,
  MessageSquare,
  ArrowRight,
  Zap,
  Brain,
  Target,
  CheckCircle,
  X,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Zap className="text-purple-500" size={24} />
            Fanbase OS
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-800 rounded-full text-sm text-purple-300 mb-8">
          <Sparkles size={14} />
          <span>AI-Powered Creator Economy Platform</span>
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
          Turn Your Followers Into
          <br />
          Coordinated Communities
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Creators drown in DMs. Valuable ideas and opportunities get lost.
          Fanbase OS uses AI to organize your inbox, surface the best ideas, and
          turn your followers into an owner community.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-colors flex items-center gap-2 text-lg"
          >
            Explore Dashboard <ArrowRight size={18} />
          </Link>
          <Link
            href="/alex-creator"
            className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl font-medium transition-colors text-lg"
          >
            View Link-in-Bio Demo
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-gradient-to-br from-red-900/20 to-gray-900 border border-red-900/30 rounded-2xl">
            <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4">
              The Problem
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Creators with 700K followers still lose the best ideas in their
              DMs
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" size={18} />
                <span>1,200+ unread messages every day</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" size={18} />
                <span>Real opportunities buried under spam</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" size={18} />
                <span>Followers have no way to collaborate</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" size={18} />
                <span>Pay-to-message models waste value</span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/30 rounded-2xl">
            <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">
              The Solution
            </div>
            <h2 className="text-2xl font-bold mb-4">
              An AI Representative + Organized Communities
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />
                <span>AI categorizes and summarizes every DM</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />
                <span>Interest-based communities for followers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />
                <span>Ideas scored and surfaced automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />
                <span>
                  Creator promotes community ideas to wider audience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Full Operating System
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: MessageSquare,
              title: "AI Inbox",
              description:
                "Every DM categorized, summarized, and prioritized automatically.",
              color: "text-blue-400",
            },
            {
              icon: Users,
              title: "Communities",
              description:
                "Organize followers into interest-based groups that actually engage.",
              color: "text-pink-400",
            },
            {
              icon: Lightbulb,
              title: "Idea Engine",
              description:
                "AI scores fan ideas by feasibility and impact. Surface the best.",
              color: "text-yellow-400",
            },
            {
              icon: Brain,
              title: "AI Representative",
              description:
                "Chat with your AI rep to understand your community instantly.",
              color: "text-purple-400",
            },
            {
              icon: Target,
              title: "Opportunity Discovery",
              description:
                "Collabs, sponsorships, investments - never miss one.",
              color: "text-green-400",
            },
            {
              icon: Sparkles,
              title: "Link-in-Bio Hub",
              description:
                "A public page where fans join communities and pitch ideas.",
              color: "text-orange-400",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <feature.icon className={`${feature.color} mb-4`} size={28} />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The Flow</h2>
        <p className="text-center text-gray-400 mb-12">
          Followers &rarr; Communities &rarr; Ideas &rarr; Collaboration &rarr;
          Action
        </p>
        <div className="flex items-center justify-between gap-4">
          {["Followers", "Communities", "Ideas", "Collaboration", "Action"].map(
            (step, i, arr) => (
              <div key={step} className="flex items-center gap-4 flex-1">
                <div className="flex-1 p-4 bg-gray-900 border border-gray-800 rounded-xl text-center">
                  <div className="text-purple-400 font-bold text-sm mb-1">
                    STEP {i + 1}
                  </div>
                  <div className="font-semibold">{step}</div>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight
                    className="text-gray-700 shrink-0"
                    size={20}
                  />
                )}
              </div>
            )
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="p-12 bg-gradient-to-br from-purple-900/40 via-gray-900 to-gray-900 border border-purple-500/30 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Owner Community?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Experience the full dashboard with AI-powered inbox, communities,
            and idea surfacing.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-colors text-lg"
          >
            Launch Dashboard <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        Built for Startupathon · Persist Ventures Challenge
      </footer>
    </div>
  );
}