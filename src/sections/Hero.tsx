import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6"
    >
      {/* Subtle radial gradient - slightly more visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(37,99,235,0.12), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Animated dot grid - Linear style */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.04)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text content */}
        <div>
          <motion.p
            {...fadeIn}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#71717a]"
          >
            Engineering Tomorrow's Success
          </motion.p>

          <motion.h1
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="heading-hero text-white"
          >
            Transform your business
            <br />
            with precision technology
          </motion.h1>

          {/* Gradient line - premium signature element */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.15 }}
            className="mt-8 h-px w-[200px]"
            style={{
              background:
                'linear-gradient(to right, transparent, #2563eb, transparent)',
            }}
            aria-hidden="true"
          />

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#a1a1aa]"
          >
            NexaCorp delivers cutting-edge consulting and technology solutions
            that drive measurable results for forward-thinking enterprises.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
            >
              Learn more
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right: Stacked image collage */}
        <div className="relative hidden h-[520px] lg:block">
          {/* Back image — tilted left */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute -left-4 top-8 z-0 w-[55%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=450&fit=crop&q=80"
              alt="Modern tech workspace with ambient lighting"
              width={600}
              height={450}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
          </motion.div>

          {/* Middle image — main, centered */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute left-[15%] top-0 z-10 w-[70%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
              alt="Corporate glass building with sky reflection"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
          </motion.div>

          {/* Front image — tilted right, overlapping bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute bottom-0 right-0 z-20 w-[50%] overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50"
          >
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=450&fit=crop&q=80"
              alt="Data dashboard on multiple screens"
              width={600}
              height={450}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          </motion.div>

          {/* Decorative glow behind the stack */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-[-1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
