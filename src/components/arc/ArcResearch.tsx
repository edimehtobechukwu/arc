import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ArcLayout } from './layout/ArcLayout';

const articles = [
  { category: "Materiality", title: "The Ethics of Concrete in 2026", date: "Oct 12, 2025" },
  { category: "Urbanism", title: "Vertical Gardens: Myth vs Reality", date: "Sep 28, 2025" },
  { category: "Technology", title: "AI as a Design Partner", date: "Aug 15, 2025" },
  { category: "Theory", title: "Silence in Architecture", date: "Jul 02, 2025" }
];

export const ArcResearch = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <ArcLayout onNavigate={onNavigate} currentPage="research">
      <div className="pt-20 px-6 max-w-[1920px] mx-auto min-h-screen">
          <h1 className="text-6xl md:text-9xl tracking-tighter mb-20">RESEARCH</h1>

          <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="relative h-[600px] border border-white/10 p-8 flex flex-col justify-end group cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="absolute top-8 left-8 text-xs font-mono uppercase border border-white/30 px-2 py-1 rounded-full">Featured</div>
                  <h2 className="text-4xl font-medium mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
                      Beyond Brutalism: <br/> The New Softness
                  </h2>
                  <p className="text-gray-500 mb-8 max-w-md">
                      Exploring how bio-materials are reshaping the hard edges of contemporary architecture. A 5-year study on living facades.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      Read Paper <ArrowUpRight size={14} />
                  </div>
              </div>

              <div>
                  {articles.map((article, i) => (
                      <div key={i} className="border-b border-white/10 py-8 flex justify-between items-center group cursor-pointer hover:pl-4 transition-all">
                          <div>
                              <div className="flex items-center gap-4 mb-2">
                                  <span className="text-xs font-mono text-[#C4F240] uppercase">{article.category}</span>
                                  <span className="text-xs font-mono text-gray-600">{article.date}</span>
                              </div>
                              <h3 className="text-2xl font-medium group-hover:text-gray-300 transition-colors">{article.title}</h3>
                          </div>
                          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </ArcLayout>
  );
};
