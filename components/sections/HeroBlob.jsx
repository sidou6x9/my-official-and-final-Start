"use client";
import { motion } from "framer-motion";

const Blob = ({ position, delay }) => (
  <motion.img
    src="/blob1.gif" // Change to your blob paths
    alt="background blob"
    className={`absolute w-64 h-64 opacity-20 mix-blend-multiply ${position}`}
    animate={{
      scale: 1,
      rotate: [0, 360],
      x: ["-50%", "15%", "-10%", "0%"],
      y: ["20%", "45%", "-10%", "0%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: delay,
    }}
  />
);
const Blob2 = ({ position, delay }) => (
  <motion.img
    src="/blob2.gif" // Change to your blob paths
    alt="background blob"
    className={`absolute w-64 h-64 opacity-20 mix-blend-multiply ${position}`}
    animate={{
      scale: 1,
      rotate: [0, 360],
      x: ["-50%", "15%", "-10%", "0%"],
      y: ["20%", "45%", "-10%", "0%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: delay,
    }}
  />
);

export default function HeroBlob() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <Blob position="top-[10%] left-[10%]" delay={0} />
        <Blob2 position="top-[20%] right-[10%]" delay={2} />
        <Blob position="bottom-[20%] left-[40%]" delay={4} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Welcome to the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Creating innovative solutions for tomorrow's challenges
        </motion.p>
      </div>
    </section>
  );
}
