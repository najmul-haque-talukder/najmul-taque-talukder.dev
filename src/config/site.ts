import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

function getSiteUrl() {
  if (process.env.APP_URL) return process.env.APP_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return "https://najmul-haque-talukder.vercel.app"
}

export const SITE_INFO = {
  name: USER.displayName,
  url: getSiteUrl(),
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Case Studies",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const X_USERNAME = "@najmul"
export const GITHUB_USERNAME = "najmul-haque-talukder"
export const SOURCE_CODE_GITHUB_REPO = "najmul-haque-talukder/najmul-haque-talukder"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/najmul-haque-talukder"

export const UTM_PARAMS = {
  utm_source: "najmul-haque-talukder.vercel.app",
}
