import { motion } from "framer-motion";
import type { PropsWithChildren, HTMLAttributes, ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type LayeredSectionContainerProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  tone?: string;
};

export function LayeredSectionContainer({ className, tone = "hsl(40 50% 93%)", children, ...props }: LayeredSectionContainerProps) {
  return (
    <section
      {...props}
      className={cn("relative w-full px-4 sm:px-6", className)}
      style={{
        background: tone,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.52) 0, rgba(255,255,255,0) 28%), radial-gradient(circle at 80% 8%, rgba(255,244,210,0.32) 0, rgba(255,244,210,0) 24%), linear-gradient(180deg, rgba(255,255,255,0.34), rgba(0,0,0,0.03))",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl py-10 sm:py-12">{children}</div>
    </section>
  );
}

type TornPaperCardProps = PropsWithChildren<HTMLMotionProps<"div">> & {
  tone?: string;
  rotate?: number;
};

export function TornPaperCard({ className, tone = "hsl(40 40% 92%)", rotate = 0, children, ...props }: TornPaperCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ y: -5, rotate: rotate > 0 ? rotate + 1 : rotate - 1 }}
      className={cn("paper-edge relative overflow-hidden rounded-sm", className)}
      style={{
        background: tone,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "4px 5px 0 rgba(0,0,0,0.08), 0 20px 45px rgba(0,0,0,0.06)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 48%, rgba(0,0,0,0.02) 100%), radial-gradient(circle at 0 0, rgba(255,255,255,0.45), transparent 38%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

type TapeElementProps = {
  className?: string;
  rotate?: number;
  color?: string;
  width?: string | number;
};

export function TapeElement({ className, rotate = 0, color = "hsl(40 80% 78% / 0.72)", width = 76 }: TapeElementProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("absolute pointer-events-none rounded-sm shadow-sm", className)}
      style={{
        width,
        height: 18,
        background: color,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

type StickyNoteProps = PropsWithChildren<{
  className?: string;
  tone?: string;
  rotate?: number;
}>;

export function StickyNote({ children, className, tone = "#FFF9C4", rotate = -2 }: StickyNoteProps) {
  return (
    <motion.div
      whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
      className={cn("inline-block px-4 py-3 rounded-sm shadow-md", className)}
      style={{
        background: tone,
        transform: `rotate(${rotate}deg)`,
        fontFamily: "'Caveat', cursive",
        color: "hsl(16 41% 20%)",
        boxShadow: "2px 3px 8px rgba(0,0,0,0.12), inset 0 -4px 0 rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </motion.div>
  );
}

type ScrapbookImageFrameProps = PropsWithChildren<HTMLMotionProps<"div">> & {
  src: string;
  alt: string;
  rotate?: number;
};

export function ScrapbookImageFrame({ className, src, alt, rotate = 0, ...props }: ScrapbookImageFrameProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ y: -4, rotate: rotate > 0 ? rotate + 1 : rotate - 1 }}
      className={cn("paper-edge relative overflow-hidden rounded-sm", className)}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: "5px 6px 0 rgba(0,0,0,0.08), 0 24px 50px rgba(0,0,0,0.06)",
      }}
    >
      <TapeElement className="-top-3 left-6" rotate={-6} />
      <TapeElement className="-top-2 right-8" rotate={7} color="hsl(120 30% 78% / 0.72)" width={54} />
      <img src={src} alt={alt} className="block w-full h-full object-contain bg-transparent" />
    </motion.div>
  );
}
