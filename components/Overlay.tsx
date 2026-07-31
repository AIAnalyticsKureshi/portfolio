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
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mix-blend-difference mb-4 text-white">Mohammad Kureshi.</h1>
        <p className="text-lg md:text-2xl font-normal tracking-wide text-orange-400 mix-blend-difference max-w-3xl leading-normal">
          BI Analyst · Power BI · SQL · Python · End-to-end data systems
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-[40vh] w-full px-10 md:px-32 flex flex-col items-start justify-center"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mix-blend-difference max-w-xl leading-tight text-white mb-2">
          I turn raw data into decisions.
        </h2>
        <p className="text-xl text-orange-400 mix-blend-difference font-normal">
          Making data trustworthy first.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-[40vh] w-full px-10 md:px-32 flex flex-col items-end justify-center text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mix-blend-difference max-w-xl leading-tight text-white mb-6">
          Warehouse → ETL → Leadership dashboards.
        </h2>
      </motion.div>

      {/* Floating Badges */}
      <div className="absolute bottom-10 left-6 md:left-10 pointer-events-auto">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </div>
          <span className="text-sm font-medium text-white/95">Open to work · Berlin &amp; Hamburg · Available immediately</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 pointer-events-auto cursor-pointer">
        <a
          href="/cv/Mohammad-Kureshi-CV.pdf"
          download
          className="group flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
        >
          <span className="text-sm font-medium tracking-wide">Download CV</span>
          <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
