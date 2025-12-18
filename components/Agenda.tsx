import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';

interface AgendaProps {
  onRegister: () => void;
}

export const Agenda: React.FC<AgendaProps> = ({ onRegister }) => {
  const points = [
    "Что реально происходит с кишечником после переедания",
    "Почему появляются вздутие, усталость и тяга к сладкому",
    "Почему без восстановления ЖКТ эффект не держится",
    "Как выглядит безопасный системный подход",
    "Кому детокс подходит, а кому нет"
  ];

  return (
    <section className="py-24 bg-white/40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-stone-800">
                  На эфире мы разберём по полочкам:
              </h2>
            </Reveal>

            <div className="space-y-4">
                {points.map((p, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="glass p-6 rounded-2xl flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-fresh-500 flex-shrink-0 animate-pulse-slow"></div>
                        <p className="text-stone-800 font-medium">{p}</p>
                    </div>
                  </Reveal>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Reveal delay={0.5}>
                  <Button onClick={onRegister} variant="primary">
                      Записаться на эфир
                  </Button>
                </Reveal>
            </div>
        </div>
    </section>
  );
};