import { useState, useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  
  return (
    <motion.div
      className="scrapbook-cursor hidden md:block"
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 100,
      }}
    />
  );
}
