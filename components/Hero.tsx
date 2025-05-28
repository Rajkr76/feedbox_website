'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HeroSection() {
  return (
    <section className="h-screen w-full text-white flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 pt-24 md:pt-32">
      {/* Neon pulse circle */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse-slow"></div>

      <motion.div
        className="z-10 max-w-4xl px-6 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          {/* "Feedbox" remains at the main H1 size (text-5xl / md:text-7xl) */}
          <span className="drop-shadow-[0_0_12px_rgb(6_182_212)] drop-shadow-[0_0_24px_rgb(6_182_212)] text-white">Feedbox</span>{' '}
          <br />{' '}
          {/* CHANGED: Added text-4xl (default) and md:text-6xl (for larger screens) to make it slightly smaller */}
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(6_182_212)] text-4xl md:text-6xl">
            College Club
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
        >
          Unlocking potential, fostering innovation, and paving the way for a brighter tomorrow.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <button className="button-neon px-6 py-3 cursor-pointer">
            GET STARTED →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
