import { format } from "date-fns"
import { ArrowUpRightIcon, TrophyIcon } from "lucide-react"

import { getIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

import type { Award } from "../../types/awards"

export function AwardItem({
  className,
  award,
}: {
  className?: string
  award: Award
}) {
  return (
    <div
      className={cn(
        "group relative flex items-center pr-2 transition-colors hover:bg-accent-muted",
        className
      )}
    >
      {award.url && (
        <a
          href={award.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`View award: ${award.title}`}
        />
      )}

      <div className="relative z-10 flex w-full items-center pointer-events-none">
        <div
          className={cn(
            "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
            "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
            "bg-muted text-muted-foreground [&_svg]:size-4"
          )}
        >
          {getIcon(award.iconName) ?? <TrophyIcon />}
        </div>

        <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
          <h3 className="leading-snug font-medium text-balance">
            {award.title}
          </h3>
          {award.achievedFor && (
            <p className="text-xs font-medium text-primary/80">
              {award.achievedFor}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            {award.issuer} • {format(new Date(award.issueDate), "MMM yyyy")}
          </p>
        </div>

        {award.url && (
          <ArrowUpRightIcon className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
        )}
      </div>
    </div>
  )
}
