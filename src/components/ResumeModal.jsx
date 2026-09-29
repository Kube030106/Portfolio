import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileDown,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, EXPERIENCE, CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-10 bg-[#080d1a] text-slate-100 shadow-[0_0_50px_rgba(6,182,212,0.3)] custom-scrollbar"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Kubendiran M // Official Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/resume.pdf"
                download="Kubendiran_M_Resume.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
            
            {/* Header info */}
            <div>
              <h1 className="text-3xl font-bold text-white font-heading tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <p className="text-cyan-400 font-mono text-sm font-semibold">
                  {PERSONAL_INFO.role}
                </p>
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 text-[10px] font-mono font-bold">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>ServiceNow CAD &amp; CSA Certified</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mt-3 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Computer Science (Artificial Intelligence) undergraduate at Sathyabama Institute of Science &amp; Technology with an 8.6/10 CGPA and ServiceNow Certified Application Developer (CAD) &amp; System Administrator (CSA). Experienced in enterprise platform scripting, Flow Designer workflows, computer vision architectures (ArcFace, OpenCV), full-stack development (React, Supabase, Flask), and machine learning pipelines.
              </p>
            </div>

            {/* Featured ServiceNow Credentials Spotlight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900/90 to-teal-950/40 border-2 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                    Featured Industry Credentials // ServiceNow Certified
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Globally Accredited
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-white">ServiceNow Certified Application Developer (CAD)</h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">CAD</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Scoped Applications, Client/Server Scripting, Flow Designer, Business Rules, REST APIs</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-white">ServiceNow Certified System Administrator (CSA)</h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">CSA</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Platform Admin, User/Role Governance, Service Catalog, CMDB, Workflow Automations</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                        <p className="text-xs text-slate-400">{edu.institution} &bull; {edu.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-cyan-300 font-bold block">{edu.score}</span>
                        <span className="text-[11px] font-mono text-slate-400">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Internship Experience</span>
              </h3>
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-cyan-400">{exp.company} &bull; {exp.location}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                <span>Featured Technical Projects</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold text-white mb-1">{proj.title}</h4>
                    <p className="text-[11px] text-slate-400 mb-2 line-clamp-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.map(t => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Certifications &amp; Accreditations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => {
                  const isFeatured = cert.featured;
                  return (
                    <div
                      key={cert.title}
                      className={`p-3.5 rounded-xl transition-all ${
                        isFeatured
                          ? 'bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-slate-900/60 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                          : 'bg-slate-900/60 border border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                        {isFeatured && (
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 shrink-0 ml-1">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-mono text-cyan-400 mb-1">{cert.issuer}</p>
                      <p className="text-[11px] text-slate-300 line-clamp-2">{cert.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400">
              PDF generated & ready for offline review
            </span>
            <a
              href="/resume.pdf"
              download="Kubendiran_M_Resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
