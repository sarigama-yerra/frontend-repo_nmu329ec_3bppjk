import Spline from '@splinetool/react-spline'
import { ShieldCheck, ArrowRight, Lock, ScanLine } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.2),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(8,145,178,0.2),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pb-28 md:pt-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
            <ScanLine className="h-3.5 w-3.5" />
            Managed Detection & Response
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Protect your business with precision cyber defense
          </h1>
          
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            We combine continuous monitoring, expert threat hunting, and rapid incident response to keep your systems resilient against evolving threats.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 text-white shadow-lg shadow-cyan-500/30 hover:brightness-110">
              <ShieldCheck className="h-5 w-5" />
              Book a security assessment
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-300"/>SOC 2</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-300"/>ISO 27001</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-300"/>GDPR</div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
