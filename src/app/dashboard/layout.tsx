import { Sidebar } from "@/components/Sidebar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="flex justify-end p-4 border-b border-gray-800">
          <UserButton />
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}