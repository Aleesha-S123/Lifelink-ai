import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";

export default function Healthcare() {
  const cards = [
    "Nearby Hospitals",
    "Symptom Guidance",
    "Medicine Reminders",
    "Health Report Explanation",
    "Emergency Support",
    "Doctor Visit Checklist",
  ];

  return (
    <div className="min-h-screen flex bg-teal-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <h1 className="text-4xl font-extrabold text-teal-600">
          Healthcare Assistant
        </h1>

        <p className="mt-2 text-slate-600">
          Nova helps users access healthcare guidance, nearby support, reminders,
          and medical document explanations.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {cards.map((item) => (
            <div key={item} className="bg-white rounded-3xl p-6 shadow">
              <h2 className="text-xl font-bold">{item}</h2>
              <p className="mt-3 text-slate-600">
                Accessible healthcare support powered by Nova.
              </p>
            </div>
          ))}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}