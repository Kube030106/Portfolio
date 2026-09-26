import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  BarChart,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-8 bg-[#0b0f19]/95 text-white shadow-[0_0_50px_rgba(6,182,212,0.25)] custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Tag & Title */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white pr-10">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Preview Image with Glow */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-cyan-500/30 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-50" />
            
            {/* Metric pill overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto px-4 py-2 rounded-xl glass-panel border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center space-x-2 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Key Metric: {project.metric}</span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 font-semibold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-950/50 border border-cyan-500/30 text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description & Problem Statement */}
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Project Overview & Problem Statement</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* System Architecture */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Technical Architecture & Implementation</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              {project.architecture}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-3">
              Key Features & Engineering Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-400">
              Source code authored by <b className="text-slate-200">Kubendiran M</b>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:border-cyan-500/50"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-300 hover:to-teal-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Close Details
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
