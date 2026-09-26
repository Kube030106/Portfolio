import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileDown,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
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
              <p className="text-cyan-400 font-mono text-sm font-semibold mt-1">
                {PERSONAL_INFO.role}
              </p>
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
                Computer Science (Artificial Intelligence) undergraduate at Sathyabama Institute of Science & Technology with an 8.6/10 CGPA. Experienced in developing computer vision systems (ArcFace, OpenCV), full-stack web applications (React, Supabase, Flask), and machine learning pipelines. Seeking high-impact software engineering opportunities.
              </p>
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
                <span>Certifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                    <p className="text-[11px] font-mono text-cyan-400">{cert.issuer}</p>
                  </div>
                ))}
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
