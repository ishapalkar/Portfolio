import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          data-testid="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl"
        >
          <div
            className="relative flex items-center justify-between px-6 py-3 rounded-sm"
            style={{
              background: "hsl(40 50% 95% / 0.94)",
              backdropFilter: "blur(12px)",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.10)",
              border: "1px solid hsl(33 22% 70% / 0.5)",
            }}
          >
            {/* Washi tape corners */}
            <span className="absolute -top-2 left-8 w-10 h-4 opacity-55 -rotate-2 rounded-sm" style={{ background: "hsl(40 70% 76% / 0.75)" }} />
            <span className="absolute -top-2 right-8 w-10 h-4 opacity-55 rotate-2 rounded-sm" style={{ background: "hsl(120 25% 74% / 0.7)" }} />

            <Link href="/" data-testid="nav-logo">
              <span
                className="font-bold text-lg tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
              >
                Isha<span style={{ color: "hsl(123 14% 49%)" }}>.</span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-1 items-center">
              {navLinks.map((link) => {
                const active = location === link.href;
                return (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span
                        data-testid={`nav-link-${link.label.toLowerCase()}`}
                        className="relative px-3 py-1.5 text-sm font-medium rounded-sm cursor-pointer transition-all inline-block"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: active ? "hsl(123 14% 36%)" : "hsl(16 41% 22%)",
                          background: active ? "hsl(123 14% 49% / 0.12)" : "transparent",
                        }}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                            style={{ background: "hsl(123 14% 49%)" }}
                          />
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile hamburger */}
            <button
              data-testid="nav-menu-toggle"
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "hsl(16 41% 20%)" }} />
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: "hsl(16 41% 20%)" }} />
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "hsl(16 41% 20%)" }} />
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-2 rounded-sm px-6 py-4 flex flex-col gap-1"
                style={{
                  background: "hsl(40 50% 95% / 0.97)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
                  border: "1px solid hsl(33 22% 70% / 0.5)",
                }}
              >
                {navLinks.map((link) => {
                  const active = location === link.href;
                  return (
                    <Link href={link.href} key={link.label}>
                      <span
                        data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                        className="block text-base font-medium py-2 px-2 rounded-sm cursor-pointer"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: active ? "hsl(123 14% 36%)" : "hsl(16 41% 20%)",
                          background: active ? "hsl(123 14% 49% / 0.1)" : "transparent",
                        }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
