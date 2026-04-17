import Image from "next/image"

import { cn } from "@/lib/utils"

import type { TechStack as TechStackType } from "../types/tech-stack"
import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

function TechIcon({ tech, className }: { tech: TechStackType; className?: string }) {
  if (tech.image) {
    return (
      <Image
        src={tech.image}
        alt={`${tech.title} icon`}
        width={20}
        height={20}
        className={className}
        unoptimized
      />
    )
  }

  if (tech.theme) {
    return (
      <>
        <Image
          src={
            tech.simpleIcon
              ? `https://cdn.simpleicons.org/${typeof tech.simpleIcon === "string" ? tech.simpleIcon : tech.key}/black`
              : `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`
          }
          alt={`${tech.title} light icon`}
          width={20}
          height={20}
          className={cn("hidden [html.light_&]:block", className)}
          unoptimized
        />
        <Image
          src={
            tech.simpleIcon
              ? `https://cdn.simpleicons.org/${typeof tech.simpleIcon === "string" ? tech.simpleIcon : tech.key}/white`
              : `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`
          }
          alt={`${tech.title} dark icon`}
          width={20}
          height={20}
          className={cn("hidden [html.dark_&]:block", className)}
          unoptimized
        />
      </>
    )
  }

  return (
    <Image
      src={
        tech.simpleIcon
          ? `https://cdn.simpleicons.org/${typeof tech.simpleIcon === "string" ? tech.simpleIcon : tech.key}`
          : `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`
      }
      alt={`${tech.title} icon`}
      width={20}
      height={20}
      className={className}
      unoptimized
    />
  )
}

function TechStackItem({ tech, index }: { tech: TechStackType; index: number }) {
  return (
    <div
      className={cn(
        "group relative flex items-center transition-colors hover:bg-accent-muted border-b border-edge",
        index % 2 === 0 && "md:border-r md:border-dashed"
      )}
    >
      <a
        href={tech.href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        aria-label={`View ${tech.title}`}
      />

      <div className="relative z-10 flex w-full items-center pointer-events-none">
        <div
          className={cn(
            "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
            "border border-muted-foreground/15 bg-muted text-muted-foreground [&_img]:size-4"
          )}
        >
          <TechIcon tech={tech} />
        </div>

        <div className="flex-1 space-y-0.5 border-l border-dashed border-edge p-4 pr-2">
          <h3 className="leading-snug font-medium text-balance">
            {tech.title}
          </h3>
          {tech.usePurpose && (
            <p className="text-xs font-medium text-primary/80">
              {tech.usePurpose}
            </p>
          )}
          {tech.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {tech.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>
          Stack
          <PanelTitleSup>({TECH_STACK.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="p-0">
        <div className="relative grid grid-cols-1 md:grid-cols-2 border-t border-edge">
          {/* Vertical center divider between columns */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-edge md:block" />
          {TECH_STACK.map((tech, index) => (
            <TechStackItem key={tech.key} tech={tech} index={index} />
          ))}
        </div>
      </PanelContent>
    </Panel>
  )
}
