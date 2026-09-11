"use client";

import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { useIntroComplete } from "@/components/motion/IntroProvider";
import { personal } from "@/lib/data/personal";
import { EASE_EXPO } from "@/lib/motion";
import { getCareerYearsTenths } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const introComplete = useIntroComplete();
  const reduce = useReducedMotion();
  const [tenure, setTenure] = useState(() => getCareerYearsTenths(personal.careerStartMonth));

  useEffect(() => {
    const tick = () => setTenure(getCareerYearsTenths(personal.careerStartMonth));
    const id = setInterval(tick, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const goWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const show = introComplete;

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-10 pt-[calc(5.25rem+env(safe-area-inset-top))] sm:pb-14 sm:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-white/[0.04] blur-[80px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10">
        <div className="flex w-full max-w-lg flex-col gap-0">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.08 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[0.7rem] font-medium tracking-wide text-ink-muted sm:text-xs">
              Available for selected projects
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.55, ease: EASE_EXPO, delay: 0.12 }}
            className="mt-4 font-display text-[2.25rem] leading-[1.1] tracking-tight text-ink sm:mt-5 sm:text-[3.25rem] lg:text-[3.75rem]"
          >
            Hi, I&apos;m
            <span className="mt-1 block italic text-accent">{personal.name}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.18 }}
            className="mt-3 font-display text-base leading-snug text-ink-muted sm:text-xl lg:text-[1.35rem]"
          >
            UI/UX Designer <span className="text-ink-faint">&amp;</span> Front end developer
          </motion.p>

          <p className="relative z-10 mt-4 max-w-md text-base leading-7 text-ink-muted sm:mt-5">
            I design intuitive digital experiences and build interactive interfaces that combine
            user needs, thoughtful visual hierarchy, and clean front-end execution.
          </p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.24 }}
            className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3"
          >
            <Magnetic>
              <Button type="button" onClick={goWork} className="w-full rounded-full sm:w-auto">
                View my work
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </Button>
            </Magnetic>
            <Magnetic strength={0.18}>
              <a
                href={personal.cvPdf}
                download={personal.cvFileName}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-ink transition-all duration-300 ease-expo hover:border-white/45 hover:bg-white/[0.06] sm:w-auto"
              >
                <Download size={16} strokeWidth={1.75} />
                Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.32 }}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-5 text-sm sm:flex sm:flex-wrap sm:gap-x-10"
          >
            <div>
              <p className="font-medium text-ink">{tenure}+ years</p>
              <p className="text-ink-faint">Professional experience</p>
            </div>
            <div>
              <p className="font-medium text-ink">{personal.projectsCount} projects</p>
              <p className="text-ink-faint">Shipped across industries</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium leading-snug text-ink">On-site • Hybrid • Remote</p>
              <p className="text-ink-faint">Available for</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[15rem] sm:max-w-sm lg:mx-0 lg:max-w-md xl:max-w-lg"
        >
          <div className="overflow-hidden rounded-xl border-2 border-white p-[3px] shadow-[0_0_40px_rgba(232,111,42,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(0.75rem-5px)] bg-surface">
              <Image
                src={personal.photo}
                alt={`${personal.name} — portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="rounded-[inherit] object-cover object-[center_18%] contrast-[1.04] saturate-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-base/35 via-transparent to-white/5"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
