"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Chip, Tag } from "@/components/ui/Chip";
import { BrowserFrame, ScreenshotPlaceholder } from "@/components/ui/BrowserFrame";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import {
  explorationFilters,
  explorationProjects,
  type ExplorationFilter,
} from "@/lib/data/projects";
import { projectHref } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export function MoreExplorations() {
  const [filter, setFilter] = useState<ExplorationFilter>("All");

  const items = useMemo(() => {
    if (filter === "All") return explorationProjects;
    return explorationProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="explorations" compact className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="More explorations"
            title="Additional work"
            description="Landing pages, dashboards, and UI systems beyond the flagship case studies."
          />
        </Reveal>

        <LayoutGroup>
          <div className="mt-8 flex flex-wrap gap-2">
            {explorationFilters.map((f) => (
              <div key={f} className="relative">
                <Chip active={filter === f} onClick={() => setFilter(f)} aria-pressed={filter === f}>
                  {filter === f && (
                    <motion.span
                      layoutId="explore-filter"
                      className="absolute inset-0 -z-10 rounded-md bg-accent/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {f}
                </Chip>
              </div>
            ))}
          </div>
        </LayoutGroup>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((project) => {
              const href = projectHref(project);
              const body = (
                <>
                  <BrowserFrame title={project.title} className="shadow-none">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 24rem, 50vw"
                      />
                    ) : (
                      <ScreenshotPlaceholder label={project.title} />
                    )}
                  </BrowserFrame>
                  <div className="mt-3">
                    <h3 className="text-base font-medium text-ink">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{project.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="View"
                      className="group block"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="group block">{body}</div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
