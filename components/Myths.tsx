import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export const Myths: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-stone-800">
                  Почему организм нельзя «почистить» за один шаг
              </h2>
            </Reveal>

            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2 space-y-6">
                    {[
                      "Разовые чистки убирают симптомы, но не причину",
                      "Без восстановления ЖКТ эффект не держится",
                      "Резкие методы могут усилить перегрузку"
                    ].map((text, i) => (
                      <Reveal key={i} delay={i * 0.1}>
                        <div className="flex items-center gap-4 text-stone-700 p-3 rounded-lg hover:bg-white/30 transition-colors">
                            <AlertCircle className="text-coral-400 shrink-0" size={24} />
                            <span>{text}</span>
                        </div>
                      </Reveal>
                    ))}
                </div>

                <div className="lg:w-1/2 w-full">
                    <Reveal delay={0.3}>
                      <div className="glass-strong p-8 rounded-3xl border-l-4 border-fresh-500 shadow-soft transform hover:scale-[1.02] transition-transform duration-500">
                          <p className="text-lg font-medium text-stone-600 mb-2">Главный инсайт:</p>
                          <p className="text-2xl md:text-3xl font-bold text-stone-800 leading-tight">
                              Организм нельзя “почистить” одним шагом. <br />
                              <span className="text-fresh-600">Нужна система.</span>
                          </p>
                      </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
  );
};