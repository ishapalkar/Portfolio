import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { LayeredSectionContainer, TornPaperCard, StickyNote } from "@/components/ScrapbookLayout";

const skillGroups = [
  {
    label: "Languages",
    color: "#6B8F6E",
    bg: "#E8F0E8",
    icon: "🐍",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++"],
  },
  {
    label: "AI / ML",
    color: "#C17B5A",
    bg: "#F0E4DC",
    icon: "🤖",
    skills: ["PyTorch", "TensorFlow", "LangChain", "HuggingFace", "RAG", "LLMs", "Gemini AI", "LLaMA 3.3", "NLP", "FAISS", "Prompt Engineering", "Multimodal AI"],
  },
  {
    label: "Web & Backend",
    color: "#8B9E6D",
    bg: "#EBF0E4",
    icon: "🌐",
    skills: ["React", "Django", "FastAPI", "Laravel"],
  },
  {
    label: "Databases",
    color: "#A67C5B",
    bg: "#EDE4D8",
    icon: "🗄",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
];

function SkillTag({ label, color }: { label: string; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.1 : 1, y: hovered ? -4 : 0, rotate: hovered ? -2 : 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 14 }}
      className="inline-block px-3 py-1.5 rounded-sm text-sm font-medium cursor-default"
      style={{
        background: `${color}16`,
        border: `1.5px solid ${color}40`,
        color: "hsl(16 41% 14%)",
        boxShadow: hovered ? `2px 3px 0 ${color}50` : `1px 2px 0 ${color}28`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <LayeredSectionContainer id="skills" data-testid="skills-section" tone="hsl(82 20% 91%)">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center gap-4"
      >
        <span
          className="inline-block px-5 py-2 text-3xl font-bold -rotate-1"
          style={{
            fontFamily: "'Caveat', cursive",
            background: "hsl(82 17% 52% / 0.15)",
            border: "1px solid hsl(82 17% 52% / 0.35)",
            color: "hsl(16 41% 13%)",
            boxShadow: "2px 2px 0 hsl(82 17% 52% / 0.2)",
          }}
        >
          My Toolkit
        </span>
        <div className="flex-1 border-b border-dashed" style={{ borderColor: "hsl(82 17% 52% / 0.3)" }} />
        <Link href="/skills">
          <span
            className="text-sm font-medium cursor-pointer hover:underline"
            style={{ fontFamily: "'Caveat', cursive", color: "hsl(82 17% 38%)", fontSize: "1rem" }}
          >
            Full Skills →
          </span>
        </Link>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <TornPaperCard
            key={group.label}
            tone={group.bg}
            rotate={gi % 2 === 0 ? -0.8 : 0.6}
            className="p-5 sm:p-6"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.08, duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{group.icon}</span>
              <h3
                className="text-sm font-bold uppercase tracking-widest"
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
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 + si * 0.035, duration: 0.25 }}
                >
                  <SkillTag label={skill} color={group.color} />
                </motion.div>
              ))}
            </div>
            </motion.div>
          </TornPaperCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <StickyNote tone="#FFF4B8" rotate={-3} className="text-[1.05rem]">
          Always learning · Always building
        </StickyNote>
      </motion.div>
    </LayeredSectionContainer>
  );
}
