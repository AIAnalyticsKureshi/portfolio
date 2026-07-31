"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-medium tracking-tight">
          Mohammad Kureshi
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link.id ? "text-orange-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/cv/Mohammad-Kureshi-CV.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-[#212121] border border-white/8 hover:border-white/20 rounded-full text-sm font-medium text-white transition-colors duration-200"
        >
          <Download className="w-5 h-5" />
          <span className="hidden sm:inline">Download CV</span>
        </a>
      </div>
    </nav>
  );
}
