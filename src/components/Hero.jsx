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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="tracking-wide">{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest font-mono text-cyan-400 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hello, World! I am</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-heading">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Dynamic Animated Typing Subtitle */}
            <div className="flex items-center min-h-[44px] text-xl sm:text-3xl font-semibold text-slate-200">
              <span className="mr-2 text-slate-400 font-normal">I build as an</span>
              <span className="text-gradient font-bold">{displayedText}</span>
              <span className="w-0.5 h-7 ml-1 bg-cyan-400 animate-pulse" />
            </div>

            {/* Punchy Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              {PERSONAL_INFO.tagline}. Specializing in computer vision models, scalable web architectures, and intelligent automation.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
              <div className="text-cyan-400">
                Sathyabama Institute of Science & Technology
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-xs font-mono text-slate-400">Find me on:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual, Avatar & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing Rings */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer decorative orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 animate-spin" style={{ animationDuration: '35s' }} />
              <div className="absolute inset-4 rounded-full border border-cyan-500/20" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl opacity-60" />

              {/* Main Avatar Card */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-panel-glow border-2 border-cyan-500/40 p-2 shadow-[0_0_40px_rgba(6,182,212,0.25)]">
                <img
                  src="/avatar.jpg"
                  alt="Kubendiran M - AI & Full Stack Engineer"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                {/* Cyber badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-xl glass-panel border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <div>
                      <p className="text-[11px] font-mono text-cyan-300 font-bold leading-none">Software &amp; AI Engineer</p>
                      <p className="text-[9px] text-slate-400 font-mono">ArcFace &bull; Full-Stack &bull; 2023-27</p>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                    8.6 CGPA
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Python & AI */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl glass-panel-glow border border-cyan-500/40 flex items-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-semibold text-cyan-200">Python & OpenCV</span>
              </motion.div>

              {/* Floating Badge 2: React & Supabase */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-2 sm:-right-6 px-3.5 py-2 rounded-xl glass-panel-glow border border-teal-500/40 flex items-center space-x-2 shadow-[0_0_20px_rgba(20,184,166,0.25)]"
              >
                <Code2 className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-mono font-semibold text-teal-200">React & Supabase</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Hero Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-gradient group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
