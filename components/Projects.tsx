"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const FINSIGNAL = {
    title: "FinSignal — Operational-financial early warning system",
    subtitle: "Real-time controlling intelligence · German manufacturing",
    description: [
      "Traditional monthly controlling reports surface budget overruns 8 days after month-end close. FinSignal detects the same issues an average of 25.6 days earlier by reading weekly operational data as leading indicators.",
      "Star schema warehouse (3 fact tables, 5 dimensions, 9 indexes) · Python ETL and signal detection engine · 20 certified SQL analytical queries · 4-page Power BI dashboard with DAX-driven conditional formatting.",
      "Automatically identified 30 early warning signals and €2.84M in projected overruns across 6 cost centres — before a single month-end report was generated.",
    ],
    tags: ["Power BI", "DAX", "SQL", "Python", "SQLite", "Star Schema", "ETL", "Financial Controlling", "KPI Development"],
    link: "https://github.com/AIAnalyticsKureshi/FinSignal",
    status: "Completed",
    statusColor: "text-green-300 bg-green-500/10 border-green-500/30",
  };

  const PROJECTS = [
    {
      title: "BI Control Tower — EuroTrade GmbH",
      subtitle: "Enterprise logistics BI ecosystem",
      description: [
        "End-to-end BI system solving data fragmentation in a fictional global supply chain — built to mirror real enterprise architecture exactly.",
        "Stack: Star schema warehouse (3NF) · Python ETL pipeline · Data quality scorecard · Power BI DAX dashboard with drill-through reports.",
        "ESG CO₂ tracking per shipment route — aligned with German CSRD sustainability reporting law.",
      ],
      tags: ["Power BI", "DAX", "SQL", "Python", "Star Schema", "ETL", "ESG", "CSRD", "Data Quality"],
      link: "https://github.com/AIAnalyticsKureshi/BI-Control-Tower-EuroTrade",
      status: "Completed",
      statusColor: "text-green-300 bg-green-500/10 border-green-500/30",
    },
    {
      title: "Freight Decision Intelligence",
      subtitle: "Multimodal transport analytics · Germany",
      description: [
        "Decision-support dashboard analyzing road, rail, and inland waterway freight across Germany.",
        "Tracks cost (€/tkm), transit time (hours), and WTW CO₂ intensity simultaneously across 3 scenario models: Balanced Incentives, High Carbon Price, and Express Rail.",
        "Reduced manual corridor evaluation effort by ~35%. Directly relevant to Germany's Verkehrswende transport transition and logistics sector.",
      ],
      tags: ["Power BI", "DAX", "Scenario Analysis", "KPI Design", "CO₂ Analytics", "German Logistics"],
      link: "https://github.com/AIAnalyticsKureshi/Multimodal-Freight-Decision-Intelligence",
      status: "Completed",
      statusColor: "text-green-300 bg-green-500/10 border-green-500/30",
    },
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Selected work.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col p-10 md:p-12 rounded-3xl border border-white/8 bg-[#1A1A1A] overflow-hidden hover:border-white/20 transition-colors duration-200 mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2 block">Flagship project</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-2 tracking-tight">{FINSIGNAL.title}</h3>
              <p className="text-orange-300/80 font-medium text-lg border-l-2 border-orange-500/50 pl-3">{FINSIGNAL.subtitle}</p>
            </div>
            <span className={`shrink-0 text-xs font-medium tracking-widest px-4 py-2 rounded-full border uppercase ${FINSIGNAL.statusColor}`}>
              {FINSIGNAL.status}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["page1-executive-pulse", "page2-variance-intelligence", "page3-risk-register", "page4-signal-intelligence"].map((img) => (
              <div key={img} className="aspect-video rounded-xl overflow-hidden border border-white/8 bg-[#212121]">
                <img
                  src={`/projects/finsignal/${img}.png`}
                  alt={`FinSignal ${img.replace(/-/g, " ")}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8 text-gray-300 font-normal leading-normal">
            {FINSIGNAL.description.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { value: "25.6 days", label: "Avg lead time" },
              { value: "€2.84M", label: "Overruns detected" },
              { value: "30", label: "Signals fired" },
              { value: "100%", label: "Data quality" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-[#212121] border border-white/8 px-4 py-3">
                <div className="font-mono text-lg text-orange-400">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {FINSIGNAL.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-medium text-gray-400 bg-[#212121] border border-white/8 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={FINSIGNAL.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>View project on GitHub</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col p-10 md:p-12 rounded-3xl border border-white/8 bg-[#1A1A1A] overflow-hidden hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 font-medium text-lg border-l-2 border-white/20 pl-3">{project.subtitle}</p>
                </div>
                <span className={`shrink-0 text-xs font-medium tracking-widest px-4 py-2 rounded-full border uppercase ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-4 mb-10 text-gray-300 font-normal leading-normal flex-1">
                {project.description.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-gray-400 bg-[#212121] border border-white/8 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>View project on GitHub</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
