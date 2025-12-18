import React from 'react';
import { Calendar, Video, Check } from 'lucide-react';
import { Button } from './Button';
import { Countdown } from './Countdown';
import { Reveal } from './Reveal';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative max-w-6xl">
            
            {/* Top Label */}
            <div className="flex justify-center mb-8">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white shadow-sm hover:scale-105 transition-transform duration-500 cursor-default">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fresh-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fresh-500"></span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-fresh-600">Бесплатный эфир с нутрициологом</span>
                  </div>
                </Reveal>
            </div>

            {/* Headlines */}
            <div className="text-center mb-10 relative z-10">
                <Reveal delay={0.1}>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-stone-800 mb-6 drop-shadow-sm">
                      Как восстановить организм <br />
                      после новогодних застолий <br />
                      <span className="text-gradient italic relative inline-block">
                        и вернуть лёгкость без резких “чисток”
                      </span>
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-medium leading-relaxed">
                      О том, что реально происходит с кишечником после переедания <br className="hidden md:block" />
                      и как безопасно восстановиться.
                  </p>
                </Reveal>
            </div>

            {/* Date & Format */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <div className="glass px-8 py-4 rounded-2xl flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-fresh-50 flex items-center justify-center text-fresh-500 shadow-inner group-hover:scale-110 transition-transform">
                          <Calendar size={20} />
                      </div>
                      <div>
                          <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Дата</div>
                          <div className="font-bold text-stone-800">29 декабря</div>
                      </div>
                  </div>
                  <div className="glass px-8 py-4 rounded-2xl flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-coral-50 flex items-center justify-center text-coral-500 shadow-inner group-hover:scale-110 transition-transform">
                          <Video size={20} />
                      </div>
                      <div>
                          <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Формат</div>
                          <div className="font-bold text-stone-800">Онлайн • Bizon</div>
                      </div>
                  </div>
              </div>
            </Reveal>

            {/* Timer */}
            <Reveal delay={0.4}>
              <Countdown />
            </Reveal>

            {/* CTA */}
            <div className="text-center relative z-20 mt-12">
                <Reveal delay={0.5}>
                  <div className="flex flex-col items-center">
                    <Button onClick={onRegister} variant="primary">
                        Записаться на бесплатный эфир
                    </Button>
                    
                    {/* Microtrust */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-stone-500 font-medium">
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full border border-white/50 hover:bg-white transition-colors">
                            <Check size={14} className="text-fresh-500" /> Без запугивания
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full border border-white/50 hover:bg-white transition-colors">
                            <Check size={14} className="text-fresh-500" /> Системный подход
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full border border-white/50 hover:bg-white transition-colors">
                            <Check size={14} className="text-fresh-500" /> Практические рекомендации
                        </span>
                    </div>
                  </div>
                </Reveal>
            </div>
        </div>
    </header>
  );
};