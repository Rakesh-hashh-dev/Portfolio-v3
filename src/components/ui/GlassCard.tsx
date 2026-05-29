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
      className={`glass-card rounded-lg p-6 ${glowOnHover ? "hover:neon-glow transition-all duration-300 hover:-translate-y-1" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
