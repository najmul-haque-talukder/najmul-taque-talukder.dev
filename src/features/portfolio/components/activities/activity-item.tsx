import { format } from "date-fns"
import { ArrowUpRightIcon, StarIcon } from "lucide-react"

import { getIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

import type { Activity } from "../../types/activities"

export function ActivityItem({
  className,
  activity,
}: {
  className?: string
  activity: Activity
}) {
  return (
    <div
      className={cn(
        "group relative flex items-center pr-2 transition-colors hover:bg-accent-muted border-b border-edge",
        className
      )}
    >
      {activity.url && (
        <a
          href={activity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`View ${activity.organization}`}
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
          {getIcon(activity.iconName) ?? <StarIcon />}
        </div>

        <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
          <h3 className="leading-snug font-medium text-balance">
            {activity.role}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {activity.organization}
          </p>
          <div className="text-xs text-muted-foreground/80">
            {format(new Date(activity.period.start), "MMM yyyy")} —{" "}
            {activity.period.end
              ? format(new Date(activity.period.end), "MMM yyyy")
              : "Present"}
          </div>
        </div>

        {activity.url && (
          <ArrowUpRightIcon className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
        )}
      </div>
    </div>
  )
}
