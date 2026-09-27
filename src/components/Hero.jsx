import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  Brain,
  Code2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const fullText = PERSONAL_INFO.subtitles[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-6 max-w-4xl"
        >
          {/* Status Pill & Role Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono shadow-xs dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 dark:bg-teal-400"></span>
              </span>
              <span className="tracking-wide font-medium">{PERSONAL_INFO.status}</span>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span>Software &amp; AI Engineer &bull; 8.6 CGPA</span>
            </div>
          </div>

          {/* Main Greeting & Name */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-semibold flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Hello, World! I am</span>
            </h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] font-heading">
              {PERSONAL_INFO.name}
            </h1>
          </div>

          {/* Dynamic Animated Typing Subtitle */}
          <div className="flex items-center justify-center min-h-[44px] text-2xl sm:text-4xl font-semibold text-slate-700 dark:text-slate-200">
            <span className="mr-2.5 text-slate-500 dark:text-slate-400 font-normal">I build as a</span>
            <span className="text-gradient font-bold">{displayedText}</span>
            <span className="w-0.5 h-8 ml-1.5 bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
          </div>

          {/* Punchy Tagline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            {PERSONAL_INFO.tagline}. Specializing in computer vision models, scalable web architectures, and intelligent automation.
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
            <div className="text-cyan-700 dark:text-cyan-400 font-medium">
              Sathyabama Institute of Science & Technology
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
            <div className="text-slate-700 dark:text-slate-300">
              B.E. CSE (AI)
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 w-full sm:w-auto">
            {/* Primary CTA: View Projects */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white dark:text-black bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-400 dark:to-cyan-300 hover:from-cyan-500 hover:to-teal-500 dark:hover:from-cyan-300 dark:hover:to-teal-200 transition-all duration-300 shadow-md shadow-cyan-600/25 dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-lg hover:shadow-cyan-600/35 dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA: Download Resume */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 shadow-xs hover:shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:-translate-y-0.5 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-center space-x-3.5 pt-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-xs dark:shadow-none hover:shadow-sm transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-xs dark:shadow-none hover:shadow-sm transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-xs dark:shadow-none hover:shadow-sm transition-all"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Hero Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 group hover:-translate-y-1 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-gradient group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
