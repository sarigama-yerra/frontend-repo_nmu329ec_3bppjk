import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Sentinel Cyber Defense • Secure by design</p>
        </footer>
      </div>
    </div>
  )
}

export default App
