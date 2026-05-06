import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { projects, categories, type Category } from "@/data/projects";
import { ScrapbookCornerTape } from "@/components/ScrapbookDecorations";
import TornPaperDivider from "@/components/TornPaperDivider";
import { LayeredSectionContainer, StickyNote, TornPaperCard } from "@/components/ScrapbookLayout";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const rotations = ["-1.5deg", "1deg", "-0.5deg", "0.8deg", "-1deg", "1.2deg"];
  const rotate = rotations[index % rotations.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35 }}
    >
      <Link href={`/projects/${project.id}`}>
        <motion.div
          data-testid={`projects-page-card-${project.id}`}
          whileHover={{ y: -10, rotate: "0deg", scale: 1.02 }}
          className="cursor-pointer relative overflow-hidden h-full flex flex-col"
          style={{ transform: `rotate(${rotate})` }}
        >
          <TornPaperCard tone={project.bg} rotate={0} className="p-6 paper-edge relative overflow-hidden h-full flex flex-col">
            <ScrapbookCornerTape position="tl" />

            <span
              className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-sm font-medium"
              style={{
                background: `${project.accent}20`,
                color: project.accent,
                border: `1px solid ${project.accent}44`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {project.category}
            </span>

            <p className="text-4xl mb-4">{project.emoji}</p>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}>
              {project.title}
            </h3>
            <p className="text-xs font-medium mb-3" style={{ fontFamily: "'Caveat', cursive", color: project.accent, fontSize: "0.9rem" }}>
              {project.tagline}
            </p>
            <p className="text-sm mb-4 flex-1" style={{ color: "hsl(16 41% 22%)", lineHeight: "1.65" }}>
              {project.description}
            </p>

            <div className="mb-4 space-y-1">
              {project.highlights.slice(0, 2).map((h) => (
                <p key={h} className="flex gap-1.5 text-xs" style={{ color: "hsl(16 41% 28%)" }}>
                  <span style={{ color: project.accent, marginTop: 2 }}>✦</span>
                  {h}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-sm" style={{ background: "rgba(255,255,255,0.58)", color: "hsl(16 41% 18%)", border: "1px solid rgba(0,0,0,0.08)" }}>
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs px-2 py-0.5 rounded-sm" style={{ background: "rgba(255,255,255,0.58)", color: "hsl(16 41% 38%)" }}>
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            <p className="text-xs font-medium" style={{ fontFamily: "'Caveat', cursive", color: project.accent, fontSize: "0.9rem" }}>
              Open case study →
            </p>
          </TornPaperCard>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative z-10 pt-20 min-h-screen">
      {/* Header */}
      <LayeredSectionContainer tone="hsl(40 31% 89%)" className="pt-4 pb-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <StickyNote tone="#FFF4B8" rotate={-4} className="mb-3 inline-block">
            Project scrapbook
          </StickyNote>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            My Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-lg mx-auto"
            style={{ color: "hsl(16 41% 30%)", fontFamily: "'Inter', sans-serif" }}
          >
            {projects.length} projects · AI/ML pipelines, multi-agent systems, full-stack apps
          </motion.p>
        </div>
      </LayeredSectionContainer>

      <TornPaperDivider flip color="hsl(40 31% 89%)" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              data-testid={`filter-${cat.toLowerCase().replace("/", "-")}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 rounded-sm text-sm font-medium transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: activeCategory === cat ? "hsl(21 42% 52%)" : "hsl(40 50% 93%)",
                color: activeCategory === cat ? "#fff" : "hsl(16 41% 22%)",
                border: activeCategory === cat ? "1px solid hsl(21 42% 44%)" : "1px solid hsl(33 22% 68%)",
                boxShadow: activeCategory === cat ? "3px 3px 0 hsl(21 42% 36%)" : "2px 2px 0 rgba(0,0,0,0.06)",
              }}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <div key={project.id} style={{ breakInside: "avoid" }} className={i % 2 === 0 ? "mb-5" : "mb-7 md:translate-y-3"}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 40%)", fontSize: "1.3rem" }}>
              No projects in this category yet
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
