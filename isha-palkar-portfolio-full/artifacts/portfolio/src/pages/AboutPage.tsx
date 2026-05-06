import { motion } from "framer-motion";
import { WashiTape, StickyNote, Pin, ScrapbookCornerTape, FloatingLeaf, FloatingFlower } from "@/components/ScrapbookDecorations";
import TornPaperDivider from "@/components/TornPaperDivider";

const timeline = [
  {
    year: "2020",
    type: "School",
    title: "Navodaya English High School",
    detail: "Completed SSC with 84.20%. Built first programs in school computer lab — fell in love with how code could create things.",
    color: "#E8DCC8",
    accent: "#A67C5B",
    icon: "🏫",
    note: "SSC — 84.20%",
    rotate: "-1deg",
  },
  {
    year: "2021–22",
    type: "Junior College",
    title: "Wamanrao Muranjan Junior College",
    detail: "HSC 82.67%. Scored 98.32 percentile in MHT-CET. Started self-learning web development and Python during this time.",
    color: "#D4E8D0",
    accent: "#4A7C4E",
    icon: "📖",
    note: "MHT-CET: 98.32 percentile",
    rotate: "0.8deg",
  },
  {
    year: "2023",
    type: "Engineering Begins",
    title: "VESIT Mumbai — B.E. Computer Engineering",
    detail: "Started engineering. First semester: deep-dived into DSA, OS, and DBMS. By the second semester, began building AI projects that went beyond the curriculum.",
    color: "#C8D5B9",
    accent: "#3A6B40",
    icon: "🎓",
    note: "CGPA: 9.66 / 10",
    rotate: "-0.5deg",
  },
  {
    year: "2024",
    type: "First Big Win",
    title: "WWT All India Women Hackathon — Winner",
    detail: "Won at a national level hackathon competing against teams from across India. This validated that the projects I was building weren't just practice — they were real.",
    color: "#FFF9C4",
    accent: "#8B7000",
    icon: "🏆",
    note: "National Winner 2024",
    rotate: "1deg",
  },
  {
    year: "Mar–Jun 2025",
    type: "Internship",
    title: "Full Stack Developer @ Muskurate Raho NGO",
    detail: "Built the donation management system and volunteer attendance modules with role-based dashboards using Laravel and MySQL. Shipped code that was actually used by real people for a real cause.",
    color: "#EDE4D4",
    accent: "#C17B5A",
    icon: "🤝",
    note: "Laravel + MySQL",
    rotate: "-0.8deg",
  },
  {
    year: "May–Jul 2025",
    type: "Internship",
    title: "Full Stack Developer @ VESIT Summer Internship",
    detail: "Built an ERP for automated exam management. The highlight: an NLP pipeline that auto-generates question papers from the syllabus using transformer models — a feature faculty actually loved.",
    color: "#D4C4A8",
    accent: "#8B6914",
    icon: "💻",
    note: "Django + NLP + PostgreSQL",
    rotate: "0.6deg",
  },
  {
    year: "2026",
    type: "Momentum",
    title: "Runner-up × 2 + ETH Events",
    detail: "Runner-up at GDG TechSprint and Genesis by Quest-IT. Semi-finalist at EY Techathon. Participated in ETHGlobal Delhi and ETHMumbai, exploring the Web3 ecosystem.",
    color: "#D4E8D0",
    accent: "#3A6B40",
    icon: "⚡",
    note: "Multiple hackathon placements",
    rotate: "-0.4deg",
  },
];

const values = [
  { icon: "🔬", label: "Deep Tech", desc: "Building real AI systems — not just using APIs, but understanding the architecture" },
  { icon: "🌱", label: "Growth Mindset", desc: "Each project teaches me something new. The best learning happens at the edge of what I know" },
  { icon: "🤝", label: "Real Impact", desc: "I want my work to help actual people — from NGOs to patients to job seekers" },
  { icon: "📦", label: "Full Stack", desc: "I care about the entire product, from model to UI to deployment" },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 pt-24">
      {/* Hero banner */}
      <div
        className="relative w-full px-6 py-20 overflow-hidden"
        style={{ background: "hsl(123 14% 90%)" }}
      >
        <FloatingLeaf className="absolute top-8 right-16" />
        <FloatingFlower className="absolute bottom-8 left-12" />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1 text-sm mb-4 rounded-sm -rotate-1"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
                background: "hsl(123 14% 49% / 0.15)",
                border: "1px solid hsl(123 14% 49% / 0.3)",
                color: "hsl(123 14% 34%)",
              }}
            >
              3rd year · VESIT Mumbai · AI/ML + Full Stack
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            My Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "hsl(16 41% 28%)", fontFamily: "'Inter', sans-serif" }}
          >
            From a school computer lab to national hackathon winner — here's how I got here and where I'm going.
          </motion.p>
        </div>
      </div>

      <TornPaperDivider flip color="hsl(123 14% 90%)" />

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2
          className="text-sm font-bold uppercase tracking-widest mb-12 text-center"
          style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 42%)", letterSpacing: "0.18em" }}
        >
          The Journey
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ borderLeft: "2px dashed hsl(33 22% 68% / 0.45)", marginLeft: -1 }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, rotate: "0deg" }}
                    className="flex-1 rounded-sm p-6 paper-edge relative"
                    style={{
                      background: item.color,
                      transform: `rotate(${item.rotate})`,
                      boxShadow: "4px 4px 0 rgba(0,0,0,0.08)",
                    }}
                  >
                    <ScrapbookCornerTape position={isLeft ? "tr" : "tl"} />

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider block"
                          style={{ color: item.accent, fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.type} · {item.year}
                        </span>
                        <h3
                          className="text-lg font-bold mt-1"
                          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
                        >
                          {item.icon} {item.title}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 text-xs px-2 py-1 rounded-sm"
                        style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "0.88rem",
                          background: "rgba(255,255,255,0.5)",
                          color: "hsl(16 41% 30%)",
                        }}
                      >
                        {item.note}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(16 41% 22%)" }}>
                      {item.detail}
                    </p>
                  </motion.div>

                  {/* Center dot for desktop */}
                  <div className="hidden md:flex shrink-0 w-5 items-center justify-center" style={{ marginTop: 24 }}>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white"
                      style={{ background: item.accent, boxShadow: `0 0 0 3px ${item.accent}44` }}
                    />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <TornPaperDivider color="hsl(40 31% 88%)" />

      {/* Values section */}
      <div
        className="w-full px-6 py-16"
        style={{ background: "hsl(40 31% 88%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            What drives me
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-sm p-5 text-center paper-edge cursor-default"
                style={{
                  background: "hsl(40 50% 94%)",
                  boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
                  transform: i % 2 === 0 ? "rotate(-0.8deg)" : "rotate(0.6deg)",
                }}
              >
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
                >
                  {v.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(16 41% 30%)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <TornPaperDivider flip color="hsl(40 31% 88%)" />

      {/* Fun facts */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2
          className="text-2xl font-bold text-center mb-10"
          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
        >
          By the numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "9.66", label: "CGPA" },
            { n: "6+", label: "Projects Built" },
            { n: "5", label: "Hackathon Placements" },
            { n: "2", label: "Internships" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="text-center rounded-sm p-5 paper-edge"
              style={{
                background: ["#C8D5B9", "#E8DCC8", "#D4E8D0", "#EDE4D4"][i],
                boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
              }}
            >
              <p
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
              >
                {stat.n}
              </p>
              <p
                className="text-xs uppercase tracking-wider mt-1"
                style={{ color: "hsl(16 41% 38%)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
