import React, { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { ArcLayout } from './layout/ArcLayout';

export const ArcContact = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <ArcLayout onNavigate={onNavigate} currentPage="contact">
      <div className="pt-20 px-6 max-w-[1920px] mx-auto min-h-screen grid md:grid-cols-2 gap-20">
          
          <div>
              <h1 className="text-6xl md:text-8xl tracking-tighter mb-12">CONTACT</h1>
              <p className="text-xl text-gray-400 mb-20 max-w-md">
                  We are currently accepting new residential and commercial commissions for 2027.
              </p>

              <div className="space-y-12">
                  <div>
                      <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white mb-4">
                          <MapPin size={14} /> Berlin Studio
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                          Auguststraße 14<br/>
                          10117 Berlin, Germany
                      </p>
                  </div>
                  <div>
                      <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white mb-4">
                          <MapPin size={14} /> Tokyo Studio
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                          2-14-6 Minami-Aoyama<br/>
                          Minato-ku, Tokyo 107-0062
                      </p>
                  </div>
                  <div>
                      <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white mb-4">
                          <Mail size={14} /> Inquiries
                      </h3>
                      <p className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                          hello@arc.design
                      </p>
                  </div>
              </div>
          </div>

          <div className="bg-[#111] p-12 rounded-lg border border-white/5">
              <h2 className="text-2xl font-medium mb-8">Start a Project</h2>
              {isSent ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
                          <Check size={32} />
                      </div>
                      <h3 className="text-2xl font-medium mb-2">Request Received</h3>
                      <p className="text-gray-500">We will be in touch shortly.</p>
                  </div>
              ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                              <label className="text-xs font-mono uppercase text-gray-500">Name</label>
                              <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white transition-colors" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs font-mono uppercase text-gray-500">Email</label>
                              <input required type="email" className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                          </div>
                      </div>
                      
                      <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-gray-500">Project Type</label>
                          <div className="relative">
                            <select className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white transition-colors text-white appearance-none rounded-none">
                                <option className="bg-black">Residential</option>
                                <option className="bg-black">Commercial</option>
                                <option className="bg-black">Cultural</option>
                                <option className="bg-black">Other</option>
                            </select>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-gray-500">Budget Range</label>
                          <div className="relative">
                            <select className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white transition-colors text-white appearance-none rounded-none">
                                <option className="bg-black">€500k - €1M</option>
                                <option className="bg-black">€1M - €5M</option>
                                <option className="bg-black">€5M+</option>
                            </select>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-gray-500">Message</label>
                          <textarea required className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white transition-colors min-h-[100px] resize-none" placeholder="Tell us about your vision..."></textarea>
                      </div>

                      <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                          Send Request <ArrowRight size={16} />
                      </button>
                  </form>
              )}
          </div>

      </div>
    </ArcLayout>
  );
};
