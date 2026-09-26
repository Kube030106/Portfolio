import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Sparkles } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING SYSTEM ENVIRONMENT...');

  useEffect(() => {
    const steps = [
      { at: 20, text: 'CONFIGURING NEURAL GRAPH & ARCFACE...' },
      { at: 55, text: 'LOADING FULL-STACK & IOT REPOSITORIES...' },
      { at: 85, text: 'INITIALIZING INTERACTIVE PORTFOLIO...' },
      { at: 100, text: 'SYSTEM READY // WELCOME' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        const currentStep = steps.findLast(s => next >= s.at);
        if (currentStep) {
          setStatusText(currentStep.text);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 38);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white px-4 select-none"
      >
        {/* Ambient background glow */}
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-cyber-pulse" />

        <div className="relative z-10 w-full max-w-md p-6 rounded-2xl glass-panel-glow border border-cyan-500/30">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                Kubendiran.ai // Bootloader
              </span>
            </div>
            <Cpu className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Central Logo / Initials */}
          <div className="flex flex-col items-center my-6">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-600/20 to-teal-400/20 border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] mb-4">
              <span className="text-2xl font-bold font-mono tracking-tighter text-cyan-300">
                KM<span className="text-teal-400">.ai</span>
              </span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-black" />
              </div>
            </div>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Kubendiran M
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Computer Science (AI) &bull; Developer Portfolio
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1.5 text-cyan-300">
                <Terminal className="w-3 h-3" />
                <span className="truncate max-w-[260px]">{statusText}</span>
              </span>
              <span className="text-cyan-400 font-semibold">{progress}%</span>
            </div>

            <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-400 rounded-full shadow-[0_0_10px_#06b6d4]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          {/* Quick skip button */}
          <div className="mt-5 text-center">
            <button
              onClick={onFinish}
              className="text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
            >
              [ Press anywhere to skip ]
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
