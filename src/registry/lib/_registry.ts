import type { Registry } from "shadcn/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    title: "Utility Functions",
    author: "najmul-haque-talukder <najmul.dev99@gmail.com>",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "haptic",
    type: "registry:lib",
    title: "Haptic Feedback",
    author: "najmul-haque-talukder <najmul.dev99@gmail.com>",
    description: "Trigger haptic feedback on mobile devices.",
    files: [
      {
        path: "lib/haptic/haptic.ts",
        type: "registry:lib",
      },
    ],
  },
]
