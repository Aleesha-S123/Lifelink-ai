import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";
import {
  Moon,
  Eye,
  BookOpen,
  Mic,
  Volume2,
  Keyboard,
  Languages,
  CaseSensitive,
} from "lucide-react";

export default function Settings() {
  const [voiceEnabled, setVoiceEnabled] = useState(
    localStorage.getItem("voiceAssistant") === "true"
  );

  function toggleVoice() {
    const newValue = !voiceEnabled;
    setVoiceEnabled(newValue);
    localStorage.setItem("voiceAssistant", newValue);
  }

  const visualSettings = [
    { icon: Moon, title: "Dark Mode", desc: "Reduce eye strain with a dark interface" },
    { icon: Eye, title: "High Contrast Mode", desc: "Enhanced contrast for better visibility" },
    { icon: BookOpen, title: "Dyslexia-Friendly Font", desc: "OpenDyslexic typeface for easier reading" },
  ];

  const navigationSettings = [
    { icon: Mic, title: "Voice Navigation", desc: "Navigate entirely using voice commands", voice: true },
    { icon: Volume2, title: "Screen Reader Mode", desc: "Optimized layout for screen reader software" },
    { icon: Keyboard, title: "Enhanced Keyboard Navigation", desc: "Visible focus indicators and keyboard shortcuts" },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Accessibility Settings
          </h1>

          <p className="mt-2 text-slate-600">
            Customize LifeLink AI to work exactly the way you need it to.
          </p>

          <div className="mt-8 bg-white rounded-3xl shadow border border-slate-200 overflow-hidden">
            <h2 className="p-5 font-bold border-b">Visual Accessibility</h2>

            {visualSettings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center justify-between p-5 border-b last:border-b-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>

                  <button className="h-7 w-12 rounded-full bg-slate-300 relative">
                    <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white"></span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-white rounded-3xl shadow border border-slate-200 overflow-hidden">
            <h2 className="p-5 font-bold border-b">Navigation & Input</h2>

            {navigationSettings.map((item) => {
              const Icon = item.icon;
              const enabled = item.voice ? voiceEnabled : false;

              return (
                <div key={item.title} className="flex items-center justify-between p-5 border-b last:border-b-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>

                  <button
                    onClick={item.voice ? toggleVoice : undefined}
                    className={`h-7 w-12 rounded-full relative transition ${
                      enabled ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                        enabled ? "left-6" : "left-1"
                      }`}
                    ></span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-white rounded-3xl shadow border border-slate-200 p-5">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <CaseSensitive size={18} />
              </div>
              <div>
                <h3 className="font-bold">Font Size</h3>
                <p className="text-sm text-slate-500">Scale text across the entire app</p>
              </div>
            </div>

            <input type="range" min="12" max="24" defaultValue="16" className="mt-6 w-full accent-blue-600" />

            <div className="flex justify-between mt-3 text-slate-600">
              <span>A</span>
              <span className="text-blue-600 font-bold">16px</span>
              <span className="text-2xl">A</span>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-3xl shadow border border-slate-200 p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Languages size={18} />
              </div>
              <div>
                <h3 className="font-bold">Language</h3>
                <p className="text-sm text-slate-500">47 languages supported by Nova</p>
              </div>
            </div>

            <select className="px-4 py-2 rounded-2xl border bg-white">
              <option>English</option>
              <option>Malayalam</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}