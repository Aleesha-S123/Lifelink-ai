import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";
import { Search, GraduationCap, Clock, Sparkles } from "lucide-react";

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState("Scholarships");

  const opportunities = [
    {
      title: "National Merit Scholarship",
      org: "College Board",
      amount: "$8,000",
      date: "Oct 15, 2025",
      match: "94%",
      type: "Scholarships",
    },
    {
      title: "STEM Excellence Award",
      org: "Tech Foundation",
      amount: "$5,000",
      date: "Nov 1, 2025",
      match: "88%",
      type: "Scholarships",
    },
    {
      title: "First Generation Scholars Grant",
      org: "Education Trust",
      amount: "$3,500",
      date: "Dec 15, 2025",
      match: "91%",
      type: "Scholarships",
    },
    {
      title: "Frontend Developer Internship",
      org: "Startup India",
      amount: "Remote",
      date: "Apply Soon",
      match: "89%",
      type: "Internships",
    },
    {
      title: "AI Research Intern",
      org: "Tech Lab",
      amount: "Paid",
      date: "Nov 20, 2025",
      match: "92%",
      type: "Internships",
    },
    {
      title: "Women in Tech Mentorship",
      org: "Mentor Network",
      amount: "Free",
      date: "Open",
      match: "96%",
      type: "Jobs",
    },
  ];

  const tabs = ["Scholarships", "Jobs", "Internships"];
  const filtered = opportunities.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100">
            <Sparkles size={16} />
            AI-Personalized for Your Profile
          </div>

          <h1 className="mt-5 text-4xl font-extrabold">
            Opportunity Discovery
          </h1>

          <p className="mt-2 text-slate-600">
            Nova found <span className="font-bold text-slate-900">8 opportunities</span> matched to your background.
          </p>

          <div className="mt-8 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              placeholder="Search scholarships, jobs, internships..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-14 py-4 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 flex gap-3">
            {tabs.map((tab) => {
              const count = opportunities.filter((item) => item.type === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-2xl font-semibold shadow-sm transition ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {tab} <span className="ml-2 text-xs opacity-80">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <GraduationCap size={22} />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                    {item.match} match
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                <p className="mt-1 text-slate-500">{item.org}</p>

                <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-blue-600 to-purple-600"></div>
                </div>

                <div className="mt-5 flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Clock size={15} />
                    {item.date}
                  </span>

                  <span className="font-extrabold text-blue-600">
                    {item.amount}
                  </span>
                </div>

                <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-6 flex gap-4 shadow-sm">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              N
            </div>

            <div>
              <h3 className="font-extrabold">Nova's Personalized Tip</h3>
              <p className="mt-2 text-slate-600">
                Your profile shows strong STEM interest and beginner-friendly AI goals.
                Applying to high-match opportunities first gives you the best chance of success.
              </p>

              <button className="mt-3 text-blue-600 font-bold">
                Help me write the application essay →
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}