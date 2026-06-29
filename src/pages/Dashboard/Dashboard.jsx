import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendChatMessage, sendAccessibilityFile } from "../../services/api";
import {
  Camera,
  FileText,
  MapPin,
  Mic,
  Send,
  Shield,
  GraduationCap,
  Accessibility,
  HeartPulse,
  Volume2,
} from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import NovaOrb from "../../components/nova/NovaOrb";
import ChatBubble from "../../components/chat/ChatBubble";
import TypingIndicator from "../../components/chat/TypingIndicator";
import MobileNav from "../../components/layout/MobileNav";



export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      role: "nova",
      text: "Hi Aleesha 👋 I'm Nova. I can assist by voice, read uploaded images, explain documents, help with safety, healthcare, accessibility, and opportunities.",
    },
  ]);

  const prompts = [
    { icon: GraduationCap, text: "Find scholarships for women in AI" },
    { icon: FileText, text: "Explain this college notice" },
    { icon: Shield, text: "I don't feel safe" },
    { icon: Accessibility, text: "Check if this place is accessible" },
    { icon: HeartPulse, text: "Find nearby healthcare support" },
  ];

  function speak(text) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const cleanText = text.replace(/[•✨🎓🛡♿🩺📷📄]/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);
  }

  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setMessage(spokenText);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      alert("Could not recognize your voice. Please try again.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

 

 

  function getNovaReply(text) {
    const lower = text.toLowerCase();

    if (
      lower.includes("safe") ||
      lower.includes("sos") ||
      lower.includes("danger")
    ) {
      return `🛡 Safety Mode Activated

Stay calm. I can help you take quick action.

Quick actions:
• Send SOS alert
• Share live location
• Call trusted contact
• Find nearby police station or hospital

Recommended next step:
Move to a public or well-lit area and contact someone you trust.`;
    }

    if (
      lower.includes("scholarship") ||
      lower.includes("internship") ||
      lower.includes("opportunity") ||
      lower.includes("career")
    ) {
      return `🎓 Opportunities Found

I found 3 strong matches for you:

1. Women in Tech Scholarship
Match Score: 94%

2. AI Beginner Internship
Match Score: 89%

3. Mentor Connect Program
Match Score: 91%

Suggested roadmap:
Learn Python → Build AI projects → Apply for internships → Prepare resume.`;
    }

    if (
      lower.includes("notice") ||
      lower.includes("pdf") ||
      lower.includes("accessibility") ||
      lower.includes("document")
    ) {
      return `♿ Accessibility Assistant

I can make this content easier to understand.

Available formats:
• Easy English summary
• Malayalam translation
• Audio-friendly version
• Screen-reader friendly text
• Key deadlines and action items

Accessibility score: 86%`;
    }

    if (lower.includes("health") || lower.includes("hospital")) {
      return `🩺 Healthcare Guidance

I can help you find nearby healthcare support and prepare questions for a doctor.

Options:
• Find nearby clinics
• Emergency guidance
• Medicine reminder
• Health document explanation`;
    }

    return `✨ I can help with:
• Voice assistance
• Reading uploaded images
• Explaining documents
• Opportunities
• Accessibility
• Safety
• Healthcare
• Mental wellness
• Community support

Try asking: "Find scholarships" or upload an image for me to read.`;
  }

  async function handleSend(customText) {
  const finalMessage = customText || message;
  if (!finalMessage.trim()) return;

  const emergencyWords = [
  "help",
  "danger",
  "unsafe",
  "sos",
  "emergency",
  "alert",
  "save me",
  "i need help",
  "not safe",
];

const isEmergency = emergencyWords.some((word) =>
  finalMessage.toLowerCase().includes(word)
);

if (isEmergency) {
  navigate("/safety", {
    state: {
      autoVoice: true,
      triggerMessage: finalMessage,
    },
  });
  return;
}

  setMessages((prev) => [...prev, { role: "user", text: finalMessage }]);
  setMessage("");
  setIsTyping(true);

  try {
    const reply = await sendChatMessage(finalMessage);

    setMessages((prev) => [...prev, { role: "nova", text: reply }]);
    speak(reply);
  } catch (error) {
    console.error(error);

    const fallback = "Nova backend is not responding. Please check if FastAPI is running.";
    setMessages((prev) => [...prev, { role: "nova", text: fallback }]);
    speak(fallback);
  } finally {
    setIsTyping(false);
  }
}

  async function handleFileUpload(e, type) {
    const file = e.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);

    if (type === "image") {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          text: `📷 Uploaded image: ${file.name}`,
          image: fileUrl,
        },
      ]);

      setIsTyping(true);

      try {
        const reply = await analyzeImageWithGemini(file);

        setMessages((prev) => [...prev, { role: "nova", text: reply }]);
        speak(reply);
      } catch (error) {
        console.error(error);

        const errorReply =
          "I could not read this image right now. Please check your Gemini API key, internet connection, and whether the image format is supported.";

        setMessages((prev) => [...prev, { role: "nova", text: errorReply }]);
        speak(errorReply);
      } finally {
        setIsTyping(false);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          text: `📄 Uploaded document: ${file.name}`,
        },
      ]);

      setIsTyping(true);

