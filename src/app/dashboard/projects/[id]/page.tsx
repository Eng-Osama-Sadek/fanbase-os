import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Clock, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

const projectsData: Record<string, any> = {
  "ai-content-engine": {
    title: "AI Content Engine",
    status: "IN_PROGRESS",
    progress: 65,
    team: 12,
    dueDate: "Oct 25",
    community: "Developers",
    description: "Build an AI-powered content engine that generates blog posts, social media captions, and video scripts from a single prompt.",
    milestones: [
      { name: "Research & Design", done: true },
      { name: "Backend API", done: true },
      { name: "Frontend UI", done: false },
      { name: "Testing & Launch", done: false },
    ],
  },
  "community-art-book": {
    title: "Community Art Book",
    status: "PLANNING",
    progress: 20,
    team: 8,
    dueDate: "Nov 15",
    community: "Designers",
    description: "Curate artwork from community members into a printed book, with each artist credited and a portion of proceeds going back to them.",
    milestones: [
      { name: "Call for Submissions", done: true },
      { name: "Select Artworks", done: false },
      { name: "Design & Layout", done: false },
      { name: "Print & Ship", done: false },
    ],
  },
  "investment-club": {
    title: "Investment Club",
    status: "IN_PROGRESS",
    progress: 45,
    team: 5,
    dueDate: "Oct 30",
    community: "Investors",
    description: "A members-only investment club where creators pool resources, share deal flow, and co-invest in early-stage startups.",
    milestones: [
      { name: "Legal Structure", done: true },
      { name: "Member Onboarding", done: false },
      { name: "First Deal", done: false },
    ],
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) notFound();

  const statusColor =
    project.status === "IN_PROGRESS"
      ? "bg-blue-900 text-blue-300"
      : project.status === "COMPLETED"
      ? "bg-green-900 text-green-300"
      : "bg-gray-800 text-gray-300";

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
          <span className={`px-3 py-1 text-xs rounded-full ${statusColor}`}>
            {project.status.replace("_", " ")}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="text-purple-400">{project.community}</span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {project.team} members
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> Due {project.dueDate}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-3">About this Project</h2>
            <p className="text-gray-400 leading-relaxed">{project.description}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Milestones</h2>
            <div className="space-y-3">
              {project.milestones.map((m: any, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      m.done
                        ? "bg-green-600 text-white"
                        : "bg-gray-800 text-gray-500"
                    }`}
                  >
                    {m.done ? "✓" : i + 1}
                  </div>
                  <span
                    className={
                      m.done
                        ? "text-white line-through decoration-gray-600"
                        : "text-gray-400"
                    }
                  >
                    {m.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Progress</h3>
            <div className="text-3xl font-bold text-purple-400 mb-3">
              {project.progress}%
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-white">
            Join this Project
          </button>
        </div>
      </div>
    </div>
  );
}