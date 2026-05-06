import { motion } from "framer-motion";

interface WashiTapeProps {
  color?: string;
  width?: number;
  rotation?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  opacity?: number;
}

export function WashiTape({ color = "hsl(40 80% 78% / 0.65)", width = 56, rotation = 0, top, left, right, opacity = 1 }: WashiTapeProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        width,
        height: 18,
        background: color,
        transform: `rotate(${rotation}deg)`,
        opacity,
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    />
  );
}

interface StickyNoteProps {
  text: string;
  color?: string;
  rotation?: number;
  className?: string;
}

export function StickyNote({ text, color = "#FFF9C4", rotation = -2, className = "" }: StickyNoteProps) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
      className={`inline-block px-4 py-3 rounded-sm shadow-md ${className}`}
      style={{
        background: color,
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Caveat', cursive",
        fontSize: "0.95rem",
        color: "hsl(16 41% 20%)",
        boxShadow: "2px 3px 8px rgba(0,0,0,0.12), inset 0 -4px 0 rgba(0,0,0,0.06)",
        cursor: "default",
        userSelect: "none",
      }}
    >
      {text}
    </motion.div>
  );
}

interface PinProps {
  color?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
}

export function Pin({ color = "#C17B5A", top, left, right }: PinProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute z-20 pointer-events-none"
      style={{ top, left, right }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 2px 4px rgba(0,0,0,0.25), 0 0 0 2px rgba(255,255,255,0.6)`,
        }}
      />
    </div>
  );
}

interface FloatingLeafProps {
  className?: string;
}

export function FloatingLeaf({ className = "" }: FloatingLeafProps) {
  return (
    <motion.div
      animate={{ rotate: [0, 8, -4, 0], y: [0, -6, 3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ fontSize: "1.6rem", opacity: 0.5 }}
    >
      🍃
    </motion.div>
  );
}

export function FloatingFlower({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 0.97, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ fontSize: "1.4rem", opacity: 0.45 }}
    >
      🌸
    </motion.div>
  );
}

export function ScrapbookCornerTape({ position = "tl" }: { position?: "tl" | "tr" | "bl" | "br" }) {
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: -8, left: -4, rotate: "-12deg" },
    tr: { top: -8, right: -4, rotate: "12deg" },
    bl: { bottom: -8, left: -4, rotate: "12deg" },
    br: { bottom: -8, right: -4, rotate: "-12deg" },
  };
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        ...styles[position],
        width: 36,
        height: 16,
        background: "hsl(40 80% 80% / 0.65)",
        borderRadius: 2,
        position: "absolute",
      }}
    />
  );
}
