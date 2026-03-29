import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'
import { Code, BarChart3, Cloud, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description:
      'Tailored software solutions built with cutting-edge technology to meet your specific business needs.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights that drive informed decision-making across your organization.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services for optimal performance and reliability.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Consulting',
    description:
      'Strategic guidance to help you navigate digital transformation and market disruption.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#f9fafb] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeIn} className="mx-auto mb-20 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
            What we do
          </span>
          <h2 className="heading-section mt-4 text-[#0f172a]">
            Services that drive results
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Comprehensive solutions designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Context image */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop&q=80"
            alt="Developer working on code at a modern workspace"
            width={1200}
            height={400}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              {...staggerItem}
              className="rounded-xl border border-[#e2e8f0] bg-white p-8 transition-all duration-300 hover:border-[#2563eb]/30 hover:shadow-md"
            >
              <div className="inline-flex rounded-lg bg-[#2563eb]/10 p-2.5">
                <service.icon
                  size={24}
                  className="text-[#2563eb]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium text-[#0f172a]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
