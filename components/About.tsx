'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <section className="relative pt-16 md:pt-24 pb-24 px-6 text-white backdrop-blur-sm bg-blue-950/20 border-t border-cyan-400/20 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgb(6_182_212)] mb-6"
          variants={fadeUp}
        >
          About Feedbox
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]"
          variants={fadeUp}
        >
          Feedbox is more than just a club — it's a movement. <br className="hidden md:block" />
          We're a community of creators, dreamers, and doers dedicated to turning college into a launchpad for ideas that matter.
        </motion.p>
      </motion.div>
    </section>
  );
}
