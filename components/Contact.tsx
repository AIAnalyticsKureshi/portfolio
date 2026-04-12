"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Work Together.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Open to BI Analyst and Reporting roles across Germany. No sponsorship needed. Available to start immediately.
            </p>

            <div className="flex items-center gap-4 mb-10 p-4 bg-white/[0.03] border border-white/10 rounded-2xl w-max hover:border-orange-500/30 transition-colors group">
              <div className="p-3 bg-white/5 rounded-xl text-orange-400 group-hover:bg-orange-500/10 transition-colors">
                <i className="fa-solid fa-envelope" style={{ color: 'inherit', fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                <a href="mailto:mohd.kureshi04@gmail.com" className="text-lg md:text-xl font-medium hover:text-orange-400 transition-colors">mohd.kureshi04@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mohammad-kureshi/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AIAnalyticsKureshi" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-orange-500/20 transition-colors"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Thank you!</h3>
                <p className="text-gray-400">I will respond within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition-colors hover:text-orange-400"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm tracking-wider text-gray-500 font-bold uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm tracking-wider text-gray-500 font-bold uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-wider text-gray-500 font-bold uppercase">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-orange-600/20 border border-orange-500/50 text-orange-400 hover:text-orange-300 font-bold tracking-wide rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-600/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
