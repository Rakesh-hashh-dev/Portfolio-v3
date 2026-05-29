"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";

export default function Skills() {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Three.js / WebGL", level: 85 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Framer Motion", level: 92 },
  ];

  return (
    <section id="process" className="py-32 relative z-10 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[4, 0, -5]}>
              <octahedronGeometry args={[2, 0]} />
              <meshStandardMaterial color="#9333ea" wireframe />
            </mesh>
          </Float>
          <Float speed={3} rotationIntensity={2} floatIntensity={1}>
            <mesh position={[-4, 2, -2]}>
              <torusGeometry args={[1.5, 0.2, 16, 100]} />
              <meshStandardMaterial color="#22d3ee" wireframe />
            </mesh>
          </Float>
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        </Canvas>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Leveraging modern web technologies to build performant, accessible, and stunning digital experiences.
          </p>
          
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white/40">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 neon-glow rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="h-[400px] hidden lg:block" />
      </div>
    </section>
  );
}
