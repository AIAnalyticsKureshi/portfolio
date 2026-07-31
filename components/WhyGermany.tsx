"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyGermany() {
  const points = [
    "Living in Germany since 2024 — M.A. completed at German university",
    "Projects built around German logistics, freight and supply chain industries",
    "ESG and CSRD sustainability reporting built into BI architecture",
    "GDPR-compliant data practices applied by design in every project",
    "On a German job seeker visa — able to start full-time work as soon as I'm hired",
    "Available in Berlin · Munich · Hamburg · Frankfurt · Stuttgart · Remote"
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Built for the German market.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-[#1A1A1A] border border-white/8 rounded-3xl p-10 md:p-12 lg:p-16 hover:border-white/20 transition-colors duration-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 pl-6 border-l border-white/8 ml-2">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-green-400 mt-0.5" />
                <p className="text-gray-300 md:text-lg leading-normal font-normal">{point}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
