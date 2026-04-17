import { ArrowUpRightIcon, BookmarkIcon } from "lucide-react"

import { getIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

import type { Bookmark } from "../../types/bookmarks"

export function BookmarkItem({
  className,
  bookmark,
}: {
  className?: string
  bookmark: Bookmark
}) {
  return (
    <div
      className={cn(
        "group relative flex items-center pr-2 transition-colors hover:bg-accent-muted",
        className
      )}
    >
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        aria-label={`Visit ${bookmark.title}`}
      />

      <div className="relative z-10 flex w-full items-center pointer-events-none">
        <div
          className={cn(
            "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
            "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
            "bg-muted text-muted-foreground [&_svg]:size-4"
          )}
        >
          {getIcon(bookmark.iconName) ?? <BookmarkIcon />}
        </div>

        <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
          <h3 className="leading-snug font-medium text-balance text-sm sm:text-base">
            {bookmark.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {bookmark.category}
          </p>
        </div>

        <ArrowUpRightIcon className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
      </div>
    </div>
  )
}
