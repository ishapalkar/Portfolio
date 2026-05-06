import { useState } from "react";
import { motion } from "framer-motion";
import TornPaperDivider from "@/components/TornPaperDivider";
import { ScrapbookCornerTape } from "@/components/ScrapbookDecorations";

const skillGroups = [
  {
    label: "Languages",
    color: "#6B8F6E",
    bg: "#E8F0E8",
    icon: "🐍",
    description: "The foundation. I'm most fluent in Python and JavaScript.",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 72 },
      { name: "C++", level: 68 },
      { name: "C", level: 65 },
    ],
  },
  {
    label: "AI / ML & GenAI",
    color: "#C17B5A",
    bg: "#F0E4DC",
    icon: "🤖",
    description: "Where I spend most of my time — RAG, agents, multimodal AI.",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "RAG Systems", level: 92 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Gemini AI", level: 86 },
      { name: "PyTorch", level: 78 },
      { name: "TensorFlow", level: 74 },
      { name: "HuggingFace", level: 82 },
      { name: "FAISS", level: 80 },
      { name: "LangGraph", level: 85 },
      { name: "LLaMA 3.3", level: 80 },
      { name: "NLP", level: 84 },
      { name: "Multimodal AI", level: 82 },
    ],
  },
  {
    label: "Web & Backend",
    color: "#8B9E6D",
    bg: "#EBF0E4",
    icon: "🌐",
    description: "Building real products end-to-end.",
    skills: [
      { name: "React", level: 88 },
      { name: "FastAPI", level: 86 },
      { name: "Django", level: 82 },
      { name: "Laravel", level: 75 },
    ],
  },
  {
    label: "Databases",
    color: "#A67C5B",
    bg: "#EDE4D8",
    icon: "🗄",
    description: "Designing schemas that scale.",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 80 },
      { name: "MongoDB", level: 76 },
      { name: "Redis", level: 74 },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#7B8FC1",
    bg: "#E8EAF4",
    icon: "☁",
    description: "Deploying and scaling systems on the cloud.",
    skills: [
      { name: "Google Cloud", level: 82 },
      { name: "Vertex AI", level: 84 },
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Render", level: 74 },
    ],
  },
  {
    label: "ML Libraries",
    color: "#9E8B6D",
    bg: "#EEE8DF",
    icon: "📊",
    description: "Data processing and classical ML.",
    skills: [
      { name: "NumPy", level: 86 },
      { name: "Pandas", level: 84 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Matplotlib", level: 78 },
      { name: "Sentence Transformers", level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium" style={{ color: "hsl(16 41% 16%)", fontFamily: "'Inter', sans-serif" }}>
          {name}
        </span>
        <span className="text-xs" style={{ color: "hsl(16 41% 40%)", fontFamily: "'Caveat', cursive", fontSize: "0.88rem" }}>
          {level}%
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: `${color}20` }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.1, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

function SkillTag({ name, color }: { name: string; color: string }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      animate={{ scale: hov ? 1.1 : 1, y: hov ? -4 : 0, rotate: hov ? -2 : 0 }}
      transition={{ type: "spring", stiffness: 360, damping: 14 }}
      className="inline-block px-3 py-1.5 rounded-sm text-sm font-medium cursor-default"
      style={{
        background: `${color}18`,
        border: `1.5px solid ${color}42`,
        color: "hsl(16 41% 14%)",
        boxShadow: hov ? `2px 3px 0 ${color}50` : `1px 2px 0 ${color}28`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {name}
    </motion.span>
  );
}

export default function SkillsPage() {
  const [view, setView] = useState<"bars" | "tags">("tags");

  return (
    <main className="relative z-10 pt-24 min-h-screen">
      {/* Header */}
      <div
        className="w-full px-6 py-16 overflow-hidden"
        style={{ background: "hsl(82 17% 89%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            My Toolkit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-md mx-auto"
            style={{ color: "hsl(16 41% 30%)", fontFamily: "'Inter', sans-serif" }}
          >
            Languages, frameworks, AI/ML tools, and everything in between
          </motion.p>
          {/* View toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex gap-2 justify-center mt-8"
          >
            {(["tags", "bars"] as const).map((v) => (
              <button
                key={v}
                data-testid={`view-toggle-${v}`}
                onClick={() => setView(v)}
                className="px-4 py-1.5 rounded-sm text-sm font-medium capitalize"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: view === v ? "hsl(82 17% 42%)" : "hsl(82 17% 80%)",
                  color: view === v ? "#fff" : "hsl(16 41% 22%)",
                  border: view === v ? "1px solid hsl(82 17% 35%)" : "1px solid hsl(82 17% 72%)",
                  boxShadow: view === v ? "2px 2px 0 hsl(82 17% 30%)" : "1px 1px 0 rgba(0,0,0,0.05)",
                }}
              >
                {v === "tags" ? "Sticker View" : "Progress View"}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <TornPaperDivider flip color="hsl(82 17% 89%)" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.07, duration: 0.5 }}
              className="rounded-sm p-6 paper-edge relative"
              style={{
                background: group.bg,
                boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
                transform: gi % 2 === 0 ? "rotate(-0.4deg)" : "rotate(0.4deg)",
              }}
            >
              <ScrapbookCornerTape position={gi % 2 === 0 ? "tl" : "tr"} />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{group.icon}</span>
                <h3
                  className="font-bold text-sm uppercase tracking-widest"
                  style={{ color: group.color, fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                >
                  {group.label}
                </h3>
                <span
                  className="ml-auto text-xs px-1.5 py-0.5 rounded-sm"
                  style={{ background: `${group.color}18`, color: group.color, fontFamily: "'Inter', sans-serif" }}
                >
                  {group.skills.length}
                </span>
              </div>
              <p
                className="text-xs mb-4"
                style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 35%)", fontSize: "0.9rem" }}
              >
                {group.description}
              </p>

              {view === "tags" ? (
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, si) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.04 + si * 0.03 }}
                    >
                      <SkillTag name={s.name} color={group.color} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {group.skills.map((s, si) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={group.color}
                      delay={gi * 0.04 + si * 0.05}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 35%)", fontSize: "1.25rem" }}>
            Always learning · Always building 🌱
          </p>
        </motion.div>
      </div>
    </main>
  );
}
