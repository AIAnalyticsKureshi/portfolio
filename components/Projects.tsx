"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Projects() {
  const PROJECTS = [
    {
      title: "BI Control Tower — EuroTrade GmbH",
      subtitle: "Enterprise Logistics BI Ecosystem",
      description: [
        "End-to-end BI system solving data fragmentation in a fictional global supply chain — built to mirror real enterprise architecture exactly.",
        "Stack: Star schema warehouse (3NF) · Python ETL pipeline · Data quality scorecard · Power BI DAX dashboard with drill-through reports.",
        "ESG CO₂ tracking per shipment route — aligned with German CSRD sustainability reporting law.",
        "Built on synthetic data. GDPR-compliant by design. Power BI dashboard arriving in 23 days."
      ],
      tags: ["Power BI", "DAX", "SQL", "Python", "Star Schema", "ETL", "ESG", "CSRD", "Data Quality"],
      link: "https://github.com/AIAnalyticsKureshi/BI-Control-Tower-EuroTrade",
      status: "In Progress",
      statusColor: "text-orange-300 bg-orange-500/10 border-orange-500/30"
    },
    {
      title: "Freight Decision Intelligence",
      subtitle: "Multimodal Transport Analytics · Germany",
      description: [
        "Decision-support dashboard analyzing road, rail, and inland waterway freight across Germany.",
        "Tracks cost (€/tkm), transit time (hours), and WTW CO₂ intensity simultaneously across 3 scenario models: Balanced Incentives, High Carbon Price, and Express Rail.",
        "Reduced manual corridor evaluation effort by ~35%. Directly relevant to Germany's Verkehrswende transport transition and logistics sector.",
        "Built on synthetic data. GDPR-compliant by design."
      ],
      tags: ["Power BI", "DAX", "Scenario Analysis", "KPI Design", "CO₂ Analytics", "German Logistics"],
      link: "https://github.com/AIAnalyticsKureshi/Multimodal-Freight-Decision-Intelligence",
      status: "Completed",
      statusColor: "text-green-300 bg-green-500/10 border-green-500/30"
    }
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex flex-col p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden group hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-orange-400 transition-colors">{project.title}</h3>
                  <p className="text-orange-300/80 font-medium text-lg border-l-2 border-orange-500/50 pl-3">{project.subtitle}</p>
                </div>
                <span className={`shrink-0 text-xs font-bold tracking-widest px-4 py-2 rounded-full border uppercase ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-4 mb-10 text-gray-300 font-light leading-relaxed flex-1">
                {project.description.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 group/btn"
                >
                  <Github className="w-5 h-5" />
                  <span>View Project on GitHub</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle' }}></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
