"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FolderKanban, Plus, Clock, Users } from "lucide-react";

const projects = [
  { title: "AI Content Engine", status: "IN_PROGRESS", progress: 65, team: 12, dueDate: "Oct 25", community: "Developers" },
  { title: "Community Art Book", status: "PLANNING", progress: 20, team: 8, dueDate: "Nov 15", community: "Designers" },
  { title: "Investment Club", status: "IN_PROGRESS", progress: 45, team: 5, dueDate: "Oct 30", community: "Investors" },
  { title: "Music Collaboration Album", status: "COMPLETED", progress: 100, team: 15, dueDate: "Oct 1", community: "Musicians" },
  { title: "30-Day Fitness Challenge", status: "IN_PROGRESS", progress: 78, team: 42, dueDate: "Oct 20", community: "Fitness Enthusiasts" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FolderKanban className="text-purple-500" /> Projects
          </h1>
          <p className="text-gray-400 mt-1">Track community-driven projects.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium">
          <Plus size={16} /> New Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="text-purple-400">{project.community}</span>
                    <span className="flex items-center gap-1"><Users size={12} /> {project.team} members</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> Due {project.dueDate}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-400">{project.progress}%</div>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}