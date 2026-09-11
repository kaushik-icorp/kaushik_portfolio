"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { BrowserFrame, ScreenshotPlaceholder } from "@/components/ui/BrowserFrame";
import { Tag } from "@/components/ui/Chip";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { flagshipProjects } from "@/lib/data/projects";
import { cn, projectHref } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function SelectedWork() {
  return (
    <Section id="work">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Flagship case studies"
            description="Deep dives across product UX — research through UI systems — documented as case studies you can open."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {flagshipProjects.map((project, index) => {
            const reverse = index % 2 === 1;
            const href = projectHref(project);
            return (
              <RevealStagger key={project.id}>
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                    reverse && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <RevealItem>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="View"
                      className="group block"
                    >
                      <BrowserFrame title={project.title}>
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                            sizes="(min-width: 1024px) 36rem, 100vw"
                          />
                        ) : (
                          // TODO: replace with real project screenshot
                          <ScreenshotPlaceholder label={project.title} />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-base/0 transition-colors duration-500 group-hover:bg-base/10" />
                      </BrowserFrame>
                    </a>
                  </RevealItem>

                  <RevealItem>
                    <div className={cn(reverse && "lg:pl-0")}>
                      <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                        Case study 0{index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-md text-base text-ink-muted">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                      >
                        View case study
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.75}
                          className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </RevealItem>
                </article>
              </RevealStagger>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
