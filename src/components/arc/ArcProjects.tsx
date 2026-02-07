import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ArcLayout } from './layout/ArcLayout';
import { projects } from './projectData';

const categories = ['All', 'Residential', 'Commercial', 'Research'];

export const ArcProjects = ({ onNavigate }: { onNavigate: (page: string, id?: number) => void }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <ArcLayout onNavigate={onNavigate} currentPage="projects">
      <div className="pt-20 px-6 max-w-[1920px] mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h1 className="text-6xl md:text-9xl tracking-tighter">PROJECTS</h1>
            <div className="flex gap-8 text-sm font-mono uppercase tracking-widest mt-8 md:mt-0">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`hover:text-white transition-colors ${activeCategory === cat ? 'text-white border-b border-white' : 'text-gray-500'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
            {filteredProjects.map((project) => (
                <div 
                    key={project.id} 
                    onClick={() => onNavigate('project-detail', project.id)}
                    className="bg-black group relative aspect-square overflow-hidden cursor-pointer"
                >
                    <img src={project.img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full">{project.category}</span>
                            <ArrowUpRight className="text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-gray-400 mb-2 uppercase">{project.loc}</div>
                            <h3 className="text-3xl font-medium">{project.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </ArcLayout>
  );
};
