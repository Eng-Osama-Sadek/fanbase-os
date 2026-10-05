import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FolderKanban, Plus, Clock, Users } from "lucide-react";

export const dynamic = "force-dynamic";

const projects = [
  { slug: "ai-content-engine", title: "AI Content Engine", status: "IN_PROGRESS", progress: 65, team: 12, dueDate: "Oct 25", community: "Developers" },
  { slug: "community-art-book", title: "Community Art Book", status: "PLANNING", progress: 20, team: 8, dueDate: "Nov 15", community: "Designers" },
  { slug: "investment-club", title: "Investment Club", status: "IN_PROGRESS", progress: 45, team: 5, dueDate: "Oct 30", community: "Investors" },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  PLANNING: { color: "bg-gray-800 text-gray-300", label: "Planning" },
  IN_PROGRESS: { color: "bg-blue-900 text-blue-300", label: "In Progress" },
  COMPLETED: { color: "bg-green-900 text-green-300", label: "Completed" },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-white">
            <FolderKanban className="text-purple-500" /> Projects
          </h1>
          <p className="text-gray-400 mt-1">
            Track community-driven projects from idea to execution.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-white">
          <Plus size={16} /> New Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => {
          const config = statusConfig[project.status];
          return (
            <Link key={project.slug} href={`/dashboard/projects/${project.slug}`} className="block">
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="text-purple-400">{project.community}</span>
                        <span className="flex items-center gap-1">
                          <Users size={12} /> {project.team} members
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> Due {project.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{project.progress}%</div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
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
