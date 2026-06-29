import Sidebar from "../../components/layout/Sidebar";
import MobileNav from "../../components/layout/MobileNav";

export default function Accessibility() {
  return (
    <div className="min-h-screen flex bg-purple-50">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 pb-24">
        <h1 className="text-4xl font-extrabold text-purple-600">Accessibility Assistant</h1>
        <p className="mt-2 text-slate-600">Upload notices, images, or documents. Nova converts them into accessible formats.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {["Easy English Summary", "Audio-Friendly Text", "Regional Translation"].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-6 shadow">
              <h2 className="text-xl font-bold">{item}</h2>
              <p className="mt-3 text-slate-600">Designed for screen readers, voice support, and inclusive learning.</p>
            </div>
          ))}
        </div>
      </main>
      <MobileNav />
    </div>
  );
}