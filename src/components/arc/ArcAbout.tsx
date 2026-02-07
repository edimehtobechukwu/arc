import React from 'react';
import { ArcLayout } from './layout/ArcLayout';

export const ArcAbout = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    return (
        <ArcLayout onNavigate={onNavigate} currentPage="about">
            <div className="pt-20 px-6 max-w-[1920px] mx-auto min-h-screen">

                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-20 mb-32">
                    <div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">THE FIRM</h1>
                    </div>
                    <div className="pt-4">
                        <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                            ARC is an architectural research collaborative founded on the belief that the built environment shapes human consciousness.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                            Established in 2026, we operate globally with studios in Berlin and Tokyo. Our work spans residential, commercial, and cultural sectors, united by a commitment to rigorous simplicity and material innovation.
                        </p>
                    </div>
                </div>

                {/* Team */}
                <div className="mb-32">
                    <h2 className="text-xs font-mono uppercase text-gray-500 mb-12 border-b border-white/10 pb-4">Principal Architects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Nivlek Hemide", role: "Founding Partner", img: "https://images.unsplash.com/photo-1581430086429-bd6cf0788efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwb3J0cmFpdCUyMGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwMjg0Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
                            { name: "Kenji Sato", role: "Design Director", img: "https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbW9kZWwlMjBtaW5pbWFsJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
                            { name: "Marcus Thorne", role: "Technical Lead", img: "https://images.unsplash.com/photo-1553601581-8a1f1010efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGdsYXNzJTIwZmFjYWRlfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-900">
                                    <img src={member.img} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                                <h3 className="text-xl font-medium">{member.name}</h3>
                                <div className="text-sm text-gray-500 font-mono uppercase">{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards Table */}
                <div className="mb-20">
                    <h2 className="text-xs font-mono uppercase text-gray-500 mb-8 border-b border-white/10 pb-4">Recognition</h2>
                    <div className="w-full">
                        {[
                            { year: "2026", award: "Pritzker Prize (Shortlist)", project: "Void Tower" },
                            { year: "2025", award: "RIBA International Prize", project: "Concrete House" },
                            { year: "2025", award: "AIA Honor Award", project: "Glass Pavilion" },
                            { year: "2024", award: "Dezeen Awards - Architect of the Year", project: "-" }
                        ].map((item, i) => (
                            <div key={i} className="grid grid-cols-4 py-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                                <div className="font-mono text-gray-500">{item.year}</div>
                                <div className="col-span-2 font-medium">{item.award}</div>
                                <div className="text-right text-gray-500">{item.project}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </ArcLayout>
    );
};
