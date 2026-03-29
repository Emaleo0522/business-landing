import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

const stats = [
  { value: '10', suffix: '+', label: 'Years Experience' },
  { value: '500', suffix: '+', label: 'Happy Clients' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
  { value: '24', suffix: '/7', label: 'Support Available' },
]

export function About() {
  return (
    <section id="about" className="border-t border-[#e2e8f0] bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Team image */}
          <motion.div {...fadeIn}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Team collaborating on technology solutions"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Text + Stats */}
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
            <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
              About us
            </span>
            <h2 className="heading-section mt-4 text-[#0f172a]">
              Building the <span className="text-[#2563eb]">future</span> together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#475569]">
              With over a decade of experience, NexaCorp combines deep technical
              expertise with strategic thinking to deliver solutions that make a
              real impact. From cloud infrastructure to AI-powered analytics, we
              stay ahead of the curve so our clients can focus on growing their
              business.
            </p>

            {/* Stats grid 2x2 */}
            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-light tracking-tight text-[#0f172a]">
                    {stat.value}
                    <span className="text-[#2563eb] font-light">{stat.suffix}</span>
                  </p>
                  <div className="mt-2 h-0.5 w-8 bg-[#2563eb]/20" aria-hidden="true" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#94a3b8]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
