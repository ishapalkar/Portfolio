import { Link } from "wouter";
import { motion } from "framer-motion";
import { TapeElement, StickyNote } from "@/components/ScrapbookLayout";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-4 sm:px-6 py-8 relative"
      style={{ borderTop: "1px dashed hsl(33 22% 70% / 0.45)" }}
    >
      <div className="max-w-5xl mx-auto relative">
        <TapeElement className="-top-4 left-20" rotate={-5} width={88} />
        <TapeElement className="-top-4 right-20" rotate={6} color="hsl(120 28% 79% / 0.65)" width={72} />
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <p className="font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}>
              Isha<span style={{ color: "hsl(123 14% 49%)" }}>.</span>
            </p>
            <p className="text-sm mt-1" style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 38%)", fontSize: "1rem" }}>
              AI Engineer · Full Stack Developer · Mumbai
            </p>
          </div>

          <StickyNote tone="#E8DCC8" rotate={2} className="text-[0.95rem]">
            Crafted with recycled paper energy
          </StickyNote>
        </div>

        <div style={{ borderTop: "1px dashed hsl(33 22% 72% / 0.4)", marginBottom: 18 }} />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="text-sm font-medium cursor-pointer hover:underline transition-opacity" style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 30%)" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { label: "GitHub", href: "https://github.com/ishapalkar" },
              { label: "LinkedIn", href: "https://linkedin.com/in/isha-palkar" },
              { label: "Email", href: "mailto:ishapalkar65@gmail.com" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline" style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 30%)" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm mt-4" style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 40%)", fontSize: "1.05rem" }}>
          Crafted with ☕ + code · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
