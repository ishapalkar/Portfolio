import { useState } from "react";
import { motion } from "framer-motion";
import { ScrapbookCornerTape } from "@/components/ScrapbookDecorations";
import { LayeredSectionContainer, TornPaperCard, StickyNote } from "@/components/ScrapbookLayout";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (serviceId && templateId && publicKey) {
        const emailjs = await import("emailjs-com");
        await emailjs.send(serviceId, templateId, form, publicKey);
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.4)",
    border: "none",
    borderBottom: "1.5px solid hsl(33 22% 62%)",
    borderRadius: 0,
    padding: "10px 4px",
    width: "100%",
    fontFamily: "'Caveat', cursive",
    fontSize: "1.1rem",
    color: "hsl(16 41% 13%)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/ishapalkar", color: "#6B8F6E" },
    { label: "LinkedIn", href: "https://linkedin.com/in/isha-palkar", color: "#8B9E6D" },
    { label: "Email", href: "mailto:ishapalkar65@gmail.com", color: "#C17B5A" },
  ];

  return (
    <LayeredSectionContainer id="contact" data-testid="contact-section" tone="hsl(52 35% 94%)">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <StickyNote tone="#FFF4B8" rotate={1} className="text-[1.35rem]">
          Let’s Connect
        </StickyNote>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] items-start">
        <TornPaperCard tone="hsl(52 35% 94%)" rotate={-0.8} className="p-6 sm:p-8">
          <ScrapbookCornerTape position="tl" />
          <ScrapbookCornerTape position="tr" />

          <span className="absolute -top-2.5 left-1/4 w-16 h-5 opacity-60 -rotate-2 rounded-sm" style={{ background: "hsl(40 80% 78% / 0.7)" }} />
          <span className="absolute -top-2.5 right-1/4 w-12 h-5 opacity-50 rotate-1 rounded-sm" style={{ background: "hsl(120 30% 75% / 0.6)" }} />

          {status === "sent" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <p style={{ fontFamily: "'Caveat', cursive", color: "hsl(123 14% 36%)", fontSize: "2rem" }}>
                Message sent! ✉
              </p>
              <p className="text-sm mt-2" style={{ color: "hsl(16 41% 35%)" }}>I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                  Your Name
                </label>
                <input data-testid="input-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Write your name here..." style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "hsl(123 14% 49%)")} onBlur={(e) => (e.target.style.borderBottomColor = "hsl(33 22% 62%)")} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                  Email
                </label>
                <input data-testid="input-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "hsl(123 14% 49%)")} onBlur={(e) => (e.target.style.borderBottomColor = "hsl(33 22% 62%)")} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                  Message
                </label>
                <textarea data-testid="input-message" name="message" value={form.message} onChange={handleChange} required placeholder="What's on your mind?" rows={4} style={{ ...inputStyle, resize: "none", lineHeight: "2" }} onFocus={(e) => (e.target.style.borderBottomColor = "hsl(123 14% 49%)")} onBlur={(e) => (e.target.style.borderBottomColor = "hsl(33 22% 62%)")} />
              </div>
              {status === "error" && (
                <p className="text-sm" style={{ color: "hsl(0 70% 45%)" }}>
                  Something went wrong. Email me directly at ishapalkar65@gmail.com
                </p>
              )}
              <motion.button data-testid="btn-send" type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full py-3 rounded-sm font-semibold text-base disabled:opacity-60" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", background: "hsl(123 14% 47%)", color: "hsl(40 50% 97%)", boxShadow: "3px 3px 0 hsl(123 14% 30%)", border: "1px solid hsl(123 14% 40%)" }}>
                {status === "sending" ? "Sending..." : "Send Message ✉"}
              </motion.button>
            </form>
          )}
        </TornPaperCard>

        <div className="space-y-4">
          <StickyNote tone="#D4E8D0" rotate={-4} className="block">
            Social scraps and quick links
          </StickyNote>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 justify-start">
            {socialLinks.map((link) => (
              <a key={link.label} data-testid={`social-${link.label.toLowerCase()}`} href={link.href} target="_blank" rel="noreferrer">
                <motion.span whileHover={{ y: -3, boxShadow: `3px 3px 0 ${link.color}50` }} className="inline-block px-5 py-2 rounded-sm text-sm font-medium transition-colors" style={{ fontFamily: "'Inter', sans-serif", background: `${link.color}15`, border: `1.5px solid ${link.color}40`, color: link.color, boxShadow: `2px 2px 0 ${link.color}28` }}>
                  {link.label}
                </motion.span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </LayeredSectionContainer>
  );
}
