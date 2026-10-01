import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
        {children}
      </main>
      
      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around py-3 z-50">
        <a href="/dashboard" className="text-xs text-gray-400 hover:text-purple-400">🏠</a>
        <a href="/dashboard/communities" className="text-xs text-gray-400 hover:text-purple-400">👥</a>
        <a href="/dashboard/ideas" className="text-xs text-gray-400 hover:text-purple-400">💡</a>
        <a href="/dashboard/messages" className="text-xs text-gray-400 hover:text-purple-400">💬</a>
        <a href="/dashboard/analytics" className="text-xs text-gray-400 hover:text-purple-400">📊</a>
      </div>
    </div>
  );
}