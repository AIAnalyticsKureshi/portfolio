"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ from, to, duration, suffix = "", prefix = "" }: { from: number, to: number, duration: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const isFloat = to % 1 !== 0;
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            const formatted = isFloat ? value.toFixed(1) : Math.round(value);
            ref.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, prefix, suffix]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-orange-600">{prefix}{from}{suffix}</span>;
}

export default function StatsRow() {
  const stats = [
    { from: 0, to: 250, suffix: "+", label: "Freelance Clients Served" },
    { from: 0, to: 1.5, suffix: "+", label: "Years Corporate Experience" },
    { from: 0, to: 2, suffix: "", label: "BI Projects on GitHub" },
    { from: 0, to: 32, suffix: "%", label: "Reporting Time Reduced" }
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300"
            >
              <div className="mb-3">
                <Counter from={stat.from} to={stat.to} duration={2} suffix={stat.suffix} />
              </div>
              <span className="text-sm md:text-sm text-gray-400 font-medium text-center uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
