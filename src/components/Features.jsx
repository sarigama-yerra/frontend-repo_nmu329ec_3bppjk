import { Shield, Radar, Fingerprint, FileWarning, GlobeLock, Power, Activity } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Threat Prevention',
    desc: 'Harden endpoints, identities, and cloud workloads with layered controls and policy enforcement.'
  },
  {
    icon: Radar,
    title: 'Threat Detection',
    desc: 'Correlate telemetry across endpoints, network, and cloud to surface high-confidence alerts.'
  },
  {
    icon: Fingerprint,
    title: 'Identity Security',
    desc: 'Detect credential abuse, MFA fatigue, and lateral movement with real-time identity analytics.'
  },
  {
    icon: FileWarning,
    title: 'Incident Response',
    desc: '24/7 containment, forensics, and remediation playbooks to minimize impact and downtime.'
  },
  {
    icon: GlobeLock,
    title: 'Zero Trust Access',
    desc: 'Continuous verification, least privilege, and microsegmentation for modern enterprises.'
  },
  {
    icon: Activity,
    title: 'Compliance & GRC',
    desc: 'Map controls to frameworks like SOC 2, ISO 27001, and NIST with automated evidence.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative border-t border-white/10 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between md:mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-300/80">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Built for modern security teams</h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              <Power className="h-4 w-4"/>
              24/7 monitoring
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-lg backdrop-blur transition hover:shadow-cyan-500/20">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-500/20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
