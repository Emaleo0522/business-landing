import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

interface Tier {
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: string[]
  highlighted: boolean
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 23,
    description: 'Perfect for small teams getting started.',
    features: [
      '5 Projects',
      '10GB Storage',
      'Email Support',
      'Basic Analytics',
      'API Access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'Ideal for growing businesses that need more.',
    features: [
      '25 Projects',
      '100GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'API Access',
      'Custom Integrations',
      'Team Collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    annualPrice: 159,
    description: 'For organizations that demand the best.',
    features: [
      'Unlimited Projects',
      'Unlimited Storage',
      '24/7 Dedicated Support',
      'Enterprise Analytics',
      'API Access',
      'Custom Integrations',
      'Team Collaboration',
      'SLA Guarantee',
      'On-premise Option',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="border-t border-[#e2e8f0] bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeIn} className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[#2563eb]">
            Pricing
          </span>
          <h2 className="heading-section mt-4 text-[#0f172a]">
            Plans that scale with you
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Flexible pricing options designed for businesses of every size.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div {...fadeIn} className="mb-16 flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isAnnual ? 'text-[#0f172a]' : 'text-[#94a3b8]'
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
            onClick={() => setIsAnnual((prev) => !prev)}
            className="relative h-7 w-12 rounded-full bg-[#f1f5f9] p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isAnnual ? 'text-[#0f172a]' : 'text-[#94a3b8]'
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="text-xs font-medium text-[#2563eb]">Save 20%</span>
          )}
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3"
        >
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice

            return (
              <motion.div
                key={tier.name}
                {...staggerItem}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-2 border-[#2563eb]/30 bg-white shadow-[0_0_30px_rgba(37,99,235,0.06)]'
                    : 'border border-[#e2e8f0] bg-[#f9fafb]'
                }`}
              >
                {tier.highlighted && (
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#2563eb]">
                    Most popular
                  </p>
                )}

                <h3 className="text-lg font-medium text-[#0f172a]">{tier.name}</h3>
                <p className="mt-1 text-sm text-[#475569]">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-lg text-[#94a3b8]">$</span>
                  <span className="text-4xl font-light tracking-tight text-[#0f172a]">
                    {price}
                  </span>
                  <span className="text-sm text-[#94a3b8]">/mo</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-xs text-[#94a3b8]">
                    Billed ${price * 12}/year
                  </p>
                )}

                <ul className="mt-8 space-y-3.5" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        className="h-4 w-4 shrink-0 text-[#94a3b8]"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[#475569]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-8 w-full rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                    tier.highlighted
                      ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'
                      : 'border border-[#e2e8f0] text-[#0f172a] hover:border-[#2563eb]/30'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
