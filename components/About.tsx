"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Globe, CheckCircle2 } from "lucide-react";

const TECH_STACK = [
  { category: "BI & reporting", items: ["Power BI", "DAX", "Power Query", "KPI Design", "Data Storytelling", "CSRD/ESG Reporting"] },
  { category: "Data & databases", items: ["Star Schema Design", "ETL Pipelines", "Data Quality", "SQL", "Python", "Pandas", "dbt", "SQLite", "SQL Server", "MySQL"] },
  { category: "Productivity", items: ["Advanced Excel", "Git", "VS Code", "Notion"] },
  { category: "Compliance", items: ["GDPR (Data Privacy)", "CSRD (Sustainability Reporting)"] },
];

export default function About() {
  return (
    <section id="about" className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 text-gray-400 font-normal leading-normal text-lg"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2">About me.</h2>

            <p className="text-xl text-white font-medium border-l-2 border-orange-500 pl-4">
              I turn raw data into decisions.
            </p>

            <p>
              I design and build business intelligence systems end-to-end — star schema warehouse architecture, Python ETL pipelines, DAX measures, and Power BI dashboards that senior leadership actually rely on.
            </p>

            <p>
              I do not just visualize data. I make it <strong className="text-white font-medium">trustworthy first</strong> — through validation pipelines, data quality scorecards, and structured modelling before anything reaches a report.
            </p>

            <p>
              Alongside my M.A. studies in Germany (2024–2025), I built and delivered 39+ BI and reporting projects independently through InkWave, my freelance BI consultancy. I&apos;m currently on a German job seeker visa, able to start full-time work as soon as I&apos;m hired.
            </p>

            <ul className="space-y-3 mt-4 text-gray-300 bg-[#1A1A1A] p-8 rounded-2xl border border-white/8">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                <span><strong className="font-medium text-white">Berlin, Germany</strong> · Open to Hamburg · Remote</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                <span><strong className="font-medium text-white">BI Analyst</strong> · Reporting Analyst · Power BI Developer · Junior Controller</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                <span>English: C2 Professional · German: A2/B1, actively improving</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                <span>GDPR-aware · CSRD-familiar · Job seeker visa (Germany)</span>
              </li>
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-medium mb-8 flex items-center">
              Tech stack & expertise <span className="ml-4 h-[1px] flex-1 bg-white/8"></span>
            </h3>
            <div className="space-y-8">
              {TECH_STACK.map((group, idx) => (
                <div key={idx} className="group cursor-default">
                  <h4 className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase mb-4">{group.category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-200 bg-[#1A1A1A] border-white/8 text-gray-300 hover:bg-[#212121] hover:border-white/20 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
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
