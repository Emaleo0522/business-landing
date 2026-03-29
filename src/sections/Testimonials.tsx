import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

const testimonials = [
  {
    quote:
      "NexaCorp transformed our digital infrastructure. Their team's expertise and dedication exceeded our expectations at every milestone.",
    name: 'James Wilson',
    role: 'CTO at TechVentures',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&q=80',
  },
  {
    quote:
      'The strategic consulting provided by NexaCorp helped us identify key growth opportunities we had been missing.',
    name: 'Maria Santos',
    role: 'CEO at Innovate Inc',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&q=80',
  },
  {
    quote:
      'Working with NexaCorp was a game-changer. They delivered on time, on budget, and above expectations.',
    name: 'Sarah Chen',
    role: 'VP Engineering at DataFlow',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&q=80',
  },
]

export function Testimonials() {
  const [featured, ...secondary] = testimonials

  return (
    <section id="testimonials" className="bg-[#f9fafb] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeIn} className="mx-auto mb-20 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
            Testimonials
          </span>
          <h2 className="heading-section mt-4 text-[#0f172a]">
            Trusted by industry leaders
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          {...fadeIn}
          className="relative mx-auto max-w-3xl text-center"
        >
          <span
            className="absolute -left-4 -top-6 font-serif text-8xl text-[#2563eb]/10 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="text-xl font-light italic leading-relaxed text-[#0f172a] lg:text-2xl lg:leading-relaxed">
            {featured.quote}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <img
              src={featured.avatar}
              alt={featured.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-medium text-[#0f172a]">
                <span className="text-[#2563eb]">&mdash;</span> {featured.name}
              </p>
              <p className="text-sm text-[#94a3b8]">{featured.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary testimonials */}
        <motion.div
          {...staggerContainer}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {secondary.map((t) => (
            <motion.div
              key={t.name}
              {...staggerItem}
              className="rounded-xl border border-[#e2e8f0] bg-white p-8 transition-all duration-300 hover:shadow-md"
            >
              <p className="text-[#475569] italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-[#0f172a]">{t.name}</p>
                  <p className="text-sm text-[#94a3b8]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
