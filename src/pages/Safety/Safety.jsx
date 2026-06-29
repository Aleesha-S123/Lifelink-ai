import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";

export default function Safety() {
  const location = useLocation();
  const [messages, setMessages] = useState([
    "I'm right here with you. You are not alone. Are you currently in immediate physical danger?",
  ]);
  const [input, setInput] = useState("");

  function speak(text) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 0.6;
    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (location.state?.autoVoice) {
      const message =
        "Safety mode is active. Stay calm. Move to a public or well lit place if possible. I can help you contact trusted people or emergency services.";
      speak(message);
    }
  }, [location.state]);

  const contacts = [
    { name: "Priya (Sister)", phone: "+91 98765 43210" },
    { name: "Dr. Anand (Counselor)", phone: "+91 87654 32109" },
    { name: "Campus Security", phone: "1800-XXX-XXXX" },
  ];

  const resources = [
    { name: "City Police Station", distance: "0.4 km" },
    { name: "Government Hospital", distance: "1.1 km" },
    { name: "24/7 Crisis Support Centre", distance: "0.7 km" },
  ];

  function handleSOS() {
    const sosMessage =
      "SOS alert prepared. Your trusted contacts and nearby emergency resources are ready.";
    setMessages((prev) => [...prev, sosMessage]);
    speak(sosMessage);
  }
  function handleNovaSafetyReply() {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [...prev, `You: ${userMessage}`]);
  setInput("");

  const lower = userMessage.toLowerCase();

  let reply =
    "Stay calm. Take a slow breath. Move toward a public, well-lit area if possible. Keep your phone ready and contact someone you trust.";

  if (lower.includes("follow") || lower.includes("following")) {
    reply =
      "If you feel someone is following you, do not go home directly. Move to a crowded area, shop, security desk, or police station. Call a trusted contact and keep your location shared.";
  }

  if (lower.includes("alone") || lower.includes("dark")) {
    reply =
      "Try to move toward a bright and populated area. Avoid isolated paths. Keep your phone unlocked and ready to call your trusted contact.";
  }

  if (lower.includes("hurt") || lower.includes("attack")) {
    reply =
      "If you are in immediate danger, press SOS now or call emergency services. Try to create distance, make noise, and move toward people nearby.";
  }

  setTimeout(() => {
    setMessages((prev) => [...prev, reply]);
    speak(reply);
  }, 500);
}

  return (
    <div className="min-h-screen flex bg-[#2b0b00] text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex px-4 py-2 rounded-full bg-orange-900/60 border border-orange-500 text-orange-200 text-sm font-semibold">
              🛡 Safety Mode Active
            </div>

            <h1 className="mt-5 text-4xl font-extrabold">
              You are not alone. Nova is here.
            </h1>

            <p className="mt-2 text-orange-200">
              Emergency assistance is available immediately, 24/7.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-3xl border border-orange-700 bg-orange-950/50 p-8 text-center shadow-xl">
                <button
                  onClick={handleSOS}
                  className="h-40 w-40 rounded-full bg-red-600 hover:bg-red-700 text-white text-3xl font-extrabold shadow-2xl"
                >
                  SOS
                </button>

                <p className="mt-5 text-orange-200 text-sm">
                  Tap to alert emergency contacts and services
                </p>
              </div>

              <div className="rounded-3xl border border-orange-800 bg-white/5 p-5">
                <h2 className="font-bold mb-4">Trusted Contacts</h2>

                <div className="space-y-3">
                  {contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="flex justify-between items-center rounded-2xl bg-white/10 p-4"
                    >
                      <div>
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-sm text-orange-200">{contact.phone}</p>
                      </div>

                      <button className="text-orange-400">📞</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-orange-800 bg-white/5 p-5">
                <h2 className="font-bold mb-4">Nearby Resources</h2>

                <div className="space-y-3">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center rounded-2xl bg-white/10 p-4"
                    >
                      <span>{item.name}</span>
                      <span className="text-orange-300 text-sm">{item.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-800 bg-white/5 p-5 flex flex-col min-h-[520px]">
              <div className="flex items-center gap-3 border-b border-orange-900 pb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  N
                </div>

                <div>
                  <h2 className="font-bold">Nova — Emergency Mode</h2>
                  <p className="text-green-400 text-sm">
                    Always online, always here
                  </p>
                </div>
              </div>

              <div className="flex-1 mt-5 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className="max-w-md rounded-2xl bg-white/10 p-4 text-sm leading-relaxed"
                  >
                    {message}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleNovaSafetyReply();
      }
    }}
    placeholder="Tell Nova what's happening..."
    className="flex-1 rounded-2xl bg-white/10 px-4 py-3 outline-none text-white placeholder:text-orange-200"
  />

  <button
    onClick={handleNovaSafetyReply}
    className="rounded-2xl bg-orange-600 px-5 font-bold"
  >
    ➤
  </button>
</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/dashboard" className="text-orange-200 text-sm">
              ← Return to Normal Mode
            </Link>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}