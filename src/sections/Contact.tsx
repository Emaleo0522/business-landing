import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-32 lg:py-40">
      <div className="mx-6 lg:mx-auto lg:max-w-5xl">
        <motion.div
          {...fadeIn}
          className="rounded-3xl bg-[#0f172a] px-8 py-16 text-center md:px-16 md:py-20"
        >
          {/* Gradient line decorative */}
          <div
            className="mx-auto mb-8 h-0.5 w-16"
            style={{
              background:
                'linear-gradient(to right, transparent, #2563eb, transparent)',
            }}
            aria-hidden="true"
          />

          <h2 className="heading-section text-white">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Let&apos;s discuss how NexaCorp can help you build something
            extraordinary.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@nexacorp.com?subject=New%20Project%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Start a Project
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            No commitment &middot; Free consultation &middot; 24h response
          </p>
        </motion.div>
      </div>
    </section>
  )
}
