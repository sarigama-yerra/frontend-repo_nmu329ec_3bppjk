import { Menu, Shield, Lock, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-3 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest text-cyan-300/80">Sentinel</p>
              <p className="text-lg font-semibold text-white">Cyber Defense</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#insights">Insights</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-200 hover:bg-cyan-500/20">
              <PhoneCall className="h-4 w-4" />
              Get audit
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200 hover:bg-white/10">
              <Lock className="h-4 w-4" />
              Client login
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="flex items-center justify-center rounded-xl border border-white/10 p-2 text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-lg md:hidden">
            <nav className="flex flex-col divide-y divide-white/10 text-sm text-slate-200/90">
              <a className="px-5 py-3 hover:bg-white/5" href="#services">Services</a>
              <a className="px-5 py-3 hover:bg-white/5" href="#insights">Insights</a>
              <a className="px-5 py-3 hover:bg-white/5" href="#about">About</a>
              <a className="px-5 py-3 hover:bg-white/5" href="#contact">Contact</a>
              <a className="px-5 py-3 hover:bg-white/5" href="#">Client login</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
