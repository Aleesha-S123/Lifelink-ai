import { Sparkles } from "lucide-react";

export default function NovaOrb({ small = false }) {
  return (
    <div className={`relative flex items-center justify-center ${small ? "h-16 w-16" : "h-40 w-40"}`}>
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse"></div>
      <div className="absolute inset-4 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>

      <div className="absolute h-full w-full rounded-full border border-blue-300/40 animate-spin [animation-duration:12s]"></div>
      <div className="absolute h-[80%] w-[80%] rounded-full border border-purple-300/40 animate-spin [animation-duration:8s] [animation-direction:reverse]"></div>

      <div className={`${small ? "h-12 w-12" : "h-28 w-28"} rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-teal-400 shadow-2xl flex items-center justify-center text-white font-extrabold ${small ? "text-lg" : "text-4xl"}`}>
        N
      </div>

      {!small && (
        <div className="absolute -top-2 -right-1 text-blue-500">
          <Sparkles size={22} />
        </div>
      )}
    </div>
  );
}