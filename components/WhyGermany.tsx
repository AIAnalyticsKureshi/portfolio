"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyGermany() {
  const points = [
    "Living in Germany since 2024 — M.A. completed at German university",
    "Projects built around German logistics, freight and supply chain industries",
    "ESG and CSRD sustainability reporting built into BI architecture",
    "GDPR-compliant data practices applied by design in every project",
    "Authorized to work full-time immediately — zero visa sponsorship required",
    "Available in Berlin · Munich · Hamburg · Frankfurt · Stuttgart · Remote"
  ];

  return (
    <section className="relative z-20 w-full bg-[#FAFAFA] py-24 px-6 md:px-20 text-[#0F172A] border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Built for the German Market.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden group hover:border-brand-purple/30 transition-all duration-500 hover:shadow-md"
        >
          {/* Accent Left Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-purple to-purple-800"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 relative z-10 pl-6 border-l border-slate-100 ml-2">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 text-brand-green">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-[#475569] md:text-lg leading-relaxed font-light">{point}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