try {
  const reply = await sendAccessibilityFile(file);

  setMessages((prev) => [
    ...prev,
    { role: "nova", text: reply },
  ]);

  speak(reply);
} catch (error) {
  console.error(error);

  const fallback =
    "I could not process this document. Please check if the FastAPI backend is running.";

  setMessages((prev) => [
    ...prev,
    { role: "nova", text: fallback },
  ]);

  speak(fallback);
} finally {
  setIsTyping(false);
}

    e.target.value = "";
  }
}


  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <header className="sticky top-0 z-20 px-5 md:px-8 py-4 bg-white/70 backdrop-blur-xl border-b border-white/70 flex justify-between items-center">
          <div>
            <h2 className="font-extrabold text-slate-900">
              Nova Command Center
            </h2>
            <p className="text-sm text-slate-500">
              Voice assistant + real image reading + inclusive AI support.
            </p>
          </div>

          <button className="px-5 py-2 rounded-full bg-white shadow-sm font-medium">
            Aleesha
          </button>
        </header>

        <section className="flex-1 overflow-y-auto px-5 md:px-10 py-8 pb-40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center">
                <NovaOrb />
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-950">
                Speak. Upload. Ask Nova.
              </h1>

              <p className="mt-3 text-slate-600">
                Nova can listen, speak, and read uploaded images using Gemini
                Vision.
              </p>
            </div>

            <div>
              {messages.map((item, index) => (
                <div key={index}>
                  <ChatBubble role={item.role} text={item.text} />

                  {item.image && (
                    <div className="mb-5 flex justify-end">
                      <img
                        src={item.image}
                        alt="Uploaded preview"
                        className="max-w-xs rounded-3xl shadow-lg border border-white"
                      />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && <TypingIndicator />}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {prompts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSend(item.text)}
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition text-left flex gap-3 items-center"
                  >
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <div className="shrink-0 p-4 pb-20 lg:pb-4 bg-white/70 backdrop-blur-xl border-t border-white/70">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask Nova anything..."
              className="w-full h-20 resize-none bg-transparent p-3 outline-none"
            />

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={startListening}
                  className={`p-3 rounded-2xl ${
                    isListening
                      ? "bg-red-100 text-red-600 animate-pulse"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                  title="Speak to Nova"
                >
                  <Mic size={20} />
                </button>

                <label
                  className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 cursor-pointer"
                  title="Upload image"
                >
                  <Camera size={20} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "image")}
                    className="hidden"
                  />
                </label>

                <label
                  className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 cursor-pointer"
                  title="Upload document"
                >
                  <FileText size={20} />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,image/*"
                    onChange={(e) => handleFileUpload(e, "document")}
                    className="hidden"
                  />
                </label>

                <button className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200">
                  <MapPin size={20} />
                </button>

                <button
                  onClick={() =>
                    speak(
                      "Hello, I am Nova. I can help by voice, read uploaded images, explain documents, and support safety, healthcare, accessibility, and opportunities."
                    )
                  }
                  className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200"
                  title="Test voice output"
                >
                  <Volume2 size={20} />
                </button>
              </div>

              <button
                onClick={() => handleSend()}
                className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
              >
                Send <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}

