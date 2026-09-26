import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Database,
  Code,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const iconMap = {
  Database: Database,
  Code: Code
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background radial aura */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white">
            Honors & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Formal endorsements in enterprise database systems and core modern JavaScript architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)]"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.badge}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-teal-400 mb-4 font-mono">
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Topics Mastered */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    Core Concepts Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
