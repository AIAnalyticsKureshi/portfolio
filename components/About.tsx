"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { category: "BI & REPORTING", items: ["Power BI", "DAX", "Power Query", "KPI Design", "Data Storytelling", "CSRD/ESG Reporting"] },
  { category: "DATA & DATABASES", items: ["Star Schema Design", "ETL Pipelines", "Data Quality", "SQL", "Python", "Pandas", "SQLite", "SQL Server", "MySQL"] },
  { category: "PRODUCTIVITY", items: ["Advanced Excel", "Git", "VS Code", "Notion"] },
  { category: "COMPLIANCE", items: ["GDPR (Data Privacy)", "CSRD (Sustainability Reporting)"] },
  { category: "CERTIFICATIONS", items: ["Microsoft PL-300 · In Progress · May 2026", "Advanced Excel · Certified <i className=\"fa-solid fa-circle-check\" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle' }}></i>"] }
];

export default function About() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-gray-400 font-light leading-relaxed text-lg"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">About Me.</h2>
            
            <p className="text-xl text-white font-medium border-l-2 border-orange-500 pl-4">
              I turn raw data into decisions.
            </p>
            
            <p>
              I design and build Business Intelligence systems end-to-end — star schema warehouse architecture, Python ETL pipelines, DAX measures, and Power BI dashboards that senior leadership actually rely on.
            </p>
            
            <p>
              I do not just visualize data. I make it <strong className="text-white font-medium">trustworthy first</strong> — through validation pipelines, data quality scorecards, and structured modelling before anything reaches a report.
            </p>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
              <p className="text-sm md:text-base leading-relaxed">
                Currently completing the <strong>BI Control Tower</strong> — an enterprise-grade BI ecosystem for EuroTrade GmbH, a fictional global logistics company — featuring ESG CO₂ tracking aligned with German CSRD reporting requirements. Power BI dashboard delivering in 23 days.
              </p>
            </div>
            
            <p>
              Alongside my M.A. studies in Germany (2024–2025), I independently served <strong>250+ freelance clients</strong> delivering Excel reports, Power BI dashboards, and data analysis — authorized under official German freelance work permit.
            </p>
            
            <ul className="space-y-3 mt-4 text-gray-300 bg-black/20 p-6 rounded-2xl border border-white/5">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle', marginTop: '4px' }}></i>
                <span><strong>Magdeburg, Germany</strong> · Relocating: In entire Germany · Remote</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-bullseye" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle', marginTop: '4px' }}></i>
                <span><strong>BI Analyst</strong> · Reporting Analyst · Power BI Developer</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-earth-europe" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle', marginTop: '4px' }}></i>
                <span>English: Professional · German: A2 (actively learning)</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle', marginTop: '4px' }}></i>
                <span>GDPR-aware · CSRD-familiar · No sponsorship needed</span>
              </li>
            </ul>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              Tech Stack & Expertise <span className="ml-4 h-[1px] flex-1 bg-white/10"></span>
            </h3>
            <div className="space-y-8">
              {TECH_STACK.map((group, idx) => (
                <div key={idx} className="group cursor-default">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{group.category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((tech, tIdx) => {
                      const isCert = group.category === "CERTIFICATIONS";
                      return (
                        <span 
                          key={tIdx} 
                          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                            isCert 
                            ? "bg-orange-500/10 border-orange-500/30 text-orange-200" 
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-orange-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                          }`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
