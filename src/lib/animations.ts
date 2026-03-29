import type { Variants } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1] as const

/** Scroll reveal: fade-in + slide-up */
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease },
}

/** Scroll reveal: fade-in + slide-up (preferred) */
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

/** Stagger container — wraps children with stagger delay */
export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
}

/** Stagger child item */
export const staggerItem = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
}

/** Accordion expand/collapse variants */
export const accordionVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1 },
}

/** Mobile menu variants — uses translateY, NEVER translateX */
export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
}
