export default function NovaAvatar() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-56 w-56 rounded-full bg-blue-400 blur-3xl opacity-30"></div>
      <div className="absolute h-40 w-40 rounded-full bg-purple-400 blur-2xl opacity-30"></div>

      <div className="relative h-56 w-56 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-2xl flex items-center justify-center">
        <div className="h-36 w-36 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-teal-400 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
          N
        </div>
      </div>
    </div>
  );
}