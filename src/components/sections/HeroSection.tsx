"use client";

import { Button } from "antd";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import MolecularPattern from "@/components/ui/MolecularPattern";
import ProfileImage from "@/components/ui/ProfileImage";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip bg-ivory pt-28 pb-20 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <MolecularPattern className="pointer-events-none absolute -right-24 -top-10 h-[28rem] w-[28rem] text-teal/15" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div variants={container} initial={initial} animate="show">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal"
          >
            <span aria-hidden className="h-px w-8 bg-gold" />
            Chemistry Educator · NEET &amp; JEE
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-serif text-4xl font-semibold leading-[1.12] text-navy sm:text-5xl lg:text-[3.5rem]"
          >
            Explore Chemistry.{" "}
            <span className="italic text-teal text-4xl">Discover the Science Within.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            I’m Vaishnav M, a Chemistry educator passionate about making complex scientific
            concepts easier to understand and helping students build a strong foundation in
            chemistry.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button type="primary" size="large" shape="round" href="#experience">
                Explore My Journey
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button size="large" shape="round" href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 inline-flex items-center gap-2 text-sm text-slate"
          >
            <MapPin className="h-4 w-4 text-gold" aria-hidden />
            {portfolio.baseLabel}
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-md"
        >
          {/* Offset decorative frame */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/70 sm:translate-x-5 sm:translate-y-5"
          />
          <div
            aria-hidden
            className="absolute -left-3 -top-3 h-24 w-24 rounded-3xl bg-teal/10 sm:-left-5 sm:-top-5"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy shadow-[0_24px_60px_-20px_rgba(20,43,59,0.45)]">
            <ProfileImage priority />
          </div>

          <div className="absolute bottom-6 left-0 -translate-x-2 rounded-xl border border-navy/10 bg-white px-4 py-2.5 text-xs font-semibold text-navy shadow-lg sm:-translate-x-6 sm:text-sm">
            M.Sc. Chemical Science
          </div>
          <div className="absolute right-0 top-8 translate-x-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-white shadow-lg sm:translate-x-6 sm:text-sm">
            NEET &amp; JEE Chemistry
          </div>
        </motion.div>
      </div>
    </section>
  );
}
