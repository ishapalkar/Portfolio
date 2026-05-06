import { motion } from "framer-motion";
import { Link } from "wouter";
import { WashiTape, StickyNote, Pin, ScrapbookCornerTape } from "@/components/ScrapbookDecorations";
import { LayeredSectionContainer, TornPaperCard, ScrapbookImageFrame } from "@/components/ScrapbookLayout";

const ABOUT_PORTRAIT_SRC = "/isha_about_me.png";

const timelineItems = [
  {
    year: "2020",
    label: "School",
    title: "Navodaya English High School",
    note: "SSC — 84.20%",
    color: "#E8DCC8",
    accent: "#A67C5B",
    icon: "🏫",
  },
  {
    year: "2021–22",
    label: "Junior College",
    title: "Wamanrao Muranjan Junior College",
    note: "HSC 82.67% · MHT-CET 98.32 percentile",
    color: "#D4E8D0",
    accent: "#4A7C4E",
    icon: "📖",
  },
  {
    year: "2023→",
    label: "Engineering",
    title: "VESIT Mumbai",
    note: "B.E. Computer Engineering · CGPA 9.66",
    color: "#C8D5B9",
    accent: "#3A6B40",
    icon: "🎓",
  },
  {
    year: "Mar–Jun 2025",
    label: "Internship",
    title: "Muskurate Raho NGO",
    note: "Full Stack · Laravel + MySQL",
    color: "#EDE4D4",
    accent: "#C17B5A",
    icon: "🤝",
  },
  {
    year: "May–Jul 2025",
    label: "Internship",
    title: "VESIT Summer Internship",
    note: "Full Stack · Django + NLP",
    color: "#D4C4A8",
    accent: "#8B6914",
    icon: "💻",
  },
];

const achievements = [
  { label: "Winner", event: "WWT All India Women Hackathon", year: "2024", color: "#6B8F6E" },
  { label: "Runner-up", event: "Google Developer Group TechSprint, VESIT", year: "2026", color: "#C17B5A" },
  { label: "Runner-up", event: "Genesis by Quest-IT VESIT", year: "2026", color: "#8B9E6D" },
  { label: "Semi-finalist", event: "EY Techathon", year: "2026", color: "#A67C5B" },
  { label: "Participant", event: "ETHGlobal Delhi", year: "2025", color: "#6B8F6E" },
  { label: "Participant", event: "ETHMumbai", year: "2026", color: "#8B9E6D" },
];

export default function About() {
  return (
    <LayeredSectionContainer id="about" data-testid="about-section" tone="hsl(123 20% 92%)">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-6 flex items-center gap-4">
        <span className="inline-block px-5 py-2 text-3xl font-bold -rotate-1" style={{ fontFamily: "'Caveat', cursive", background: "hsl(123 14% 49% / 0.15)", border: "1px solid hsl(123 14% 49% / 0.3)", color: "hsl(16 41% 13%)", boxShadow: "2px 2px 0 hsl(123 14% 49% / 0.2)" }}>
          About Me
        </span>
        <div className="flex-1 border-b border-dashed" style={{ borderColor: "hsl(123 14% 49% / 0.25)" }} />
        <Link href="/about">
          <span className="text-sm font-medium cursor-pointer hover:underline" style={{ fontFamily: "'Caveat', cursive", color: "hsl(123 14% 40%)", fontSize: "1rem" }}>
            Full Story →
          </span>
        </Link>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <TornPaperCard tone="hsl(40 40% 92%)" rotate={-0.5} className="p-6 sm:p-7 flex flex-col">
          <ScrapbookCornerTape position="tl" />
          <ScrapbookCornerTape position="tr" />
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 flex justify-center">
            <ScrapbookImageFrame src={ABOUT_PORTRAIT_SRC} alt="Isha Palkar portrait" width={200} height={250} rotation={-2} />
          </motion.div>
          
          <p className="text-lg leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 18%)", fontStyle: "italic" }}>
            "I'm a 3rd-year Computer Engineering student at VESIT Mumbai, obsessed with building AI systems that solve real problems. From RAG pipelines and multi-agent platforms to full-stack apps — I love the entire stack."
          </p>
          <p className="mt-3 text-sm" style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 40%)", fontSize: "1rem" }}>
            — Isha Palkar
          </p>
        </TornPaperCard>

        <TornPaperCard tone="hsl(40 50% 95%)" rotate={1} className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start gap-3">
            <StickyNote tone="#FFF4B8" rotate={-5}>My Journey</StickyNote>
            <StickyNote tone="#D4E8D0" rotate={4}>Awards + internships</StickyNote>
          </div>
          <div className="mt-5 space-y-3">
            {timelineItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.45 }} className="flex gap-4 items-start">
                <div className="relative z-10 shrink-0 w-14 text-center pt-1">
                  <span className="text-xs font-bold block" style={{ fontFamily: "'Caveat', cursive", color: item.accent, fontSize: "0.85rem" }}>
                    {item.year}
                  </span>
                  <span className="inline-block w-3 h-3 rounded-full mt-1 border-2 border-white" style={{ background: item.accent, boxShadow: "0 0 0 2px " + item.accent + "44" }} />
                </div>
                <motion.div whileHover={{ y: -3, rotate: 0 }} className="flex-1 rounded-sm p-4 paper-edge relative" style={{ background: item.color, transform: i % 2 === 0 ? "rotate(-0.8deg)" : "rotate(0.6deg)", boxShadow: "3px 3px 0 rgba(0,0,0,0.07)" }}>
                  <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: item.accent, fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}>
                    {item.label}
                  </span>
                  <p className="font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}>
                    {item.icon} {item.title}
                  </p>
                  <p className="text-sm" style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 30%)", fontSize: "1rem" }}>
                    {item.note}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TornPaperCard>
      </div>

      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 mt-8" style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 40%)", letterSpacing: "0.15em" }}>
        Hackathons & Awards
      </h3>
      <div className="flex flex-wrap gap-3">
        {achievements.map((ach, i) => (
          <motion.div key={ach.event} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.35 }} whileHover={{ scale: 1.04, y: -2 }} className="px-4 py-2.5 rounded-sm cursor-default paper-edge" style={{ background: `${ach.color}20`, border: `1.5px solid ${ach.color}50`, boxShadow: `2px 2px 0 ${ach.color}30` }}>
            <span className="block text-xs font-bold uppercase tracking-wider" style={{ color: ach.color }}>
              {ach.label}
            </span>
            <span className="block text-sm mt-0.5" style={{ color: "hsl(16 41% 18%)" }}>{ach.event}</span>
            <span className="block text-xs mt-0.5" style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 40%)" }}>
              {ach.year}
            </span>
          </motion.div>
        ))}
      </div>
    </LayeredSectionContainer>
  );
}
