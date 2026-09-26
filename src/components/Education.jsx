import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Formal foundations in Artificial Intelligence, Computer Science theory, and rigorous mathematics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 md:ml-40 space-y-12 pb-4">
          
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-110 group-hover:border-teal-300 transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-teal-300 transition-colors" />
              </div>

              {/* Date pill on left for larger screens */}
              <div className="hidden sm:block absolute -left-36 md:-left-44 top-2 text-right w-28 md:w-36">
                <span className="text-xs font-mono font-bold text-cyan-400 block tracking-tight">
                  {edu.period}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block">
                  {edu.type}
                </span>
              </div>

              {/* Main Content Card */}
              <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
                
                {/* Mobile Date indicator */}
                <div className="sm:hidden flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period} &bull; {edu.type}</span>
                </div>

                {/* Degree & Score Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-1">
                      <span>{edu.institution}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-xs text-slate-400">{edu.location}</span>
                    </p>
                  </div>

                  {/* Score Badge */}
                  <div className="self-start px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                    {edu.score}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework / Topics */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-semibold">
                      Key Subjects & Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {edu.highlights && (
                  <div className="mt-3 space-y-1">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
