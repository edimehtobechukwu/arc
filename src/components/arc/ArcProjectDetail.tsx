import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArcLayout } from './layout/ArcLayout';
import { projects } from './projectData';

export const ArcProjectDetail = ({ onNavigate, projectId }: { onNavigate: (page: string, id?: number) => void, projectId: number }) => {
  const project = projects.find(p => p.id === projectId) || projects[0];
  const nextProjectIndex = (projects.findIndex(p => p.id === projectId) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <ArcLayout onNavigate={onNavigate} currentPage="projects">
      <div className="bg-black text-white min-h-screen">
        
        {/* Header / Nav Back */}
        <div className="fixed top-24 left-6 z-40">
            <button 
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors bg-black/50 backdrop-blur px-4 py-2 rounded-full border border-white/10"
            >
                <ArrowLeft size={14} /> Back to Projects
            </button>
        </div>

        {/* Hero Image */}
        <div className="h-[80vh] relative w-full overflow-hidden">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
            >
                <img src={project.img} className="w-full h-full object-cover grayscale opacity-80" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <div className="max-w-[1920px] mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-9xl font-medium tracking-tighter uppercase leading-[0.8]"
                        >
                            {project.title}
                        </motion.h1>
                        <div className="flex gap-8 mt-8 text-xs font-mono uppercase tracking-widest text-gray-400">
                            <span>{project.loc}</span>
                            <span>{project.year}</span>
                            <span>{project.category}</span>
                        </div>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-4xl font-light">{project.area}</div>
                        <div className="text-xs font-mono uppercase text-gray-500">Total Area</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-[1920px] mx-auto px-6 py-24 grid md:grid-cols-12 gap-12">
            
            {/* Left Column: Description */}
            <div className="md:col-span-4 space-y-12 sticky top-32 self-start">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2">The Brief</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                        {project.challenge.text}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <div className="text-xs font-mono uppercase text-gray-500 mb-1">Client</div>
                        <div>{project.client}</div>
                    </div>
                    <div>
                        <div className="text-xs font-mono uppercase text-gray-500 mb-1">Status</div>
                        <div>Completed</div>
                    </div>
                    {project.stats.slice(0,2).map((stat, i) => (
                        <div key={i}>
                            <div className="text-xs font-mono uppercase text-gray-500 mb-1">{stat.label}</div>
                            <div>{stat.val}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Gallery */}
            <div className="md:col-span-8 space-y-24">
                
                {/* Main Gallery */}
                <div className="space-y-4">
                    {project.materials.map((mat, i) => (
                        <div key={i} className="relative group overflow-hidden">
                            <img src={mat.img} className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-4 left-4 text-xs font-mono uppercase bg-black/50 px-2 py-1 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                                {mat.title} — {mat.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section (Simplified) */}
                <div className="bg-white text-black p-12">
                    <h3 className="text-4xl tracking-tighter mb-8">Process Diagram</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-600 mb-8">{project.process.step1.desc}</p>
                            <div className="space-y-4 border-l border-black pl-4">
                                <div className="text-sm font-bold uppercase">{project.process.step1.title}</div>
                                <div className="text-sm font-bold uppercase text-gray-400">{project.process.step2.title}</div>
                            </div>
                        </div>
                        <div className="aspect-square bg-[#f0f0f0] flex items-center justify-center p-8">
                            <img src={project.process.sketch} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Next Project Footer */}
        <div 
            onClick={() => onNavigate('project-detail', nextProject.id)}
            className="h-[40vh] border-t border-white/10 flex items-center justify-between px-6 md:px-24 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer group relative overflow-hidden"
        >
             {/* Background Image on Hover */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                 <img src={nextProject.img} className="w-full h-full object-cover grayscale opacity-20" />
             </div>

             <div className="relative z-10">
                 <div className="text-xs font-mono uppercase tracking-widest mb-2 opacity-50">Next Project</div>
                 <h2 className="text-5xl md:text-8xl tracking-tighter uppercase">{nextProject.title}</h2>
             </div>
             <ArrowRight className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" size={48} />
        </div>

      </div>
    </ArcLayout>
  );
};
