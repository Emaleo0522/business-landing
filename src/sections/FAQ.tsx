import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeIn, accordionVariants } from '@/lib/animations'

const faqItems = [
  {
    question: 'What services does NexaCorp offer?',
    answer:
      'We offer a comprehensive suite of technology services including custom software development, data analytics, cybersecurity, strategic consulting, team augmentation, and cloud solutions. Each service is tailored to meet your specific business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A typical project ranges from 4-12 weeks. During our initial consultation, we provide a detailed timeline with milestones so you always know what to expect.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'We work with businesses of all sizes, from early-stage startups to Fortune 500 enterprises. Our flexible engagement models allow us to scale our services to match your needs and budget.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing including fixed-price projects, monthly retainers, and time-and-materials engagements. Our plans page gives a starting point, but we customize proposals based on your specific requirements.',
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'Quality is built into every step of our process. We use agile methodologies, automated testing, code reviews, and continuous integration. Every project includes dedicated QA resources and regular client check-ins.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      'We provide ongoing support and maintenance packages to ensure your solution continues to perform optimally. This includes bug fixes, performance monitoring, feature updates, and 24/7 emergency support.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bg-[#f9fafb] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeIn} className="mx-auto mb-20 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
            FAQ
          </span>
          <h2 className="heading-section mt-4 text-[#0f172a]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Everything you need to know about our services.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="mx-auto max-w-2xl">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="border-b border-[#e2e8f0]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors"
                >
                  <span className="font-medium text-[#0f172a] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#94a3b8] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      variants={accordionVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-[#475569]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
