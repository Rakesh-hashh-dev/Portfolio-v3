"use client";

import { Home, FolderGit2, FileText, MessageSquare, Briefcase, Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function DockNav() {
  const mainDockItems = [
    { icon: Home, label: "Home" },
    { icon: FolderGit2, label: "Projects" },
    { icon: FileText, label: "Resume" },
    { icon: MessageSquare, label: "Talk" },
  ];

  const socialItems = [
    { icon: Briefcase, label: "LinkedIn" },
    { icon: Code2, label: "GitHub" },
    { icon: Mail, label: "Email" },
  ];

  return (
    <>
      {/* Bottom Main Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card rounded-full px-6 py-3 flex items-center gap-6">
          {mainDockItems.map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-2 text-white/60 hover:text-white hover:text-gradient transition-colors group relative"
            >
              <item.icon size={20} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white bg-surface px-2 py-1 rounded-md border border-white/10">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Side Social Dock */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {socialItems.map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.2, x: -5 }}
            className="p-3 glass-card rounded-full text-white/60 hover:text-white transition-colors"
          >
            <item.icon size={18} />
          </motion.button>
        ))}
      </div>
    </>
  );
}
