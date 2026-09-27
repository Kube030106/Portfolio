import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  MessagesSquare,
  Award,
  Clock,
  Zap,
  Users,
  Languages,
  CheckCircle2,
  Terminal,
  Cpu,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Brain: Brain,
  MessagesSquare: MessagesSquare,
  Award: Award,
  Clock: Clock,
  Zap: Zap,
  Users: Users
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 dark:text-white">
            Engineering Tomorrow's <span className="text-gradient">Intelligent Systems</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Bridging algorithmic precision and real-world software engineering to create human-centric AI experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Academic Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative group hover:border-cyan-500/30 shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Academic Journey & Background</h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Sathyabama Institute of Science & Technology (2023–2027)</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                I am a dedicated Computer Science & Engineering (Artificial Intelligence) undergraduate currently maintaining an <b className="text-cyan-700 dark:text-cyan-300 font-semibold">8.6 / 10 CGPA</b>. My core drive is turning theoretical AI research into deployable, robust software products.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                Whether implementing real-time facial recognition pipelines using <span className="text-cyan-700 dark:text-cyan-300 font-medium">ArcFace & OpenCV</span>, architecting natural language text-to-SQL dashboards with <span className="text-cyan-700 dark:text-cyan-300 font-medium">React & Supabase</span>, or integrating edge sensors with <span className="text-cyan-700 dark:text-cyan-300 font-medium">Arduino C++</span>, I thrive at the convergence of clean code, mathematical models, and responsive UX.
              </p>

              {/* Core Attributes Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 block">Degree</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">B.E. CSE (AI)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 block">CGPA</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">8.6 / 10.0</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 block">Location</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Chennai, India</span>
                </div>
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md dark:shadow-none transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Languages Known</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Multilingual Communication</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-teal-500/30 transition-all flex flex-col justify-between"
                  >
                    <span className="text-sm font-bold text-slate-800 dark:text-white mb-1">{lang.language}</span>
                    <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Soft Skills Animated Badges & Engineering Mindset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Soft Skills Section */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-cyan-500/20 shadow-xs hover:shadow-md dark:shadow-none relative">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2.5">
                  <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Soft Skills</h3>
                </div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">Dynamic Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PERSONAL_INFO.softSkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Sparkles;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 group cursor-default shadow-xs"
                    >
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {skill.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Developer Philosophy Quote */}
            <div className="p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-[#030712] border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-start space-x-3">
                <div className="text-3xl text-cyan-600 dark:text-cyan-400 font-serif leading-none">“</div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    Great AI engineering isn’t just about model weights—it’s about architecting resilient, low-latency pipelines that solve genuine human pain points.
                  </p>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-2 font-semibold">
                    — Kubendiran M
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
