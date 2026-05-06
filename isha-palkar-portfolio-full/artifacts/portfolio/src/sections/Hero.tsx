import { Suspense, lazy, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { WashiTape, FloatingLeaf, FloatingFlower } from "@/components/ScrapbookDecorations";
import { LayeredSectionContainer, ScrapbookImageFrame, StickyNote, TornPaperCard, TapeElement } from "@/components/ScrapbookLayout";

const HeroScene = lazy(() => import("@/scenes/HeroScene"));

const ROLES = ["AI Engineer", "Full Stack Developer", "Hackathon Winner", "GenAI Builder", "Problem Solver"];
const HERO_PORTRAIT_SRC = "/hero-portrait.png";

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="inline-flex items-center gap-1">
      <span style={{ color: "hsl(123 14% 40%)" }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className="inline-block w-0.5 h-7"
        style={{ background: "hsl(123 14% 49%)" }}
      />
    </span>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <LayeredSectionContainer
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[92vh] overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12"
      tone="hsl(40 50% 94%)"
    >
      {/* background scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full" />}>
          <HeroScene mouseX={mouse.x} mouseY={mouse.y} />
        </Suspense>
      </div>

      <div className="absolute top-10 left-6 z-10 hidden md:block scrapbook-float">
        <FloatingLeaf />
      </div>
      <div className="absolute bottom-24 right-8 z-10 hidden md:block scrapbook-float-slower">
        <FloatingFlower />
      </div>
      <div className="absolute top-16 right-12 z-10 hidden lg:block scrapbook-float">
        <FloatingLeaf />
      </div>

      <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-10">
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -18, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative max-w-[360px] mx-auto lg:mx-0"
          >
            <ScrapbookImageFrame
              src={HERO_PORTRAIT_SRC}
              alt="Portrait of Isha in a scrapbook-style frame"
              rotate={-1.5}
              className="bg-[hsl(40_40%_94%)]"
            />
            <StickyNote className="absolute -top-4 left-8 hidden sm:inline-block" tone="#FFF4B8" rotate={-6}>
              AI Enthusiast ✦
            </StickyNote>
            <StickyNote className="absolute bottom-8 -right-8 hidden sm:inline-block" tone="#D4E8D0" rotate={8}>
              Learning through creation 🎨
            </StickyNote>
            <TapeElement className="-bottom-3 left-10" rotate={8} color="hsl(120 24% 72% / 0.72)" width={82} />
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2">
          <TornPaperCard
            tone="hsl(40 52% 96%)"
            rotate={-0.6}
            className="p-5 sm:p-7 lg:p-8 layer-stack"
          >
            <TapeElement className="-top-3 left-10" rotate={-4} />
            <TapeElement className="-top-3 right-14" rotate={6} color="hsl(120 28% 79% / 0.7)" width={58} />
            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr] lg:gap-6 items-start">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="inline-block"
                >
                  <span
                    className="px-4 py-1.5 text-sm rounded-sm"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.05rem",
                      background: "hsl(123 14% 49% / 0.14)",
                      border: "1px solid hsl(123 14% 49% / 0.28)",
                      color: "hsl(123 14% 32%)",
                      transform: "rotate(-1deg)",
                      display: "inline-block",
                    }}
                  >
                    B.E. Computer Engineering @ VESIT Mumbai · CGPA 9.66
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.92]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "hsl(16 41% 14%)",
                    textShadow: "3px 3px 0 hsl(40 50% 78%)",
                  }}
                >
                  Hi, I’m
                  <br />
                  <span
                    style={{
                      color: "hsl(24 45% 54%)",
                      textDecoration: "underline",
                      textDecorationStyle: "wavy",
                      textUnderlineOffset: "10px",
                      textDecorationColor: "hsl(123 14% 49% / 0.45)",
                    }}
                  >
                    Isha.
                  </span>
                </motion.h1>

                <div className="flex flex-wrap items-center gap-3">
                  <StickyNote tone="#E8DCC8" rotate={-4} className="text-[1rem]">Full Stack Developer</StickyNote>
                  <StickyNote tone="#D4E8D0" rotate={4} className="text-[1rem]">Eco Vintage Scrapbook</StickyNote>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="max-w-2xl text-[1.02rem] leading-relaxed"
                  style={{ color: "hsl(16 41% 28%)", fontFamily: "'Inter', sans-serif" }}
                >
                  Building AI systems that understand the world — from RAG pipelines and multi-agent platforms to full-stack apps that actually ship.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.42 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link href="/projects">
                    <motion.span
                      data-testid="btn-view-work"
                      whileHover={{ y: -3, rotate: -1, boxShadow: "4px 4px 0 hsl(123 14% 28%)" }}
                      whileTap={{ y: 0 }}
                      className="px-6 py-3 rounded-sm font-semibold text-base cursor-pointer inline-block"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        background: "hsl(123 14% 47%)",
                        color: "hsl(40 50% 97%)",
                        boxShadow: "3px 3px 0 hsl(123 14% 30%)",
                        border: "1px solid hsl(123 14% 38%)",
                      }}
                    >
                      View My Work
                    </motion.span>
                  </Link>
                  <Link href="/contact">
                    <motion.span
                      data-testid="btn-contact"
                      whileHover={{ y: -3, rotate: 1, boxShadow: "4px 4px 0 hsl(33 22% 55%)" }}
                      whileTap={{ y: 0 }}
                      className="px-6 py-3 rounded-sm font-semibold text-base cursor-pointer inline-block"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        background: "hsl(40 50% 93%)",
                        color: "hsl(16 41% 13%)",
                        boxShadow: "3px 3px 0 hsl(33 22% 60%)",
                        border: "1px solid hsl(33 22% 65%)",
                      }}
                    >
                      Get in Touch
                    </motion.span>
                  </Link>
                  <a data-testid="btn-github" href="https://github.com/ishapalkar" target="_blank" rel="noreferrer">
                    <motion.span
                      whileHover={{ y: -3, rotate: -1 }}
                      whileTap={{ y: 0 }}
                      className="px-5 py-3 rounded-sm font-medium text-sm cursor-pointer inline-block"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        background: "transparent",
                        color: "hsl(16 41% 25%)",
                        border: "1.5px dashed hsl(33 22% 58%)",
                      }}
                    >
                      GitHub ↗
                    </motion.span>
                  </a>
                </motion.div>
              </div>

              <div className="space-y-4 lg:pt-6">
                <StickyNote tone="#F0E4DC" rotate={3} className="w-full block">
                  Sustainable fashion-inspired collage, layered with paper scraps and eco tones.
                </StickyNote>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.32 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {[
                    { value: "9.66", label: "CGPA" },
                    { value: "5+", label: "AI Projects" },
                    { value: "3", label: "Hackathon Wins" },
                    { value: "2", label: "Internships" },
                  ].map((stat, index) => (
                    <TornPaperCard
                      key={stat.label}
                      tone={index % 2 === 0 ? "hsl(40 50% 95%)" : "hsl(82 17% 90%)"}
                      rotate={index % 2 === 0 ? -1.5 : 1.2}
                      className="p-4 text-center"
                    >
                      <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 18%)" }}>
                        {stat.value}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] mt-0.5" style={{ color: "hsl(16 41% 42%)", fontFamily: "'Inter', sans-serif" }}>
                        {stat.label}
                      </p>
                    </TornPaperCard>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.44 }}
                  className="hidden lg:block"
                >
                  <StickyNote tone="#FFF4B8" rotate={-3} className="inline-block">
                    Try to keep the whole page feeling pinned, pasted, and connected.
                  </StickyNote>
                </motion.div>
              </div>
            </div>
          </TornPaperCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <span style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 35%)", fontSize: "0.85rem" }}>
          scroll down
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="hsl(16 41% 35%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </LayeredSectionContainer>
  );
}
