import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // Industry Immersion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Hands-on software development in fast-paced engineering environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative group"
            >
              {/* Header: Company, Role & Duration */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-500 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0">
                    <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono mb-1.5">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      <span>{exp.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {exp.company} &bull; <span className="text-slate-400 font-normal">{exp.location}</span>
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="self-start md:self-auto px-4 py-2 rounded-xl glass-panel border border-slate-700/80 text-xs font-mono text-cyan-400 flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-950/40 border border-cyan-500/20 text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
