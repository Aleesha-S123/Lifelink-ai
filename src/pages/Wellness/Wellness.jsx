import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";
import {
  Heart,
  Wind,
  Music,
  MessageCircle,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function Wellness() {
  const [mood, setMood] = useState(7);
  const [journal, setJournal] = useState("");
  const [saved, setSaved] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [breathText, setBreathText] = useState("Ready?");
  const [supportMessage, setSupportMessage] = useState(
    "Choose a support option whenever you need."
  );

  function startBreathing() {
    setBreathing(true);
    setBreathText("Breathe in... 4");

    setTimeout(() => setBreathText("Hold... 7"), 4000);
    setTimeout(() => setBreathText("Breathe out... 8"), 11000);
    setTimeout(() => {
      setBreathText("Well done 🌿");
      setBreathing(false);
    }, 19000);
  }

  function saveJournal() {
    setSaved(true);
    setSupportMessage("Your journal entry has been saved privately.");
    setTimeout(() => setSaved(false), 2500);
  }

  function handleSupport(type) {
    if (type === "meditation") {
      setSupportMessage("Close your eyes. Take one slow breath. You are safe in this moment.");
    }

    if (type === "nova") {
      setSupportMessage("Nova is here with you. Tell me what is making you feel heavy today.");
    }

    if (type === "music") {
      setSupportMessage("Playing calming music suggestion: soft rain sounds or slow piano.");
    }

    if (type === "journal") {
      setSupportMessage("Write freely below. No judgment, no pressure.");
    }
  }

  const moodEmoji = mood <= 3 ? "😔" : mood <= 6 ? "😐" : mood <= 8 ? "🙂" : "😊";

  return (
    <div className="min-h-screen flex bg-[#100a2e] text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-200 text-sm">
              <Heart size={16} /> Mental Wellness Center
            </div>

            <h1 className="mt-5 text-4xl font-extrabold">
              Your space to breathe.
            </h1>

            <p className="mt-2 text-purple-300">
              Nova is here — gently, without judgment, without pressure.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-purple-400/20 bg-white/10 p-6 shadow-xl">
              <h2 className="font-bold flex items-center gap-2">
                <Heart size={18} className="text-purple-300" />
                Today's Mood
              </h2>

              <div className="text-center mt-6">
                <div className="text-6xl">{moodEmoji}</div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  value={mood}
                  onChange={(e) => setMood(Number(e.target.value))}
                  className="w-full mt-6 accent-purple-500"
                />

                <div className="flex justify-between text-xs text-purple-300 mt-2">
                  <span>Not great</span>
                  <span className="font-bold text-white">{mood}/10</span>
                  <span>Wonderful</span>
                </div>

                <p className="mt-4 text-sm text-purple-200">
                  {mood <= 4
                    ? "It's okay to have hard days. Nova is here."
                    : mood <= 7
                    ? "You're doing okay. Take it one step at a time."
                    : "That's wonderful. Keep caring for yourself."}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-purple-400/20 bg-white/10 p-6 shadow-xl flex flex-col items-center justify-center">
              <h2 className="font-bold flex items-center gap-2">
                <Wind size={18} className="text-purple-300" />
                4-7-8 Breathing
              </h2>

              <div
                className={`mt-6 h-36 w-36 rounded-full flex items-center justify-center font-bold shadow-2xl transition-all duration-700 ${
                  breathing
                    ? "bg-purple-600 scale-110"
                    : "bg-purple-900/60 scale-100"
                }`}
              >
                {breathText}
              </div>

              <button
                onClick={startBreathing}
                disabled={breathing}
                className="mt-6 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 font-semibold"
              >
                {breathing ? "In Progress..." : "Begin Exercise"}
              </button>
            </div>

            <div className="rounded-3xl border border-purple-400/20 bg-white/10 p-6 shadow-xl">
              <h2 className="font-bold mb-5">Quick Support</h2>

              <div className="space-y-4">
                <button
                  onClick={() => handleSupport("meditation")}
                  className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition text-left"
                >
                  <Wind size={18} /> Guided Meditation
                </button>

                <button
                  onClick={() => handleSupport("nova")}
                  className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition text-left"
                >
                  <MessageCircle size={18} /> Talk to Nova
                </button>

                <button
                  onClick={() => handleSupport("music")}
                  className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition text-left"
                >
                  <Music size={18} /> Calming Music
                </button>

                <button
                  onClick={() => handleSupport("journal")}
                  className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition text-left"
                >
                  <BookOpen size={18} /> Open Journal
                </button>
              </div>

              <div className="mt-5 rounded-2xl bg-purple-900/50 p-4 text-sm text-purple-100">
                {supportMessage}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-purple-400/20 bg-white/10 p-6 shadow-xl">
            <h2 className="font-bold flex items-center gap-2">
              <BarChart3 size={18} className="text-purple-300" />
              Weekly Mood Journey
            </h2>

            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-t from-purple-900/60 to-transparent border border-purple-500/10 flex items-end justify-around px-4">
              {[50, 65, 38, 70, 62, 85, mood * 8].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    style={{ height: `${height}px` }}
                    className="w-3 rounded-full bg-gradient-to-t from-purple-500 to-teal-400"
                  ></div>
                  <span className="text-xs text-purple-300">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-purple-400/20 bg-white/10 p-6 shadow-xl">
            <h2 className="font-bold flex items-center gap-2">
              <BookOpen size={18} className="text-purple-300" />
              Daily Journal
            </h2>

            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your thoughts freely. Nova will listen without judgment, without pressure..."
              className="mt-5 w-full h-40 resize-none rounded-2xl bg-transparent outline-none text-white placeholder:text-purple-300"
            />

            <div className="flex justify-between items-center border-t border-purple-400/20 pt-4">
              <span className="text-sm text-purple-300">
                {journal.length} characters
              </span>

              <button
                onClick={saveJournal}
                className="px-5 py-2 rounded-2xl bg-purple-600 hover:bg-purple-700 font-semibold"
              >
                {saved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}