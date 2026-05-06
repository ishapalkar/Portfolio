import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { projects } from "@/data/projects";
import { ScrapbookCornerTape } from "@/components/ScrapbookDecorations";
import TornPaperDivider from "@/components/TornPaperDivider";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <main className="pt-28 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl mb-4">📭</p>
        <h1
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
        >
          Project not found
        </h1>
        <Link href="/projects">
          <span
            className="inline-block mt-2 px-6 py-2 rounded-sm cursor-pointer text-sm font-medium"
            style={{
              background: "hsl(123 14% 47%)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "3px 3px 0 hsl(123 14% 30%)",
            }}
          >
            ← Back to Projects
          </span>
        </Link>
      </main>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2 - relatedProjects.length);
  const suggested = [...relatedProjects, ...otherProjects];

  return (
    <main className="relative z-10 pt-24 min-h-screen">
      {/* Hero */}
      <div
        className="w-full px-6 py-16 relative overflow-hidden"
        style={{ background: project.bg }}
      >
        <ScrapbookCornerTape position="tl" />
        <ScrapbookCornerTape position="tr" />

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/projects">
              <span
                className="inline-flex items-center gap-1 text-sm mb-6 cursor-pointer hover:underline"
                style={{ color: project.accent, fontFamily: "'Inter', sans-serif" }}
              >
                ← All Projects
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span
              className="inline-block text-xs px-3 py-1 rounded-sm mb-4 font-semibold uppercase tracking-wider"
              style={{
                background: `${project.accent}20`,
                color: project.accent,
                border: `1px solid ${project.accent}40`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {project.category}
            </span>
            <p className="text-5xl mb-4">{project.emoji}</p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 10%)" }}
            >
              {project.title}
            </h1>
            <p
              className="text-xl mb-6"
              style={{ fontFamily: "'Caveat', cursive", color: project.accent, fontSize: "1.3rem" }}
            >
              {project.tagline}
            </p>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "hsl(16 41% 22%)", fontFamily: "'Inter', sans-serif" }}
            >
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex gap-3 mt-8"
          >
            <a
              data-testid="detail-github-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <motion.span
                whileHover={{ y: -2, boxShadow: "4px 4px 0 rgba(0,0,0,0.2)" }}
                className="px-6 py-2.5 rounded-sm text-sm font-medium inline-block cursor-pointer"
                style={{
                  background: "hsl(16 41% 13%)",
                  color: "hsl(40 50% 95%)",
                  boxShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                View on GitHub ↗
              </motion.span>
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-block">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="px-6 py-2.5 rounded-sm text-sm font-medium inline-block cursor-pointer"
                  style={{
                    background: project.accent,
                    color: "#fff",
                    boxShadow: `3px 3px 0 ${project.accent}88`,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Live Demo ↗
                </motion.span>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <TornPaperDivider flip color={project.bg} />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-sm p-7 mb-8 paper-edge"
          style={{
            background: "hsl(40 40% 93%)",
            boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
            transform: "rotate(-0.3deg)",
          }}
        >
          <ScrapbookCornerTape position="tl" />
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            About this project
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(16 41% 20%)", lineHeight: "1.75" }}>
            {project.longDescription}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-sm p-7 mb-8 paper-edge"
          style={{
            background: project.bg,
            boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
            transform: "rotate(0.3deg)",
          }}
        >
          <ScrapbookCornerTape position="tr" />
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            Key highlights
          </h2>
          <div className="space-y-3">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 items-start"
              >
                <span
                  className="shrink-0 w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: `${project.accent}25`, color: project.accent }}
                >
                  {i + 1}
                </span>
                <p className="text-sm" style={{ color: "hsl(16 41% 18%)", lineHeight: "1.6" }}>{h}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm p-7 paper-edge mb-8"
          style={{ background: "hsl(40 40% 93%)", boxShadow: "3px 3px 0 rgba(0,0,0,0.07)" }}
        >
          <h2
            className="text-lg font-bold mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            Tech stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="px-3 py-1.5 rounded-sm text-sm font-medium cursor-default"
                style={{
                  background: `${project.accent}16`,
                  border: `1.5px solid ${project.accent}40`,
                  color: "hsl(16 41% 14%)",
                  boxShadow: `1px 2px 0 ${project.accent}28`,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Related projects */}
      {suggested.length > 0 && (
        <>
          <TornPaperDivider color="hsl(40 31% 88%)" />
          <div className="w-full px-6 py-12" style={{ background: "hsl(40 31% 88%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
              >
                More projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {suggested.map((p) => (
                  <Link href={`/projects/${p.id}`} key={p.id}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="cursor-pointer rounded-sm p-5 paper-edge"
                      style={{
                        background: p.bg,
                        boxShadow: "3px 3px 0 rgba(0,0,0,0.08)",
                      }}
                    >
                      <p className="text-2xl mb-2">{p.emoji}</p>
                      <h3 className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}>
                        {p.title}
                      </h3>
                      <p className="text-xs" style={{ color: "hsl(16 41% 30%)", fontFamily: "'Caveat', cursive", fontSize: "0.9rem" }}>
                        {p.tagline}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <TornPaperDivider flip color="hsl(40 31% 88%)" />
        </>
      )}
    </main>
  );
}
