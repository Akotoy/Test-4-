import React from 'react';
import { Activity, Bug, Droplets, Flame } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

interface BiologyProps {
  onRegister?: () => void;
}

export const Biology: React.FC<BiologyProps> = ({ onRegister }) => {
  const items = [
    {
      icon: <Activity size={24} />,
      colorClass: "text-coral-400",
      title: "Перегрузка кишечника",
      desc: "Замедляется работа, появляется тяжесть и вздутие."
    },
    {
      icon: <Bug size={24} />,
      colorClass: "text-fresh-500",
      title: "Нарушение микрофлоры",
      desc: "Полезные бактерии вытесняются, страдает пищеварение."
    },
    {
      icon: <Droplets size={24} />,
      colorClass: "text-yellow-500",
      title: "Застой желчи",
      desc: "Ухудшается переваривание жиров и общее самочувствие."
    },
    {
      icon: <Flame size={24} />,
      colorClass: "text-red-400",
      title: "Воспаление слизистой",
      desc: "Усвоение пищи снижается, появляется дискомфорт."
    }
  ];

  return (
    <section className="py-24 bg-white/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-stone-800">
                  Что происходит с организмом после переедания
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {items.map((item, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                      <div className="flex gap-6 items-start group p-4 rounded-xl hover:bg-white/40 transition-colors duration-300">
                          <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center ${item.colorClass} flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition duration-300`}>
                              {item.icon}
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                              <p className="text-stone-600">{item.desc}</p>
                          </div>
                      </div>
                    </Reveal>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Reveal delay={0.4}>
                  <p className="text-xl font-serif italic text-stone-600 mb-8">
                      «Это цепная реакция, а не одна проблема.»
                  </p>
                  {onRegister && (
                    <Button onClick={onRegister} variant="outline">
                        Записаться на эфир
                    </Button>
                  )}
                </Reveal>
            </div>
        </div>
    </section>
  );
};