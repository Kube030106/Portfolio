import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCode,
  Coffee,
  Cpu,
  Database,
  Code,
  Layout,
  Palette,
  Sparkles,
  Server,
  Cloud,
  Eye,
  ScanFace,
  BarChart3,
  Binary,
  TableProperties,
  Network,
  GitBranch,
  Workflow,
  Boxes,
  HardDrive,
  Terminal,
  Wifi,
  BrainCircuit,
  Camera,
  Radio,
  Search,
  Layers
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon strings to components
const iconMap = {
  FileCode,
  Coffee,
  Cpu,
  Database,
  Code,
  Layout,
  Palette,
  Sparkles,
  Server,
  Cloud,
  Eye,
  ScanFace,
  BarChart3,
  Binary,
  TableProperties,
  Network,
  GitBranch,
  Workflow,
  Boxes,
  HardDrive,
  Terminal,
  Wifi,
  BrainCircuit,
  Camera,
  Radio,
  Layers
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white">
            Core Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Engineered proficiency across programming paradigms, deep learning toolkits, modern frontend ecosystems, and distributed databases.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 p-1.5 rounded-2xl glass-panel border border-slate-800 self-center md:self-auto">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. ArcFace, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl glass-panel border border-slate-800 focus:border-cyan-400 focus:outline-none text-slate-200 placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group shadow-sm hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Category Tag */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Level & Animated Progress Meter */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                      <span className="text-slate-400 text-[11px]">Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_8px_#06b6d4]"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No technical skills found matching "<span className="text-cyan-300">{searchQuery}</span>". Try another query!
          </div>
        )}

      </div>
    </section>
  );
}
