import { Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative border-t border-white/10 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl md:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-300/80">Get in touch</p>
              <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">Ready to strengthen your security posture?</h3>
              <p className="mt-3 text-slate-300">Request a tailored assessment and we’ll share a prioritized roadmap for your environment.</p>
            </div>

            <form className="flex flex-col gap-3 md:flex-row">
              <input type="email" required placeholder="Your business email" className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400/40" />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 hover:brightness-110">
                <Mail className="h-4 w-4" />
                Request audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
