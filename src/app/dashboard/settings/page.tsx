"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, User, Bell, Sparkles } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Settings className="text-purple-500" /> Settings
        </h1>
        <p className="text-gray-400 mt-1">Manage your account and preferences.</p>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="text-purple-500" size={18} /> Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">A</div>
            <div className="flex-1">
              <div className="font-semibold">Alex Creator</div>
              <div className="text-sm text-gray-400">alex@creator.com</div>
            </div>
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm">Change Avatar</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Display Name</label>
              <input defaultValue="Alex Creator" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Username</label>
              <input defaultValue="@alexcreator" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="text-purple-500" size={18} /> AI Representative
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
            <div>
              <div className="text-sm font-medium">Auto-categorize DMs</div>
              <div className="text-xs text-gray-500">Let AI organize your inbox automatically</div>
            </div>
            <div className="w-10 h-6 bg-purple-600 rounded-full flex items-center px-0.5">
              <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="text-purple-500" size={18} /> Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["New opportunities", "Top community ideas", "Weekly digest", "Member milestones"].map((item) => (
            <div key={item} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-sm">{item}</span>
              <div className="w-10 h-6 bg-purple-600 rounded-full flex items-center px-0.5">
                <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}