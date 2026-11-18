import { Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-100 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500">
            <Sparkles className="text-white" size={13} />
          </div>
          <span className="text-sm font-semibold text-gray-800">HireMind</span>
        </div>
        <p className="text-xs text-gray-400">
          © 2026 HireMind. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-gray-400">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer