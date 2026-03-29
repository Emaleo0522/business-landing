/**
 * Simple className merge utility.
 * Filters falsy values and joins remaining strings.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
