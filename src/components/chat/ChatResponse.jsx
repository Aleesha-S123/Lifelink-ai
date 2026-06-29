import {
  Shield,
  GraduationCap,
  Accessibility,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function ChatResponse({ type }) {
  if (type === "safety") {
    return (
      <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-red-600">
          <Shield /> Safety Mode Activated
        </h3>
        <p className="mt-3 text-slate-700">
          Nova detected a safety-related request. Stay calm and use the quick
          actions below.
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          <button className="rounded-2xl bg-red-600 text-white py-4 font-bold">
            SOS Alert
          </button>
          <button className="rounded-2xl bg-white py-4 font-semibold">
            Call Trusted Contact
          </button>
          <button className="rounded-2xl bg-white py-4 font-semibold">
            Share Location
          </button>
        </div>
      </div>
    );
  }

  if (type === "opportunity") {
    return (
      <div className="mt-8 rounded-3xl bg-white shadow p-6">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <GraduationCap /> Opportunities Found
        </h3>

        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {["AI Scholarship", "Women in Tech Mentor", "Frontend Internship"].map(
            (item) => (
              <div key={item} className="rounded-2xl border p-4">
                <h4 className="font-bold">{item}</h4>
                <p className="mt-2 text-sm text-slate-500">
                  Match score: 92%
                </p>
                <button className="mt-4 text-blue-600 font-semibold">
                  View Details →
                </button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  if (type === "accessibility") {
    return (
      <div className="mt-8 rounded-3xl bg-white shadow p-6">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-purple-600">
          <Accessibility /> Accessibility Analysis
        </h3>

        <p className="mt-3 text-slate-600">
          Nova simplified your content and prepared accessible formats.
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-purple-50 p-4">
            <h4 className="font-bold">Easy Summary</h4>
            <p className="text-sm text-slate-600 mt-2">
              Clear explanation in simple language.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-4">
            <h4 className="font-bold">Audio Ready</h4>
            <p className="text-sm text-slate-600 mt-2">
              Text prepared for voice playback.
            </p>
          </div>

          <div className="rounded-2xl bg-teal-50 p-4">
            <h4 className="font-bold">Translation</h4>
            <p className="text-sm text-slate-600 mt-2">
              Regional language support available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-3xl bg-white shadow p-6">
      <h3 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <Sparkles /> Nova Response
      </h3>
      <p className="mt-3 text-slate-600">
        Tell Nova what you need. Try asking about scholarships, safety, or
        accessibility.
      </p>
    </div>
  );
}