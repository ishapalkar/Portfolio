import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { ScrapbookCornerTape } from "@/components/ScrapbookDecorations";
import { LayeredSectionContainer, StickyNote, TornPaperCard } from "@/components/ScrapbookLayout";

const PREVIEW_COUNT = 4;

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        data-testid={`project-card-${project.id}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, rotate: "0deg", scale: 1.02 }}
        className="cursor-pointer relative overflow-hidden h-full"
        style={{
          transform: "rotate(-0.5deg)",
        }}
      >
        <TornPaperCard tone={project.bg} rotate={-0.8} className="p-5 sm:p-6 h-full">
          <ScrapbookCornerTape position="tl" />

          <span
            className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-sm font-medium"
            style={{
              background: `${project.accent}20`,
              color: project.accent,
              border: `1px solid ${project.accent}44`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {project.category}
          </span>

          <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-start">
            <p className="text-3xl sm:text-4xl mb-1 sm:mb-0">{project.emoji}</p>
            <div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ fontFamily: "'Caveat', cursive", color: project.accent, fontSize: "0.95rem" }}
              >
                {project.tagline}
              </p>
            </div>
          </div>

          <p className="text-sm mb-4 line-clamp-2" style={{ color: "hsl(16 41% 25%)" }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{ background: "rgba(255,255,255,0.55)", color: "hsl(16 41% 20%)", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-sm" style={{ background: "rgba(255,255,255,0.55)", color: "hsl(16 41% 40%)" }}>
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
          <p
            className="mt-3 text-xs font-medium"
            style={{ fontFamily: "'Caveat', cursive", color: project.accent, fontSize: "0.95rem" }}
          >
            Click to explore →
          </p>
        </TornPaperCard>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  return (
    <LayeredSectionContainer id="projects" data-testid="projects-section" tone="hsl(40 31% 89%)">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-4"
      >
        <div className="flex-1 border-b border-dashed" style={{ borderColor: "hsl(21 42% 55% / 0.3)" }} />
        <span
          className="inline-block px-5 py-2 text-3xl font-bold rotate-1"
          style={{
            fontFamily: "'Caveat', cursive",
            background: "hsl(21 42% 55% / 0.12)",
            border: "1px solid hsl(21 42% 55% / 0.3)",
            color: "hsl(16 41% 13%)",
            boxShadow: "2px 2px 0 hsl(21 42% 55% / 0.2)",
          }}
        >
          My Work
        </span>
        <Link href="/projects">
          <span
            className="text-sm font-medium cursor-pointer hover:underline"
            style={{ fontFamily: "'Caveat', cursive", color: "hsl(21 42% 45%)", fontSize: "1rem" }}
          >
            All Projects →
          </span>
        </Link>
      </motion.div>

      <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
        {projects.slice(0, PREVIEW_COUNT).map((project, index) => (
          <div key={project.id} className={index % 2 === 0 ? "mb-5" : "mb-7 md:translate-y-4"} style={{ breakInside: "avoid" }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <Link href="/projects">
          <motion.span
            whileHover={{ y: -2, boxShadow: "4px 4px 0 hsl(21 42% 42%)" }}
            className="inline-block px-8 py-3 rounded-sm font-semibold cursor-pointer"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.15rem",
              background: "hsl(21 42% 55%)",
              color: "#fff",
              boxShadow: "3px 3px 0 hsl(21 42% 38%)",
              border: "1px solid hsl(21 42% 48%)",
            }}
          >
            See All 6 Projects →
          </motion.span>
        </Link>
      </motion.div>
    </LayeredSectionContainer>
  );
}
