"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Experience & education.</h2>
        </motion.div>

        <div className="space-y-20 block lg:flex lg:space-y-0 lg:space-x-12 xl:space-x-20">

          <div className="flex-1 space-y-12">
            <h3 className="text-2xl font-medium border-b border-white/8 pb-4 flex items-center">
              Professional background
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 border-l border-white/8 hover:border-white/20 transition-colors duration-200"
            >
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[8.5px] top-1.5"></div>
              <h4 className="text-xl md:text-2xl font-medium">Business intelligence & analytics consultant</h4>
              <p className="text-orange-400 mb-2 mt-1 font-medium">InkWave (Self-employed) · Berlin</p>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="text-sm text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full border border-white/8">Jan 2025 – Present · Germany</span>
                <span className="text-xs font-medium tracking-wider text-green-300 bg-green-500/10 px-3 py-1.5 rounded border border-green-500/30 uppercase">Official German freelance work permit</span>
              </div>
              <ul className="list-none space-y-3 pl-2 text-gray-300 font-normal leading-normal">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Owned the full analytics lifecycle across 39+ BI and reporting projects for clients across Germany, UK, USA, Italy, France, and India</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Automated reporting workflows, reducing client processing time by over 40%</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Managed full project lifecycle: requirements gathering, data modeling, ETL, visualization, and delivery</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Served clients across e-commerce, retail, logistics, and consulting domains simultaneously</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 border-l border-white/8 hover:border-white/20 transition-colors duration-200"
            >
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-2"></div>
              <h4 className="text-xl md:text-2xl font-medium">Reporting & data analyst</h4>
              <p className="text-gray-300 mb-2 mt-1 font-medium">Rhyno Foam Industries · Morbi, India</p>
              <div className="mb-5">
                <span className="text-sm text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full border border-white/8">Jun 2023 – Nov 2023</span>
              </div>
              <ul className="list-none space-y-3 pl-2 text-gray-400 font-normal leading-normal">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Consolidated fragmented data into unified management reports, reducing rework by 30%</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Led data quality validation processes, resolving inconsistencies before management review</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Built documentation standards, reducing onboarding time for new reporting users by 20%</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8 border-l border-white/8 hover:border-white/20 transition-colors duration-200"
            >
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-2"></div>
              <h4 className="text-xl md:text-2xl font-medium">Reporting & business operations analyst</h4>
              <p className="text-gray-300 mb-2 mt-1 font-medium">SMGK Developers Pvt. Ltd. · Mumbai, India</p>
              <div className="mb-5">
                <span className="text-sm text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full border border-white/8">May 2022 – Nov 2023 · Mumbai, India</span>
              </div>
              <ul className="list-none space-y-3 pl-2 text-gray-400 font-normal leading-normal">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Standardized reporting templates reducing preparation time by 32% across departments</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Consolidated multi-team data into structured management reports for senior leadership</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Applied data validation ensuring reliability of all business information delivered</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-600 before:rounded-full">Coordinated daily operations with full documentation and cross-department tracking</li>
              </ul>
            </motion.div>
          </div>

          <div className="flex-1 space-y-12">
            <h3 className="text-2xl font-medium border-b border-white/8 pb-4 mt-16 md:mt-0">Education & certifications</h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 md:p-10 hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#212121] rounded-xl border border-white/8 text-gray-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">M.A. International Management</h4>
                    <p className="text-gray-300 font-medium mb-1 line-clamp-1">IU International University — Germany</p>
                    <p className="text-gray-500 text-sm mb-3">Jan 2024 – Dec 2025 · Grade 2.4</p>
                    <p className="text-sm text-gray-400 italic border-l-2 border-white/8 pl-3">
                      Completed while running freelance BI practice and building portfolio projects
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 md:p-10 hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#212121] rounded-xl border border-white/8 text-gray-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl font-medium xl:max-w-[220px] 2xl:max-w-none">Microsoft PL-300 Power BI Data Analyst</h4>
                      <span className="shrink-0 max-w-max text-xs font-medium tracking-wider text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/30 uppercase">
                        In progress
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Expected August 2026</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 md:p-10 hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#212121] rounded-xl border border-white/8 text-gray-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl font-medium">Advanced Excel</h4>
                      <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium tracking-wider text-green-300 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30 uppercase">
                        Certified <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 md:p-10 hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#212121] rounded-xl border border-white/8 text-gray-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">BBA — Business Administration</h4>
                    <p className="text-gray-300 font-medium mb-1">BKNMU, India</p>
                    <p className="text-gray-500 text-sm">2019 – 2022</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
