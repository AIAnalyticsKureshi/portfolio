"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const FORMSPREE_KEY = "b57ecf4d-3389-439c-97c0-d3e58cdeb9ea";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const json = await response.json();
        setError(json?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/8 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Let&apos;s work together.</h2>
            <p className="text-gray-400 text-lg leading-normal mb-10">
              Open to BI Analyst and Reporting roles across Germany. No sponsorship needed. Available to start immediately.
            </p>

            <div className="flex items-center gap-4 mb-10 p-6 bg-[#1A1A1A] border border-white/8 rounded-2xl w-max hover:border-white/20 hover:bg-[#212121] transition-colors duration-200">
              <div className="p-3 bg-[#212121] rounded-xl text-gray-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Email</p>
                <a href="mailto:mohd.kureshi04@gmail.com" className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors">mohd.kureshi04@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mohammad-kureshi/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-white/8 rounded-full hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/AIAnalyticsKureshi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-white/8 rounded-full hover:bg-[#212121] hover:border-white/20 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#1A1A1A] border border-white/8 rounded-3xl p-10 relative overflow-hidden hover:border-white/20 transition-colors duration-200"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3">Thank you!</h3>
                <p className="text-gray-400">I will respond within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-[#1A1A1A] hover:bg-[#212121] border border-white/8 hover:border-white/20 rounded-full text-sm transition-colors duration-200"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm tracking-wider text-gray-500 font-medium uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#212121] border border-white/8 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm tracking-wider text-gray-500 font-medium uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#212121] border border-white/8 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-wider text-gray-500 font-medium uppercase">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-[#212121] border border-white/8 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-orange-600/20 border border-orange-500/50 text-orange-400 hover:text-orange-300 hover:bg-orange-600/30 hover:border-orange-500/70 font-medium tracking-wide rounded-xl transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </span>
                  ) : "Send message"}
                </button>
                {error && (
                  <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
