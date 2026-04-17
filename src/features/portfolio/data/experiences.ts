import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "softvence",
    companyName: "Softvence",
    companyLogo:
      "https://cdn.prod.website-files.com/63bcf9ab8eb5266da6a0db19/65cdd8d9c5769e2142d26808_65cdc4be0f0cf35e995108b0_Frame%252B8sdfsd.png",
    companyWebsite: "https://softvence.agency/",
    positions: [
      {
        id: "0C741FC7-A4C2-4B1D-857B-F3058CE8D9CE",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Full Time",
        icon: "code",
        description:
          "- Build Mordern, Fast, Suqure Responsive Web app. \n - Design and build Pro application from Figma to production-ready Applications.",
        skills: [
          "React.js",
          "Wix",
          "Tailwind CSS",
          "Squarespace",
          "Figma",
          "Webflow",
          "Go High Level"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  
  {
    id: "bdcalling",
    companyName: "BdCalling Academy",
    companyLogo: "https://bdcallingacademy.com/images/logo%20(5).png",
    companyWebsite: "https://bdcallingacademy.com/",
    positions: [
      {
        id: "0C741FC7-A4C2-4B1D-857B-F3058CE8D9CE",
        title: "Frontend Development",
        employmentPeriod: {
          start: "09.2025",
          end : "12.2025"
        },
        employmentType: "Intern",
        icon: "code",
        description:
          "- Build Mordern, Fast, Responsive Web app. \n - Design and build production-ready Applications.",
        skills: [
          "React.js",
          "Next.js",
          "Tailwind CSS"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  

]