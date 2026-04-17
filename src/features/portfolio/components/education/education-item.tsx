import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Education } from "../../types/education"
import { EducationPositionItem } from "./education-position-item"

export function EducationItem({ education }: { education: Education }) {
  return (
    <div
      id={`education-${education.id}`}
      className="group relative scroll-mt-14 space-y-4 py-4 border-b border-edge"
    >
      {education.companyWebsite && (
        <a
          href={addQueryParams(education.companyWebsite, UTM_PARAMS)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`Visit ${education.companyName}`}
        />
      )}
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {education.companyLogo ? (
            <Image
              src={education.companyLogo}
              alt={`${education.companyName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {education.companyName}
        </h3>

        {education.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Currently Studying</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4">
        {education.positions.map((position, index) => (
          <EducationPositionItem
            key={position.id}
            position={position}
            showTimeline={index !== education.positions.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
