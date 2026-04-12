"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Experience & Education.</h2>
        </motion.div>

        <div className="space-y-20 block lg:flex lg:space-y-0 lg:space-x-12 xl:space-x-20">

          {/* Professional Background Left Side */}
          <div className="flex-1 space-y-12">
            <h3 className="text-2xl font-semibold border-b border-orange-500/30 pb-4 flex items-center">
              Professional Background
            </h3>

            {/* Entry 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 border-l border-white/10 hover:border-orange-500/50 transition-colors duration-300"
            >
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
              <h4 className="text-xl md:text-2xl font-bold">Independent BI & Analytics Consultant</h4>
              <p className="text-orange-400 mb-2 mt-1 font-medium">Freelance · Self-Employed</p>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">Jan 2024 – Present · Germany</span>
                <span className="text-xs font-bold tracking-wider text-green-300 bg-green-500/10 px-3 py-1.5 rounded border border-green-500/30 uppercase">Official German Freelance Work Permit</span>
              </div>
              <ul className="list-none space-y-3 pl-2 text-gray-300 font-light leading-relaxed">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-orange-500/60 before:rounded-full">Delivered Power BI dashboards and Excel reporting solutions to 250+ clients across retail, logistics, and service industries</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-orange-500/60 before:rounded-full">Automated reporting workflows reducing manual effort by average 40%+ per client</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-orange-500/60 before:rounded-full">Managed full project lifecycle: requirements gathering, data cleaning, ETL, visualization, and delivery</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-orange-500/60 before:rounded-full">Served local German clients and international remote clients simultaneously</li>
              </ul>
            </motion.div>

            {/* Entry 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[6.5px] top-2"></div>
              <h4 className="text-xl md:text-2xl font-bold">Reporting & Operations Analyst</h4>
              <p className="text-gray-300 mb-2 mt-1 font-medium">SMGK Developers Pvt. Ltd.</p>
              <div className="mb-5">
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">May 2022 – Nov 2023 · Mumbai, India</span>
              </div>
              <ul className="list-none space-y-3 pl-2 text-gray-400 font-light leading-relaxed">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-500 before:rounded-full">Standardized reporting templates reducing preparation time by 32% across departments</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-500 before:rounded-full">Consolidated multi-team data into structured management reports for senior leadership</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-500 before:rounded-full">Applied data validation ensuring reliability of all business information delivered</li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-500 before:rounded-full">Coordinated daily operations with full documentation and cross-department tracking</li>
              </ul>
            </motion.div>
          </div>

          {/* Education Right Side */}
          <div className="flex-1 space-y-12">
            <h3 className="text-2xl font-semibold border-b border-orange-500/30 pb-4 mt-16 md:mt-0">Education & Certifications</h3>

            <div className="space-y-6">
              {/* Ed Entry 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
                    <i className="fa-solid fa-graduation-cap" style={{ color: 'inherit', fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">M.A. International Management</h4>
                    <p className="text-orange-300 font-medium mb-1 line-clamp-1">IU International University — Germany</p>
                    <p className="text-gray-400 text-sm mb-3">Jan 2024 – Dec 2025</p>
                    <p className="text-sm text-gray-300 italic border-l-2 border-white/20 pl-3">
                      Completed while running freelance BI practice and building portfolio projects
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Ed Entry 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
                    <i className="fa-solid fa-trophy" style={{ color: 'inherit', fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></i>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl font-bold xl:max-w-[200px] 2xl:max-w-none">Microsoft PL-300 Power BI Data Analyst</h4>
                      <span className="shrink-0 max-w-max text-xs font-bold tracking-wider text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/30 uppercase">
                        In Progress
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Expected May 2026</p>
                  </div>
                </div>
              </motion.div>

              {/* Ed Entry 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
                    <i className="fa-solid fa-certificate" style={{ color: 'inherit', fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></i>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl font-bold">Advanced Excel</h4>
                      <span className="shrink-0 text-xs font-bold tracking-wider text-green-300 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30 uppercase">
                        Certified <i className="fa-solid fa-circle-check" style={{ color: 'inherit', fontSize: 'inherit', marginRight: '8px', verticalAlign: 'middle' }}></i>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ed Entry 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
                    <i className="fa-solid fa-graduation-cap" style={{ color: 'inherit', fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">BBA — Business Administration</h4>
                    <p className="text-gray-300 font-medium mb-1">BKNMU, India</p>
                    <p className="text-gray-400 text-sm">2019 – 2022</p>
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
