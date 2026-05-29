"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default function Navigation() {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Expertise", href: "#expertise" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between glass-card border-b-0 border-x-0 border-t-0 bg-transparent">
      <div className="flex items-center gap-2">
        {/* Placeholder for Logo */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold neon-glow">
          RK
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div>
        <MagneticButton className="px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors neon-glow">
          Hire Me
        </MagneticButton>
      </div>
    </nav>
  );
}
