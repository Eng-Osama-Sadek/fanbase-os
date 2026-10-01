import { Home, Users, Lightbulb, FolderKanban, MessageSquare, UserPlus, Briefcase, BarChart3, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Overview", icon: Home, href: "/dashboard" },
  { name: "Communities", icon: Users, href: "/dashboard/communities" },
  { name: "Ideas", icon: Lightbulb, href: "/dashboard/ideas" },
  { name: "Projects", icon: FolderKanban, href: "/dashboard/projects" },
  { name: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { name: "Members", icon: UserPlus, href: "/dashboard/members" },
  { name: "Opportunities", icon: Briefcase, href: "/dashboard/opportunities" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-800 bg-gray-900/50 p-4 flex flex-col gap-2">
      <div className="text-xl font-bold mb-6 px-2 flex items-center gap-2">
        <span className="text-purple-500">⚡</span> Fanbase OS
      </div>
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <item.icon size={18} />
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
