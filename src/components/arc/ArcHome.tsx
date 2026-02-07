import React from 'react';
import { ArrowRight, ArrowUpRight, Globe, MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArcLayout } from './layout/ArcLayout';

const GridLine = ({ vertical = false, className = "" }: { vertical?: boolean, className?: string }) => (
    <div className={`absolute bg-white/10 ${vertical ? 'w-px h-full top-0' : 'h-px w-full left-0'} ${className}`} />
);

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => (
    <div className={`overflow-hidden ${className}`}>
        <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
        >
            {text}
        </motion.div>
    </div>
);

export const ArcHome = ({ onNavigate }: { onNavigate: (page: string, id?: number) => void }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <ArcLayout onNavigate={onNavigate} currentPage="home">
            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex flex-col border-b border-white/10">
                <GridLine vertical className="left-1/4 hidden md:block" />
                <GridLine vertical className="left-2/4 hidden md:block" />
                <GridLine vertical className="left-3/4 hidden md:block" />

                <div className="flex-1 flex flex-col justify-center px-6 max-w-[1920px] mx-auto w-full relative z-10 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Est. 2026 — Berlin / Tokyo</span>
                            </div>
                            <h1 className="text-6xl md:text-[10rem] leading-[0.8] font-medium tracking-tighter mb-8">
                                <AnimatedText text="FUTURE" />
                                <AnimatedText text="LIVING" className="text-gray-600" />
                            </h1>
                        </div>
                        <div className="md:border-l border-white/10 md:pl-12 pb-4">
                            <p className="text-xl md:text-2xl text-gray-300 max-w-md leading-relaxed">
                                ARC redefines the boundaries between architecture, nature, and technology. We build spaces that breathe.
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <button onClick={() => onNavigate('projects')} className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                    View Projects
                                </button>
                                <button onClick={() => onNavigate('projects')} className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white transition-colors">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[40vh] md:h-[60vh] overflow-hidden w-full border-t border-white/10 cursor-pointer" onClick={() => onNavigate('project-detail', 3)}>
                         <motion.div style={{ y: y1 }} className="absolute inset-0">
                             <img 
                                src="https://images.unsplash.com/photo-1766322088147-2dae20085266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBjb25jcmV0ZSUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NzAyODQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                className="w-full h-[120%] object-cover opacity-60 grayscale"
                                alt="Brutalist Architecture"
                             />
                         </motion.div>
                         <div className="absolute bottom-6 left-6 md:left-auto md:right-6 bg-black/50 backdrop-blur px-4 py-2 border border-white/10 text-xs font-mono uppercase flex items-center gap-2 group hover:bg-white hover:text-black transition-colors">
                             Fig. 01 — Void Tower <ArrowUpRight size={12} />
                         </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Section */}
            <section className="border-b border-white/10">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    
                    {/* Block 1 */}
                    <div onClick={() => onNavigate('projects')} className="p-12 hover:bg-white/5 transition-colors group relative h-full cursor-pointer">
                        <div className="flex justify-between items-start mb-24">
                            <span className="text-xs font-mono text-gray-500">01</span>
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-3xl font-medium mb-4">Residential<br/>Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Crafting private sanctuaries that prioritize light, air, and material honesty.
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>

                    {/* Block 2 - Image */}
                    <div className="p-0 relative overflow-hidden group h-[400px] md:h-auto cursor-pointer" onClick={() => onNavigate('projects')}>
                        <img 
                            src="https://images.unsplash.com/photo-1699564838840-a3d87f3ddf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmUlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MDI4NDA3NXww&ixlib=rb-4.1.0&q=80&w=1080" 
                            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-8 left-8">
                            <div className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-2">
                                New Arrival
                            </div>
                            <div className="text-xl font-medium">The Mono Chair</div>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="p-12 bg-white text-black flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-xs font-mono font-bold">LATEST STATS</span>
                                <Globe size={20} />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <div className="text-5xl font-medium mb-2">142</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Projects Completed</div>
                                </div>
                                <div className="w-full h-px bg-black/10"></div>
                                <div>
                                    <div className="text-5xl font-medium mb-2">12</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Design Awards</div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => onNavigate('about')} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mt-12 group">
                            View Firm Profile <MoveRight className="transition-transform group-hover:translate-x-2" size={16} />
                        </button>
                    </div>

                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto border-b border-white/10">
                <div className="flex justify-between items-end mb-20">
                     <h2 className="text-4xl md:text-7xl tracking-tighter">SELECTED WORKS</h2>
                     <button onClick={() => onNavigate('projects')} className="hidden md:block text-xs font-mono uppercase border-b border-white pb-1">All Projects (84)</button>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {[
                        { title: "Concrete House", loc: "Kyoto, Japan", id: 1, img: "https://images.unsplash.com/photo-1758972581195-c27b9d3b1c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcwMjg0MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
                        { title: "Glass Pavilion", loc: "Oslo, Norway", id: 2, img: "https://images.unsplash.com/photo-1770146604974-c7067f0dc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyYWwlMjBkZXRhaWwlMjBjb25jcmV0ZSUyMGdsYXNzfGVufDF8fHx8MTc3MDI4NDA3NXww&ixlib=rb-4.1.0&q=80&w=1080" }
                    ].map((project, i) => (
                        <div key={i} onClick={() => onNavigate('project-detail', project.id)} className="bg-black group relative overflow-hidden aspect-[4/3] cursor-pointer">
                            <img src={project.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex justify-between">
                                    <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full">{project.loc}</span>
                                    <ArrowUpRight />
                                </div>
                                <h3 className="text-4xl font-medium">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Philosophy / Text Grid */}
            <section className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
                <div className="col-span-1 p-12">
                    <h3 className="text-sm font-mono uppercase text-gray-500 mb-8">Methodology</h3>
                    <p className="text-2xl leading-tight">
                        We don't just design buildings. We design <span className="text-gray-500">systems of living</span>.
                    </p>
                </div>
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {[
                        { title: "Sustainability", text: "Net-zero energy consumption is our baseline standard." },
                        { title: "Materiality", text: "We use raw, honest materials that age with dignity." },
                        { title: "Technology", text: "Smart home integration that feels invisible." },
                    ].map((item, i) => (
                        <div key={i} className="p-12 hover:bg-white/5 transition-colors">
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-6 text-xs">{i + 1}</div>
                            <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ArcLayout>
    );
};
