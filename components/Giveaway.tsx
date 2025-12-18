import React from 'react';
import { Gift, Star, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

interface GiveawayProps {
  onRegister: () => void;
}

export const Giveaway: React.FC<GiveawayProps> = ({ onRegister }) => {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-coral-400 mb-8 shadow-soft animate-float hover:scale-110 transition-transform cursor-pointer">
                  <Gift size={32} />
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-800">
                  🎁 Подарки для участников эфира
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                <Reveal delay={0.2}>
                  <div className="glass p-6 rounded-2xl h-full">
                      <h4 className="font-bold text-stone-800 mb-4 border-b border-stone-200 pb-2">Что разыгрываем:</h4>
                      <ul className="space-y-2 text-stone-600">
                          {["Оздоровительные подарки", "Наборы продукции", "Участие в программе"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Star size={12} className="text-fresh-400" /> {item}
                            </li>
                          ))}
                      </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="glass p-6 rounded-2xl h-full">
                      <h4 className="font-bold text-stone-800 mb-4 border-b border-stone-200 pb-2">Условия участия:</h4>
                      <ul className="space-y-2 text-stone-600">
                          {["Присутствовать на эфире", "Быть подписанным на канал", "Участвовать в чате"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-fresh-500" /> {item}
                            </li>
                          ))}
                      </ul>
                  </div>
                </Reveal>
            </div>

            <Reveal delay={0.4}>
              <Button onClick={onRegister} variant="secondary">
                  Принять участие
              </Button>
            </Reveal>
        </div>
    </section>
  );
};