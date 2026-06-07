"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlassCard({ children, className = "", glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl ${
        glowOnHover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
