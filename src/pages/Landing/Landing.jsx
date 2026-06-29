import { Link } from "react-router-dom";
import NovaAvatar from "../../components/nova/NovaAvatar";
import { Sparkles, Shield, HeartPulse, GraduationCap, Accessibility, Users } from "lucide-react";

export default function Landing() {
  const features = [
    { icon: GraduationCap, title: "Opportunities", text: "Find scholarships, internships, mentors, and learning paths." },
    { icon: Accessibility, title: "Accessibility", text: "Explain documents, images, and spaces in accessible formats." },
    { icon: Shield, title: "Safety", text: "Emergency support, SOS mode, and trusted contact guidance." },
    { icon: HeartPulse, title: "Healthcare", text: "Get basic health guidance and nearby care suggestions." },
    { icon: Users, title: "Community", text: "Connect with mentors, NGOs, volunteers, and support groups." },
    { icon: Sparkles, title: "AI Companion", text: "Nova understands your need and routes you to the right help." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LifeLink AI
        </h1>

        <Link
          to="/login"
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow text-blue-600 font-medium mb-6">
            <Sparkles size={18} />
            Meet Nova, your inclusive AI companion
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            One AI Companion.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            LifeLink AI empowers underserved communities by connecting them to
            education, safety, healthcare, accessibility, opportunities, and
            support through one natural conversation with Nova.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/dashboard"
              className="px-7 py-4 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition text-center"
            >
              Start Talking to Nova
            </Link>

            <button className="px-7 py-4 rounded-2xl bg-white text-slate-800 font-semibold shadow hover:shadow-lg transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <NovaAvatar />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}