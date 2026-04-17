/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon file resolution:
 * - Default: /public/tech-stack-icons/[key].svg
 * - Themed (when `theme === true`):
 *   - Dark:  /public/tech-stack-icons/[key]-dark.svg
 *   - Light: /public/tech-stack-icons/[key]-light.svg
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string
  /** Display name of the technology. */
  title: string
  /** Official website URL. */
  href: string
  /** Category tags used for grouping/filtering. */
  categories: string[]
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean
  /** If true or string, use cdn.simpleicons.org */
  simpleIcon?: boolean | string
  /** Short label describing how this tech is used (e.g. "Frontend Library"). */
  usePurpose?: string
  /** Brief description of why/how this technology is used in projects. */
  description?: string
  /** Custom image URL/path to override default icon logic. */
  image?: string
}
