import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  FileDown,
  Terminal,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-cyan-500/15 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-2.5 group"
          >
            <div className="px-2.5 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-400 p-[1px] shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-md dark:group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 dark:bg-[#030712] rounded-[11px] px-2 flex items-center justify-center">
                <span className="font-mono font-bold text-xs sm:text-sm text-cyan-400 tracking-tight lowercase">
                  kubz<span className="text-teal-400">.</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Kubendiran M
              </span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400/90 -mt-0.5 font-medium">
                Software &amp; AI &bull; Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-700 dark:text-cyan-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-cyan-100/70 dark:bg-cyan-500/15 border border-cyan-300/80 dark:border-cyan-500/30 rounded-full -z-10 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-transparent hover:border-slate-300 dark:hover:border-slate-700/60 transition-all shadow-xs dark:shadow-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xs dark:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center space-x-1 px-4 py-1.5 rounded-xl text-xs font-semibold text-white dark:text-black bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-400 hover:from-cyan-500 hover:to-teal-400 transition-all shadow-sm shadow-cyan-500/20 dark:shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden border-b border-slate-200 dark:border-cyan-500/20 px-6 py-5 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30"
                >
                  <FileDown className="w-4 h-4" />
                  <span>View / Download Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center w-full py-2.5 rounded-lg text-xs font-semibold text-white dark:text-black bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-400"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
