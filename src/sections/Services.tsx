import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { Code, BarChart3, Cloud, Lightbulb, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
}

export function Services() {
  return (
    <section id="services" className="bg-[#f9fafb] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeIn} className="mb-16 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
            What we do
          </span>
          <h2 className="heading-section mt-4 text-[#0f172a]">
            Services that drive results
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Comprehensive solutions designed to accelerate your business growth
            and digital transformation.
          </p>
        </motion.div>

        {/* Bento Grid — asymmetric layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 — Featured (spans 2 rows) */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-8 lg:row-span-2"
          >
            <div>
              <div className="mb-6 inline-flex rounded-xl bg-[#2563eb]/10 p-3">
                <Code size={28} className="text-[#2563eb]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#0f172a]">
                Custom Development
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                Tailored software solutions built with cutting-edge technology.
                From concept to deployment, we architect systems that scale with
                your ambitions.
              </p>
              <ul className="mt-6 space-y-2.5">
                {['Full-stack applications', 'API development', 'System integration', 'Legacy modernization'].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-[#475569]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#2563eb]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Visual: code-like decorative element */}
            <div className="mt-8 overflow-hidden rounded-xl bg-[#0f172a] p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]/80" />
                <span className="h-3 w-3 rounded-full bg-[#22c55e]/80" />
              </div>
              <code className="block space-y-1 text-xs font-mono">
                <span className="text-[#94a3b8]">{'// Your vision, our code'}</span>
                <br />
                <span className="text-[#60a5fa]">const</span>{' '}
                <span className="text-[#f1f5f9]">solution</span>{' '}
                <span className="text-[#94a3b8]">=</span>{' '}
                <span className="text-[#60a5fa]">await</span>{' '}
                <span className="text-[#fbbf24]">build</span>
                <span className="text-[#94a3b8]">(</span>
                <span className="text-[#34d399]">'excellence'</span>
                <span className="text-[#94a3b8]">)</span>
              </code>
            </div>
            {/* Hover arrow */}
            <div className="absolute right-6 top-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight size={20} className="text-[#2563eb]" />
            </div>
          </motion.div>

          {/* Card 2 — with mini chart visual */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-8"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex rounded-xl bg-[#2563eb]/10 p-3">
                <BarChart3
                  size={28}
                  className="text-[#2563eb]"
                  strokeWidth={1.5}
                />
              </div>
              <ArrowUpRight
                size={20}
                className="text-[#94a3b8] opacity-0 transition-all duration-300 group-hover:text-[#2563eb] group-hover:opacity-100"
              />
            </div>
            <h3 className="mt-5 text-xl font-medium text-[#0f172a]">
              Data Analytics
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
              Transform raw data into actionable insights that drive informed
              decision-making across your organization.
            </p>
            {/* Mini bar chart visual */}
            <div className="mt-6 flex items-end gap-2 h-16">
              {[35, 55, 40, 70, 50, 85, 65, 90, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[#2563eb]/20 to-[#2563eb]/60"
                />
              ))}
            </div>
          </motion.div>

          {/* Card 3 — Cloud with floating elements */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-8"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex rounded-xl bg-[#2563eb]/10 p-3">
                <Cloud
                  size={28}
                  className="text-[#2563eb]"
                  strokeWidth={1.5}
                />
              </div>
              <ArrowUpRight
                size={20}
                className="text-[#94a3b8] opacity-0 transition-all duration-300 group-hover:text-[#2563eb] group-hover:opacity-100"
              />
            </div>
            <h3 className="mt-5 text-xl font-medium text-[#0f172a]">
              Cloud Solutions
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
              Scalable cloud infrastructure and migration services for optimal
              performance and reliability.
            </p>
            {/* Uptime visual */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-[3px]">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-1.5 rounded-full bg-[#22c55e]/70"
                    style={{
                      opacity: 0.3 + (i / 24) * 0.7,
                    }}
                  />
                ))}
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-[#0f172a]">99.9%</div>
                <div className="text-xs text-[#94a3b8]">uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Strategy, spans 2 cols on large */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#0f172a] p-8 lg:col-span-2"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex rounded-xl bg-white/10 p-3">
                <Lightbulb
                  size={28}
                  className="text-[#60a5fa]"
                  strokeWidth={1.5}
                />
              </div>
              <ArrowUpRight
                size={20}
                className="text-white/30 opacity-0 transition-all duration-300 group-hover:text-white group-hover:opacity-100"
              />
            </div>
            <div className="mt-5 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="lg:max-w-md">
                <h3 className="text-xl font-medium text-white">
                  Strategy Consulting
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                  Strategic guidance to help you navigate digital transformation
                  and market disruption. We partner with leadership to define
                  roadmaps that deliver measurable ROI.
                </p>
              </div>
              {/* Stats visual */}
              <div className="mt-6 flex gap-8 lg:mt-0">
                {[
                  { value: '3x', label: 'ROI avg.' },
                  { value: '40%', label: 'Cost reduced' },
                  { value: '6mo', label: 'Time to value' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-medium text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
