import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "edulop",
    title: "Edulop",
    period: {
      start: "03.2026",
    },
    link: "https://edulop-41.vercel.app/",
    skills: ["Next.js", "Firebase Authentication and Database"],
    description: `
- A modern SaaS-based campus management web application designed to streamline academic and administrative operations.
`,
    logo: "/logo/edulop.avif",
    isExpanded: true,
  },
  {
    id: "eid-chanda",
    title: "Eid Chanda",
    period: {
      start: "02.2026",
    },
    link: "https://eid-chandaaa.vercel.app/",
    skills: ["Next.js", "Tailwind CSS", "Suparbase Database"],
    description: `
- An innovative Bangladeshi web platform combining Eid card generation, dua content creation, and a powerful dashboard system.
`,
    logo: "/logo/eid-chanda.avif",
    isExpanded: false,
  },
  {
    id: "n-tech-academy",
    title: "N Tech Academy",
    period: {
      start: "10.2025",
    },
    link: "https://learning-management-by-najmul.vercel.app/",
    skills: ["React", "Tailwind CSS", "Clerk Authentication"],
    description: `
- A modern Learning Management System where users can log in as Student or Educator. Students can browse courses, enroll, and watch lessons, while educators can create and manage courses. Built with React and Tailwind, this LMS offers a clean UI, dual login system, and smooth learning experience.
`,
    logo: "https://learning-management-by-najmul.vercel.app/naj.png",
    isExpanded: false,
  },
  {
    id: "nest-shop",
    title: "Nest Shop",
    period: {
      start: "09.2025",
    },
    link: "https://nest-shop-by-najmul.vercel.app/",
    skills: ["React.js", "Tailwind CSS", "Vercel"],
    description: `- Nest Shop brings you fresh, hand-picked flowers for every occasion. From birthdays and anniversaries to special surprises, we deliver beauty and fragrance straight to your doorstep, fast and safely. Make every moment bloom with our stunning collection!`,
    logo: "https://learning-management-by-najmul.vercel.app/naj.png",
    isExpanded: false,
  },
]
