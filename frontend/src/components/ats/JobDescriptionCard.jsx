// src/components/ats/JobDescriptionCard.jsx
const MIN_CHARS = 60;

export default function JobDescriptionCard({ value, onChange, disabled }) {
  const count = value?.length || 0;
  const tooShort = count > 0 && count < MIN_CHARS;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-slate-800">Job description</p>
        <span
          className={`text-xs ${
            tooShort ? "text-amber-500" : "text-slate-400"
          }`}
        >
          {count} chars
        </span>
      </div>
      <textarea
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the job description you're targeting — the more detail, the sharper the match."
        rows={8}
        className="w-full resize-none rounded-2xl border-2 border-slate-200 bg-[#FAFAFB] p-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none transition-colors disabled:opacity-60"
      />
      {tooShort && (
        <p className="mt-1.5 text-xs text-amber-500">
          Add a bit more detail for an accurate match ({MIN_CHARS}+ characters).
        </p>
      )}
    </div>
  );
}

export { MIN_CHARS };