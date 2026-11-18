// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../layout/AuthLayout";
import GoogleButton from "../components/auth/GoogleButton";
import { login, loginWithGoogle } from "../services/authApi";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Couldn't log in. Check your details and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to keep your career moving forward."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
            Email
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className="w-full rounded-2xl border-2 border-slate-200 bg-[#FAFAFB] pl-11 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs font-medium text-pink-600 hover:text-pink-700"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              value={form.password}
              onChange={update("password")}
              placeholder="••••••••"
              className="w-full rounded-2xl border-2 border-slate-200 bg-[#FAFAFB] pl-11 pr-11 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-rose-500 bg-rose-50 border border-rose-100 rounded-xl px-4 py-2.5"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.01 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          className={`mt-1 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-opacity ${
            loading
              ? "bg-slate-300 shadow-none cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:opacity-95"
          }`}
        >
          {loading ? "Logging in…" : "Log in"}
        </motion.button>

        <div className="flex items-center gap-3 my-1">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <GoogleButton onClick={loginWithGoogle} disabled={loading} />

        <p className="text-sm text-slate-500 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-pink-600 hover:text-pink-700">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}