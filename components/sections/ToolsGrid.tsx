"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { professionalTools } from "@/lib/data/professionalTools";

export function ToolsGrid() {
  return (
    <Section id="tools" compact className="border-t border-border !py-12 sm:!py-14">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="Professional tools"
            description="Tools I use to build products and experiences for users."
          />
        </Reveal>

        <RevealStagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:mt-9 lg:grid-cols-8 lg:gap-3">
          {professionalTools.map((tool) => (
            <RevealItem key={tool.id}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface/40 px-3 py-5 text-center transition-colors duration-300 ease-expo hover:border-ink-faint hover:bg-surface">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={48}
                    height={48}
                    className="max-h-12 max-w-12 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <p className="min-h-[2.5rem] text-xs font-medium leading-snug text-ink-muted sm:text-sm">
                  {tool.name}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
