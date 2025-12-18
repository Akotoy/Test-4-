import React from 'react';
import { X } from 'lucide-react';
import { Reveal } from './Reveal';

export const Problems: React.FC = () => {
  const problems = [
    "Вздутие и тяжесть даже от обычной еды",
    "Нестабильный стул",
    "Усталость без причины",
    "Тягу к сладкому",
    "Ощущение «перегруженного» тела"
  ];

  return (
    <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-stone-800">
                  После праздников вы можете заметить:
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {problems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`glass h-full p-6 rounded-2xl flex items-start gap-4 ${i === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${i === 4 ? 'md:col-span-2' : ''}`}>
                        <div className="mt-1 w-6 h-6 rounded-full bg-coral-100 flex-shrink-0 flex items-center justify-center text-coral-500 transition-transform duration-300 hover:rotate-90">
                            <X size={14} />
                        </div>
                        <p className="text-stone-700 font-medium">{item}</p>
                    </div>
                  </Reveal>
                ))}
            </div>

            <div className="text-center">
                <Reveal delay={0.3}>
                  <div className="inline-block p-6 bg-fresh-50 border border-fresh-100 rounded-2xl relative hover:shadow-glow transition-shadow duration-500">
                      <p className="text-lg md:text-xl font-medium text-stone-800">
                          Это не слабость организма. <br />
                          <span className="text-fresh-600 font-bold">Это реакция на перегрузку.</span>
                      </p>
                  </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};