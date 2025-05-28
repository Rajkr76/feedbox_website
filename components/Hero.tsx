'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HeroSection() {
  return (
    <section className="h-screen w-full text-white flex items-center justify-center relative overflow-hidden pt-24 md:pt-32 pb-10">
      {/* Neon Pulse BG */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse-slow" />
      
      {/* Divider between Hero and About */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[1px] bg-cyan-400/20 blur-sm" />

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
          <span className="drop-shadow-[0_0_12px_rgb(6_182_212)] text-white">
            Feedbox
          </span>
          <br />
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
