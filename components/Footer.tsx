"use client";

import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-[#121212] px-6 md:px-20 py-10 text-white border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {year} Mohammad Kureshi. Built with Next.js & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:mohd.kureshi04@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-kureshi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/AIAnalyticsKureshi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
        >
          Back to top
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
