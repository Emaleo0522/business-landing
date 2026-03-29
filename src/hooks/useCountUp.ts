import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `target` over `duration` ms.
 * Returns the current animated value as a rounded integer.
 * Only starts counting when `enabled` is true (tie to useInView).
 */
export function useCountUp(target: number, enabled: boolean, duration = 2000): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const startTime = performance.now()

    let rafId: number

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out quad for natural deceleration
      const eased = 1 - (1 - progress) * (1 - progress)
      setValue(Math.round(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [target, enabled, duration])

  return value
}
