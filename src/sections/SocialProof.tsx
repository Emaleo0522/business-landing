import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
}

const clients = [
  { name: 'Axiom Systems', src: '/images/clients/client-1.svg' },
  { name: 'Vertex Labs', src: '/images/clients/client-2.svg' },
  { name: 'Pulse Digital', src: '/images/clients/client-3.svg' },
  { name: 'Orbit Analytics', src: '/images/clients/client-4.svg' },
  { name: 'Crest Dynamics', src: '/images/clients/client-5.svg' },
  { name: 'Forge Partners', src: '/images/clients/client-6.svg' },
]

function LogoSet() {
  return (
    <>
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex shrink-0 items-center justify-center px-10"
        >
          <img
            src={client.src}
            alt={client.name}
            width={160}
            height={48}
            loading="lazy"
            className="h-10 w-auto opacity-50 transition-opacity duration-300 hover:opacity-80"
          />
        </div>
      ))}
    </>
  )
}

export function SocialProof() {
  return (
    <section className="border-t border-[#e2e8f0] bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          {...fadeIn}
          className="mb-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#94a3b8]"
        >
          Trusted by teams worldwide
        </motion.p>
      </div>

      {/* Marquee — full width with gradient fades */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
          style={{
            background: 'linear-gradient(to right, #ffffff, transparent)',
          }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
          style={{
            background: 'linear-gradient(to left, #ffffff, transparent)',
          }}
          aria-hidden="true"
        />

        {/* Marquee track — logos duplicated for seamless loop */}
        <div className="marquee-track" aria-label="Client logos">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  )
}
