import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Terminal,
  Maximize2,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full-Stack AI', 'Computer Vision', 'Machine Learning', 'IoT & Hardware'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/30">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white">
            Projects & <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            From deep learning ArcFace biometric pipelines to conversational Text-to-SQL dashboards and hardware IoT sensors.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group relative rounded-3xl glass-panel border border-slate-800/90 overflow-hidden flex flex-col justify-between card-hover-tilt cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    
                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                      {project.category}
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-black text-xs font-bold shadow-[0_0_20px_#06b6d4]">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Architecture & Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1">
                      {project.shortTitle || project.title}
                    </h3>
                    
                    {/* Subtitle / 2-line Description */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-700/60 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-6 py-4 border-t border-slate-800/80 flex items-center justify-between mt-2 bg-slate-900/30">
                  <div className="flex items-center space-x-1.5 text-xs text-cyan-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-[11px] truncate max-w-[170px]">{project.metric}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
