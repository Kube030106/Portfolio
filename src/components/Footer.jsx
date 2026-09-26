import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#02050c] pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-900">
          
          {/* Left: Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="px-2 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-teal-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#030712] rounded-[7px] px-1.5 flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-cyan-400 lowercase">kubz</span>
                </div>
              </div>
              <span className="text-base font-bold text-white font-heading">
                Kubendiran M
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-sans">
              Computer Science (AI) Undergraduate &bull; Sathyabama Institute of Science & Technology. Passionate about machine learning, computer vision, and high-performance software systems.
            </p>
          </div>

          {/* Center / Right: Quick Navigation & Socials */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-300">Kubendiran M</span>. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Built with React, Tailwind CSS & Framer Motion
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl glass-panel text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
