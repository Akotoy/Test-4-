import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Bridge: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-fresh-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-stone-800">
                  Почему мы говорим о трёхэтапном восстановлении
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
                  В нутрициологии восстановление ЖКТ строится по этапам:
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                  <div className="glass px-8 py-4 rounded-xl font-bold text-stone-700">1. Подготовка</div>
                  <ArrowRight className="text-stone-400 rotate-90 md:rotate-0" />
                  <div className="glass px-8 py-4 rounded-xl font-bold text-stone-700">2. Очищение</div>
                  <ArrowRight className="text-stone-400 rotate-90 md:rotate-0" />
                  <div className="glass px-8 py-4 rounded-xl font-bold text-stone-700">3. Восстановление</div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-stone-500 italic max-w-xl mx-auto text-sm md:text-base">
                  В конце эфира мы кратко расскажем, почему именно так построена наша детокс-программа и как она вписывается в этот подход. <br />
                  <span className="font-semibold text-stone-700 not-italic block mt-2">Без агрессивных продаж.</span>
              </p>
            </Reveal>
        </div>
    </section>
  );
};