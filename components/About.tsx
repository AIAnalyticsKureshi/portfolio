"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Globe, CheckCircle2 } from "lucide-react";

const TECH_STACK = [
  { category: "BI & REPORTING", items: ["Power BI", "DAX", "Power Query", "KPI Design", "Data Storytelling", "CSRD/ESG Reporting"] },
  { category: "DATA & DATABASES", items: ["Star Schema Design", "ETL Pipelines", "Data Quality", "SQL", "Python", "Pandas", "dbt", "SQLite", "SQL Server", "MySQL"] },
  { category: "PRODUCTIVITY", items: ["Advanced Excel", "Git", "VS Code", "Notion"] },
  { category: "COMPLIANCE", items: ["GDPR (Data Privacy)", "CSRD (Sustainability Reporting)"] },
  { category: "CERTIFICATIONS", items: ["Microsoft PL-300 · In Progress · August 2026", "Advanced Excel · Certified"] }
];

export default function About() {
  return (
    <section className="relative z-20 w-full bg-[#FAFAFA] py-24 px-6 md:px-20 text-[#0F172A] border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-[#64748B] font-light leading-relaxed text-lg"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-2">About Me.</h2>
            
            <p className="text-xl text-[#0F172A] font-medium border-l-2 border-brand-purple pl-4">
              I turn raw data into decisions.
            </p>
            
            <p>
              I design and build Business Intelligence systems end-to-end — star schema warehouse architecture, Python ETL pipelines, DAX measures, and Power BI dashboards that senior leadership actually rely on.
            </p>
            
            <p>
              I do not just visualize data. I make it <strong className="text-[#0F172A] font-medium">trustworthy first</strong> — through validation pipelines, data quality scorecards, and structured modelling before anything reaches a report.
            </p>
            
            <p>
              Alongside my M.A. studies in Germany (2024–2025), I built and delivered 39+ BI and reporting projects independently through InkWave, my freelance BI consultancy — authorized under official German freelance work permit.
            </p>
            
            <ul className="space-y-3 mt-4 text-[#334155] bg-white p-6 rounded-2xl border border-slate-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand-purple" />
                <span><strong>Berlin, Germany</strong> · Open to Hamburg · Remote</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 shrink-0 mt-0.5 text-brand-purple" />
                <span><strong>BI Analyst</strong> · Reporting Analyst · Power BI Developer</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 shrink-0 mt-0.5 text-brand-purple" />
                <span>English: C2 Professional · German: A2/B1, actively improving</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-brand-purple" />
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
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-[#0F172A]">
              Tech Stack & Expertise <span className="ml-4 h-[1px] flex-1 bg-slate-200"></span>
            </h3>
            <div className="space-y-8">
              {TECH_STACK.map((group, idx) => (
                <div key={idx} className="group cursor-default">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{group.category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((tech, tIdx) => {
                      const isCert = group.category === "CERTIFICATIONS";
                      return (
                        <span 
                          key={tIdx} 
                          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                            isCert 
                            ? "bg-brand-purple/10 border-brand-purple/30 text-brand-purple" 
                            : "bg-white border-slate-200 text-[#334155] hover:border-brand-purple/40 hover:text-brand-purple hover:shadow-sm"
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
