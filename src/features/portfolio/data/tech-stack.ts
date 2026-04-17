import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    usePurpose: "Core Language",
    description: "Primary language for building interactive web applications and dynamic user interfaces.",
    // image: "/your-image-path.png", // Uncomment and add your image URL/path here!

  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    usePurpose: "UI Library",
    description: "Component-based library for building reusable and performant user interfaces.",
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    usePurpose: "CSS Framework",
    description: "Utility-first CSS framework for rapid UI styling with consistent design tokens.",
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    usePurpose: "Version Control",
    description: "Distributed version control system for tracking code changes and collaboration.",
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "Design"],
    usePurpose: "API Testing",
    description: "Used to test REST APIs, send HTTP requests, validate responses, and automate API workflows for backend testing.",
    image : "/images/link-icons/postman.webp"
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
    usePurpose: "UI/UX Design",
    description: "Collaborative design tool for creating wireframes, prototypes, and design systems.",
  },
  {
    key: "ps",
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
    categories: ["Tools", "Design"],
    usePurpose: "Brand Designing",
    description: "Used for creating and editing high-quality images, thumbnails, banners, and social media graphics with advanced tools like layering, masking, and color correction.",
  },
  {
    key: "ai",
    title: "Adobe Illustrator",
    href: "https://www.adobe.com/products/illustrator.html",
    categories: ["Tools", "Design"],
    usePurpose: "Vector design & illustration",
    description: "Used to design logos, icons, and scalable vector graphics with precision using paths, shapes, and typography tools.",
    image : "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg"
  },
  {
    key: "jira",
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
    categories: ["Testing", "Bug Tracking"],
    usePurpose: "Bug tracking & project management",
    description: "Used to track bugs, manage tasks, and collaborate with development teams using agile methodologies like Scrum and Kanban.",
    image : "/images/link-icons/jira.svg"
  },
  {
    key: "trello",
    title: "Trello",
    href: "https://trello.com/",
    categories: ["Tools", "Design"],
    usePurpose: "Task & workflow management",
    description: "Used to organize tasks and projects visually using boards, lists, and cards for better productivity and team collaboration.",
    image : "/images/link-icons/trello.svg"
  },
  {
    key: "playeright",
    title: "Playwright",
    href: "https://playwright.dev/",
    categories: ["Tools", "Design"],
    usePurpose: "Automation Testing",
    description: "Used for automated browser testing of web applications, supporting cross-browser testing (Chromium, Firefox, WebKit) with fast and reliable scripts.",
    image : "/images/link-icons/playwright.svg"
  },
  {
    key: "swagger",
    title: "Swagger",
    href: "https://swagger.io/",
    categories: ["Tools", "Design"],
    usePurpose: "API documentation & testing",
    description: "Used to design, document, and test APIs interactively, making it easier for developers to understand and integrate endpoints.",
    image : "/images/link-icons/swagger.png"
  }
]
