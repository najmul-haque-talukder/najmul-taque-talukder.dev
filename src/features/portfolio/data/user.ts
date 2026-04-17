import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Najmul Haque",
  lastName: "Talukder",
  displayName: "Najmul Haque Talukder",
  username: "najmul",
  gender: "male",
  pronouns: "He/Him",
  bio: "Creating impactful digital experiences with clean, scalable code.",
  flipSentences: [
    "Frontend Developer",
    "Quality Assurance (QA) Engineer",
    "Brand Designer",
  ],
  address: "Mohakhali, Dhaka, Bangladesh",
  phoneNumber: "Kzg4MDE2MTEwMzk0MjU=", // +8801611039425 (E.164, base64)
  email: "bmFqbXVsaGFxdWV0YWx1a2RlcjQxQGdtYWlsLmNvbQ==", // najmulhaquetalukder41@gmail.com (base64)
  website: "https://najmul-haque-talukder-41.vercel.app", 
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Softvence",
      website: "https://softvence.agency/",
    }
  ],
  about: `
- **Frontend Developer** currently at **Softvence**, specializing in modern, responsive, and user-focused websites combining clean design with strong functionality.
- Skilled in **React**, **JavaScript**, **Wix**, **Squarespace**, **Webflow**, **WordPress**, and **Shopify**; delivering business websites, portfolios, and eCommerce platforms.
- Strong focus on performance optimization, UI precision, and scalable architecture.
- Completed Diploma in Engineering in **Computer Science & Technology** from **Cumilla Polytechnic Institute.**
- Chief Coordinator of **Cumilla Polytechnic Institute High Tech Club**:
  - Organizing technology-driven initiatives and innovation programs
  - Supporting student skill development and hands-on learning
- Passionate about learning new technologies and solving real-world problems.
- **Mission:** Building fast, functional, and user-centered digital solutions that create meaningful impact.
`,
  avatar: "/profile/najmul.avif",
  ogImage: "/og-image.png",
  namePronunciationUrl: "/voice/najmul.mp3",
  timeZone: "Asia/Dhaka",
  keywords: [
    "najmul",
    "najmulhtalukder",
    "najmul haque talukder",
    "najmul h talukder",
    "cpi high tech club",
    "frontend developer bangladesh",
    "najmul softvence",
    "najmul-haque-talukder"
  ],
  dateCreated: "2026-02-15",
} satisfies User