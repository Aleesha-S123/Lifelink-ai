import {
  MessageCircle,
  GraduationCap,
  Accessibility,
  Shield,
  User,
} from "lucide-react";

export default function MobileNav() {
  const items = [
    { icon: MessageCircle, label: "Chat" },
    { icon: GraduationCap, label: "Jobs" },
    { icon: Accessibility, label: "Access" },
    { icon: Shield, label: "Safety" },
    { icon: User, label: "Profile" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200 px-2 py-2">
      <div className="flex justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1 text-xs text-slate-600"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}