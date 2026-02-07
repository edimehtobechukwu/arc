import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArcLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const ArcLayout = ({ children, onNavigate, currentPage }: ArcLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'Studio' },
    { id: 'research', label: 'Research' },

    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black min-h-screen flex flex-col">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-[1920px] mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <button onClick={() => onNavigate('home')} className="text-3xl font-bold tracking-tighter">ARC</button>
            <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`hover:text-white transition-colors ${currentPage === link.id ? 'text-white underline decoration-white/30 underline-offset-4' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 text-xs font-mono uppercase hover:opacity-70">
              <Search size={14} /> Search
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="h-20 px-6 flex justify-between items-center border-b border-white/10">
              <button onClick={() => onNavigate('home')} className="text-3xl font-bold tracking-tighter">ARC</button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {['Home', 'Projects', 'Studio', 'Research', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'studio' ? 'about' : item.toLowerCase().replace(' ', '-'));
                    setIsMenuOpen(false);
                  }}
                  className="text-5xl md:text-7xl font-medium hover:text-gray-500 transition-colors tracking-tighter"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="p-8 border-t border-white/10 flex justify-between text-xs font-mono uppercase text-gray-500">
              <div>Berlin / Tokyo</div>
              <div>Est. 2026</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 max-w-[1920px] mx-auto w-full border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-8 cursor-pointer" onClick={() => onNavigate('home')}>ARC</h2>
            <div className="flex gap-8 text-xs font-mono uppercase text-gray-500">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Behance</a>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="text-right mb-8">
              <div className="text-2xl font-medium">Get in touch</div>
              <a href="mailto:hello@arc.design" className="text-gray-500 hover:text-white transition-colors">hello@arc.design</a>
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="SUBSCRIBE TO NEWSLETTER" className="bg-transparent border-b border-white/20 pb-2 w-64 text-xs font-mono focus:border-white outline-none uppercase placeholder:text-gray-700" />
              <button className="text-xs font-bold uppercase hover:text-gray-400">Submit</button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between text-[10px] font-mono uppercase text-gray-600">
          <div>© 2026 ARC Architects. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
