import { CodeBlockCommand } from "@/registry/components/code-block-command"

export default function CodeBlockCommandDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand
        pnpm="pnpm dlx shadcn add @najmul-haque-talukder/code-block-command"
        yarn="yarn shadcn add @najmul-haque-talukder/code-block-command"
        npm="npx shadcn add @najmul-haque-talukder/code-block-command"
        bun="bunx --bun shadcn add @najmul-haque-talukder/code-block-command"
      />
    </div>
  )
}
