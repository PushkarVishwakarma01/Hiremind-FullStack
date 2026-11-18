// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Check } from "lucide-react";
import AuthLayout from "../layout/AuthLayout";
import GoogleButton from "../components/auth/GoogleButton";
import { register, loginWithGoogle } from "../services/authApi";

const RULES = [
  { key: "length", label: "8+ characters", test: (v) => v.length >= 8 },
  { key: "upper", label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
  { key: "number", label: "One number", test: (v) => /\d/.test(v) },
];

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  const passwordValid = RULES.every((r) => r.test(form.password));
  const passwordsMatch =
    form.confirmPassword.length > 0 && form.password === form.confirmPassword;
  const canSubmit = form.name && form.email && passwordValid && passwordsMatch;

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!canSubmit) return;
    setLoading(true);
    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="A few details and HireMind starts working for you."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
            Full name
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              placeholder="Pushkar Vishwakarma"
              className="w-full rounded-2xl border-2 border-slate-200 bg-[#FAFAFB] pl-11 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>

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
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
            Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
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

          {form.password.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              {RULES.map((rule) => {
                const ok = rule.test(form.password);
                return (
                  <span
                    key={rule.key}
                    className={`inline-flex items-center gap-1 text-xs ${
                      ok ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    <Check size={12} className={ok ? "opacity-100" : "opacity-30"} />
                    {rule.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
            Confirm password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={update("confirmPassword")}
              placeholder="••••••••"
              className={`w-full rounded-2xl border-2 bg-[#FAFAFB] pl-11 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-colors ${
                form.confirmPassword.length > 0 && !passwordsMatch
                  ? "border-rose-300 focus:border-rose-400"
                  : "border-slate-200 focus:border-pink-400"
              }`}
            />
          </div>
          {form.confirmPassword.length > 0 && !passwordsMatch && (
            <p className="text-xs text-rose-500 mt-1.5">Passwords don't match.</p>
          )}
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
          disabled={loading || !canSubmit}
          whileHover={!loading && canSubmit ? { scale: 1.01 } : {}}
          whileTap={!loading && canSubmit ? { scale: 0.98 } : {}}
          className={`mt-1 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-opacity ${
            loading || !canSubmit
              ? "bg-slate-300 shadow-none cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:opacity-95"
          }`}
        >
          {loading ? "Creating account…" : "Create account"}
        </motion.button>

        <div className="flex items-center gap-3 my-1">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <GoogleButton onClick={loginWithGoogle} disabled={loading} label="Sign up with Google" />

        <p className="text-sm text-slate-500 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-pink-600 hover:text-pink-700">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}