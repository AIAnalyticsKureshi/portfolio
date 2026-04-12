"use client";

import { motion } from "framer-motion";

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
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
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
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
        >
          {/* Orange Accent Left Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600"></div>
          
          {/* Faded background logo or detail could go here */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 relative z-10 pl-6 border-l border-white/5 ml-2">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 text-2xl drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <i className="fa-solid fa-circle-check" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle' }}></i>
                </div>
                <p className="text-gray-300 md:text-lg leading-relaxed font-light">{point}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
