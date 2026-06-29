import {
  Plus,
  GraduationCap,
  Accessibility,
  Shield,
  HeartPulse,
  Brain,
  Settings,
  MessageCircle,
  Home,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NovaOrb from "../nova/NovaOrb";

export default function Sidebar() {
  const location = useLocation();

  const modules = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: GraduationCap, label: "Opportunities", path: "/opportunities" },
    { icon: Accessibility, label: "Accessibility", path: "/accessibility" },
    { icon: Shield, label: "Safety", path: "/safety" },
    { icon: HeartPulse, label: "Healthcare", path: "/healthcare" },
    { icon: Brain, label: "Wellness", path: "/wellness" },
  ];

  const recent = ["AI Scholarships", "Healthcare", "Accessibility"];

  return (
    <aside className="hidden lg:flex w-80 min-h-screen bg-white/95 backdrop-blur-xl border-r border-slate-200 p-5 flex-col shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <NovaOrb small />
        <div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LifeLink AI
          </h1>
          <p className="text-sm text-slate-500">Nova Command Center</p>
        </div>
      </div>

      <Link
        to="/dashboard"
        className="flex items-center justify-center gap-2 px-5 py-4 rounded-3xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition"
      >
        <Plus size={20} />
        New Chat
      </Link>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-extrabold mb-3">
          Recent
        </p>

        <div className="space-y-2">
          {recent.map((item) => (
            <Link
              key={item}
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-2xl text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <MessageCircle size={18} />
              <span className="font-medium">{item}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-extrabold mb-3">
          Nova Modules
        </p>

        <div className="space-y-2">
          {modules.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-2xl transition font-semibold ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-2xl text-slate-600 hover:bg-slate-100 transition font-semibold"
        >
          <Settings size={19} />
          Settings
        </Link>
      </div>
    </aside>
  );
}