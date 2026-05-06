import { useState } from "react";
import { motion } from "framer-motion";
import { ScrapbookCornerTape, FloatingLeaf, FloatingFlower } from "@/components/ScrapbookDecorations";
import TornPaperDivider from "@/components/TornPaperDivider";

const socialLinks = [
  {
    label: "GitHub",
    handle: "@ishapalkar",
    href: "https://github.com/ishapalkar",
    color: "#6B8F6E",
    bg: "#E8F0E8",
    desc: "Check out my code and projects",
    icon: "⌨",
  },
  {
    label: "LinkedIn",
    handle: "isha-palkar",
    href: "https://linkedin.com/in/isha-palkar",
    color: "#7B8FC1",
    bg: "#E8EAF4",
    desc: "Let's connect professionally",
    icon: "💼",
  },
  {
    label: "Email",
    handle: "ishapalkar65@gmail.com",
    href: "mailto:ishapalkar65@gmail.com",
    color: "#C17B5A",
    bg: "#F0E4DC",
    desc: "Fastest way to reach me",
    icon: "✉",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase = {
    background: "rgba(255,255,255,0.42)",
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

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = "hsl(123 14% 49%)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = "hsl(33 22% 62%)";
  };

  return (
    <main className="relative z-10 pt-24 min-h-screen">
      {/* Header */}
      <div
        className="w-full px-6 py-16 relative overflow-hidden"
        style={{ background: "hsl(40 50% 91%)" }}
      >
        <FloatingLeaf className="absolute top-8 left-12" />
        <FloatingFlower className="absolute bottom-8 right-16" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-md mx-auto"
            style={{ color: "hsl(16 41% 30%)", fontFamily: "'Inter', sans-serif" }}
          >
            Open to collaborations, internships, research, and interesting conversations.
          </motion.p>
        </div>
      </div>

      <TornPaperDivider flip color="hsl(40 50% 91%)" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left — Social links */}
          <div className="md:col-span-2 space-y-4">
            <h2
              className="text-sm font-bold uppercase tracking-widest mb-6"
              style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 40%)", letterSpacing: "0.15em" }}
            >
              Find me on
            </h2>
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-testid={`social-page-${link.label.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4, y: -3 }}
                className="flex items-start gap-4 p-4 rounded-sm paper-edge cursor-pointer block"
                style={{
                  background: link.bg,
                  boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
                  transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                  textDecoration: "none",
                }}
              >
                <span className="text-2xl mt-0.5">{link.icon}</span>
                <div>
                  <p className="font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(16 41% 13%)" }}>
                    {link.label}
                  </p>
                  <p
                    className="text-xs mt-0.5 break-all"
                    style={{ fontFamily: "'Caveat', cursive", color: link.color, fontSize: "0.88rem" }}
                  >
                    {link.handle}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "hsl(16 41% 35%)" }}>
                    {link.desc}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-sm p-4 paper-edge"
              style={{
                background: "#D4E8D0",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.07)",
                transform: "rotate(-0.8deg)",
              }}
            >
              <ScrapbookCornerTape position="tl" />
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#3A6B40", boxShadow: "0 0 0 3px #3A6B4040" }}
                />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3A6B40", fontFamily: "'Inter', sans-serif" }}>
                  Available
                </span>
              </div>
              <p
                className="text-sm"
                style={{ fontFamily: "'Caveat', cursive", color: "hsl(16 41% 25%)", fontSize: "1rem" }}
              >
                Open to internships, collaborations, and research opportunities!
              </p>
            </motion.div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">
            <h2
              className="text-sm font-bold uppercase tracking-widest mb-6"
              style={{ fontFamily: "'Inter', sans-serif", color: "hsl(16 41% 40%)", letterSpacing: "0.15em" }}
            >
              Send a message
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm p-8"
              style={{
                background: "hsl(52 35% 94%)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.08)",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, hsl(33 22% 75% / 0.28) 31px, hsl(33 22% 75% / 0.28) 32px)",
              }}
            >
              <ScrapbookCornerTape position="tl" />
              <ScrapbookCornerTape position="tr" />
              {/* Tape marks */}
              <span className="absolute -top-2.5 left-1/3 w-14 h-5 opacity-55 -rotate-2 rounded-sm" style={{ background: "hsl(40 80% 78% / 0.7)" }} />
              <span className="absolute -top-2.5 right-1/4 w-10 h-5 opacity-45 rotate-1 rounded-sm" style={{ background: "hsl(120 28% 76% / 0.6)" }} />

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <p className="text-5xl mb-4">✉</p>
                  <p style={{ fontFamily: "'Caveat', cursive", color: "hsl(123 14% 34%)", fontSize: "1.8rem" }}>
                    Message sent!
                  </p>
                  <p className="text-sm mt-2" style={{ color: "hsl(16 41% 38%)" }}>
                    I'll get back to you soon — usually within a day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                        Name
                      </label>
                      <input
                        data-testid="contact-input-name"
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={inputBase}
                        onFocus={onFocus} onBlur={onBlur}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                        Email
                      </label>
                      <input
                        data-testid="contact-input-email"
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={inputBase}
                        onFocus={onFocus} onBlur={onBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                      Subject
                    </label>
                    <select
                      data-testid="contact-input-subject"
                      name="subject" value={form.subject} onChange={handleChange} required
                      style={{ ...inputBase, cursor: "pointer" }}
                      onFocus={onFocus} onBlur={onBlur}
                    >
                      <option value="">Select a topic...</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Project Feedback">Project Feedback</option>
                      <option value="Research">Research</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(16 41% 45%)", fontFamily: "'Inter', sans-serif" }}>
                      Message
                    </label>
                    <textarea
                      data-testid="contact-input-message"
                      name="message" value={form.message} onChange={handleChange} required
                      placeholder="What would you like to talk about?"
                      rows={5}
                      style={{ ...inputBase, resize: "none", lineHeight: "2" }}
                      onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm" style={{ color: "hsl(0 70% 45%)" }}>
                      Something went wrong — email me at ishapalkar65@gmail.com
                    </p>
                  )}
                  <motion.button
                    data-testid="contact-btn-send"
                    type="submit" disabled={status === "sending"}
                    whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-sm font-semibold text-base disabled:opacity-60"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.25rem",
                      background: "hsl(123 14% 47%)",
                      color: "hsl(40 50% 97%)",
                      boxShadow: "3px 3px 0 hsl(123 14% 28%)",
                      border: "1px solid hsl(123 14% 38%)",
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message ✉"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
