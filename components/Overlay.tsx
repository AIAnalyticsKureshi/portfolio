"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";

export default function Overlay() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [100, -100]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.85], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col items-center">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-[35vh] w-full px-6 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mix-blend-difference mb-4 text-white">Mohammad Kureshi.</h1>
        <p className="text-lg md:text-2xl font-light tracking-wide text-orange-400 mix-blend-difference max-w-3xl leading-relaxed">
          BI Analyst · Power BI · SQL · Python · End-to-End Data Systems
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-[40vh] w-full px-10 md:px-32 flex flex-col items-start justify-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mix-blend-difference max-w-xl leading-tight text-white mb-2">
          I turn raw data into decisions.
        </h2>
        <p className="text-xl text-orange-400 mix-blend-difference font-light">
          Making data trustworthy first.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-[40vh] w-full px-10 md:px-32 flex flex-col items-end justify-center text-right"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mix-blend-difference max-w-xl leading-tight text-white mb-6">
          Warehouse → ETL → Leadership Dashboards.
        </h2>
      </motion.div>

      {/* Floating Badges */}
      <div className="absolute bottom-10 left-6 md:left-10 pointer-events-auto">
        <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md border border-orange-500/30 px-5 py-3 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </div>
          <span className="text-sm font-medium text-white/95">Open to Work · Berlin &amp; Hamburg · Available Immediately</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 pointer-events-auto cursor-pointer">
        <a 
          href="/cv/Mohammad-Kureshi-CV.pdf" 
          download
          className="group flex items-center gap-2 bg-black/30 backdrop-blur-md border-[1.5px] border-white/70 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          <span className="text-sm font-semibold tracking-wide">Download CV</span>
          <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
