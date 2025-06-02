'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const eventsMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (eventsMenuRef.current && !eventsMenuRef.current.contains(event.target)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuAnimation = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 z-50 w-full text-white backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border-b border-cyan-400/30 shadow-lg'
          : 'bg-gradient-to-r from-blue-950/50 to-indigo-950/50 navbar-glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Feedbox Logo + Nav Links */}
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="Feedbox Logo" width={120} height={40} />

          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className="hover:text-cyan-400 font-medium transition transform hover:scale-110 hover:drop-shadow-[0_0_10px_cyan]"
            >
              Home
            </Link>

            <Link
              href="/community"
              className="hover:text-cyan-400 font-medium transition transform hover:scale-110 hover:drop-shadow-[0_0_10px_cyan]"
            >
              Community
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
              ref={eventsMenuRef}
            >
              <button className="hover:text-cyan-400 transition font-medium focus:outline-none">
                Events ▼
              </button>
              <AnimatePresence>
                {eventsOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuAnimation}
                    className="absolute mt-2 w-44 bg-blue-900/90 backdrop-blur-md shadow-lg rounded p-2 z-60"
                  >
                    <Link href="#" className="block px-4 py-2 hover:bg-cyan-600 rounded transition">
                      Upcoming
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-cyan-600 rounded transition">
                      Past
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blogs"
              className="hover:text-cyan-400 font-medium transition transform hover:scale-110 hover:drop-shadow-[0_0_10px_cyan]"
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* RIGHT: Sign In + Get Started + College Logo */}
        <motion.div className="flex items-center gap-4" variants={containerVariants}>
          <motion.button
            variants={fadeUp}
            className="text-white border border-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 px-5 py-2 rounded transition duration-300"
          >
            Sign In
          </motion.button>

          <motion.button
            variants={fadeUp}
            className="button-neon px-6 py-2 cursor-pointer"
          >
            Get Started →
          </motion.button>

          <Image src="/clglogo.png" alt="College Logo" width={130} height={130} className="ml-2" />
        </motion.div>
      </div>
    </motion.nav>
  );
}
