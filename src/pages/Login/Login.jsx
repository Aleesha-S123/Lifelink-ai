import { Link } from "react-router-dom";
import NovaAvatar from "../../components/nova/NovaAvatar";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 grid lg:grid-cols-2">
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500">
        <div className="text-center text-white px-10">
          <NovaAvatar />
          <h1 className="mt-8 text-4xl font-bold">Welcome back!</h1>
          <p className="mt-3 text-white/80">
            Nova is ready to guide you again.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-slate-900">Sign in</h2>
          <p className="mt-2 text-slate-500">
            Continue your journey with LifeLink AI.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Sign In
            </button>

            <button className="w-full py-4 rounded-2xl bg-slate-100 font-semibold hover:bg-slate-200 transition">
              Continue with Google
            </button>
          </div>

          <p className="mt-6 text-center text-slate-500">
            New here?{" "}
            <Link to="/dashboard" className="text-blue-600 font-semibold">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}