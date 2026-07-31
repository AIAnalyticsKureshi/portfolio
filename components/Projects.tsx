"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const FINSIGNAL = {
    title: "FinSignal — Operational-Financial Early Warning System",
    subtitle: "Real-time Controlling Intelligence · German Manufacturing",
    description: [
      "Traditional monthly Controlling reports surface budget overruns 8 days after month-end close. FinSignal detects the same issues an average of 25.6 days earlier by reading weekly operational data as leading indicators.",
      "Star schema warehouse (3 fact tables, 5 dimensions, 9 indexes) · Python ETL and signal detection engine · 20 certified SQL analytical queries · 4-page Power BI dashboard with DAX-driven conditional formatting.",
      "Automatically identified 30 early warning signals and €2.84M in projected overruns across 6 cost centres — before a single month-end report was generated.",
    ],
    tags: ["Power BI", "DAX", "SQL", "Python", "SQLite", "Star Schema", "ETL", "Financial Controlling", "KPI Development"],
    link: "https://github.com/AIAnalyticsKureshi/FinSignal",
    status: "Completed",
    statusColor: "text-brand-green bg-brand-green/10 border-brand-green/30",
  };

  const PROJECTS = [
    {
      title: "BI Control Tower — EuroTrade GmbH",
      subtitle: "Enterprise Logistics BI Ecosystem",
      description: [
        "End-to-end BI system solving data fragmentation in a fictional global supply chain — built to mirror real enterprise architecture exactly.",
        "Stack: Star schema warehouse (3NF) · Python ETL pipeline · Data quality scorecard · Power BI DAX dashboard with drill-through reports.",
        "ESG CO₂ tracking per shipment route — aligned with German CSRD sustainability reporting law.",
      ],
      tags: ["Power BI", "DAX", "SQL", "Python", "Star Schema", "ETL", "ESG", "CSRD", "Data Quality"],
      link: "https://github.com/AIAnalyticsKureshi/BI-Control-Tower-EuroTrade",
      status: "Completed",
      statusColor: "text-brand-green bg-brand-green/10 border-brand-green/30",
    },
    {
      title: "Freight Decision Intelligence",
      subtitle: "Multimodal Transport Analytics · Germany",
      description: [
        "Decision-support dashboard analyzing road, rail, and inland waterway freight across Germany.",
        "Tracks cost (€/tkm), transit time (hours), and WTW CO₂ intensity simultaneously across 3 scenario models: Balanced Incentives, High Carbon Price, and Express Rail.",
        "Reduced manual corridor evaluation effort by ~35%. Directly relevant to Germany's Verkehrswende transport transition and logistics sector.",
      ],
      tags: ["Power BI", "DAX", "Scenario Analysis", "KPI Design", "CO₂ Analytics", "German Logistics"],
      link: "https://github.com/AIAnalyticsKureshi/Multimodal-Freight-Decision-Intelligence",
      status: "Completed",
      statusColor: "text-brand-green bg-brand-green/10 border-brand-green/30",
    },
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#FAFAFA] py-24 px-6 md:px-20 text-[#0F172A] border-t border-slate-200">
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

        {/* FinSignal — flagship, full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col p-8 md:p-10 rounded-3xl border border-slate-200 bg-white overflow-hidden group hover:border-brand-purple/40 hover:shadow-[0_4px_30px_rgba(117,76,240,0.15)] transition-all duration-500 mb-10"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-2 block">Flagship Project</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-brand-purple transition-colors">{FINSIGNAL.title}</h3>
              <p className="text-brand-purple/80 font-medium text-lg border-l-2 border-brand-purple/50 pl-3">{FINSIGNAL.subtitle}</p>
            </div>
            <span className={`shrink-0 text-xs font-bold tracking-widest px-4 py-2 rounded-full border uppercase ${FINSIGNAL.statusColor}`}>
              {FINSIGNAL.status}
            </span>
          </div>

          {/* Dashboard screenshot grid — replace src with your exported Power BI screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["page1-executive-pulse", "page2-variance-intelligence", "page3-risk-register", "page4-signal-intelligence"].map((img) => (
              <div key={img} className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={`/projects/finsignal/${img}.png`}
                  alt={`FinSignal ${img.replace(/-/g, " ")}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8 text-[#334155] font-light leading-relaxed">
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
              <div key={stat.label} className="rounded-xl bg-[#0D0F1A] px-4 py-3">
                <div className="font-mono text-lg text-brand-purple">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {FINSIGNAL.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-medium text-[#475569] bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={FINSIGNAL.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-purple text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(117,76,240,0.4)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View Project on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Remaining projects — two columns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex flex-col p-8 md:p-10 rounded-3xl border border-slate-200 bg-white overflow-hidden group hover:border-brand-teal/40 hover:shadow-[0_4px_30px_rgba(30,186,235,0.12)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-brand-teal transition-colors">{project.title}</h3>
                  <p className="text-brand-teal/80 font-medium text-lg border-l-2 border-brand-teal/50 pl-3">{project.subtitle}</p>
                </div>
                <span className={`shrink-0 text-xs font-bold tracking-widest px-4 py-2 rounded-full border uppercase ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-4 mb-10 text-[#334155] font-light leading-relaxed flex-1">
                {project.description.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-[#475569] bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View Project on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
