import type { Education } from "../types/education"

export const EDUCATION: Education[] = [
  {
    id: "cpi",
    companyName: "Cumilla Polytechnic Institute",
    companyLogo: "/logo/cpi.avif", // Will need to ensure this exists or use a default
    companyWebsite: "https://cumilla.polytech.gov.bd/", // Example website
    positions: [
      {
        id: "diploma",
        title: "Diploma in Engineering, Dept. of Computer Science & Technology",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        employmentType: "Diploma in Engineering",
        icon: "education",
        description:`Student of the Computer Science and Technology Department at Cumilla Polytechnic Institute.

**Leadership & Roles**

- Class Representative (CR) — Led class communication and represented students effectively.
- General Secretary & Chief Coordinator of Cumilla Polytechnic Institute High Tech Club — Managed events, coordinated club activities, and led technical workshops.

**Competitions & Achievements**

- Champion — Innovation Competition 1.0, December 2025
- 1st Runner-Up — Asset Skill Competition, February 2025
- NSDA Certification — August 2025
- Multiple other professional and technical certifications in programming, networking, and IT skills.

**Technical Skills & Projects**

- Web Development: Developed websites using html, css, tailwind css, React.js.
- Programming: Proficient in Python, Java, Kotlin & Javascript.
- Mobile Apps: Built Android apps using Kotlin.
- Networking: Basic knowledge in computer networking.
- Innovation & Problem Solving: Led and contributed to multiple innovation and technical projects at institute level.

**Co-Curricular, Creative & Personal Highlights**

- Highly active in co-curricular activities, including technical events and workshops.
- Photography & Videography: Worked professionally, including projects with Programming Hero Bangladesh Tech Community.
- Traveler & Explorer: Passionate about traveling, exploring new places, and gaining diverse experiences that inspire creativity and problem-solving.

**Academic Performance**

- Maintained strong academic performance throughout the program.
- Recognized for discipline, dedication, and consistent excellence in technical coursework.
        `,
        skills: [
          "UX Theory",
          "Frontend Development",
          "UI Design",
          "Software Testing",
          "Mentoring",
          "Graphics Designing",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "jkhs",
    companyName: "Jamila Khatun High School",
    companyLogo: "/logo/jkhs.avif", // Will need to ensure this exists or use a default
    companyWebsite: "https://jkhs.edu.bd/", // Example website
    positions: [
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Socendary School Certificate, Dept. of Genarel Machanics",
        employmentPeriod: {
          start: "01.2016",
          end: "06.2021",
        },
        icon: "education",
        description: `Studied in the General Mechanics Trade at Jamila Khatun High School.

- Achieved Roll No. 01 hehee.

- Recognized as a top-performing and disciplined student.

- Served as Class Representative (CR), demonstrating leadership and communication skills.

- Actively participated in cycling and co-curricular activities.

- Completed practical training in mechanical tools, machine operations, and maintenance work with hands-on workshop experience.`,
        skills: [
          "Class Representative"
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
]
