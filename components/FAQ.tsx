import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';
import { Reveal } from './Reveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions: FAQItem[] = [
    {
      question: "Эфир бесплатный?",
      answer: "Да, участие в эфире полностью бесплатное."
    },
    {
      question: "Можно ли просто послушать?",
      answer: "Конечно. Но мы рекомендуем участвовать активно, чтобы задать вопросы специалисту и участвовать в розыгрыше."
    },
    {
      question: "Будет ли запись?",
      answer: "Запись планируется, но бонусы и розыгрыши доступны только в прямом эфире."
    },
    {
      question: "Подойдёт ли, если есть сомнения?",
      answer: "Этот эфир как раз для того, чтобы разобраться в процессах организма. Мы даем научную базу, а не магические таблетки."
    }
  ];

  return (
    <section className="py-24 bg-white/40">
        <div className="container mx-auto px-4 max-w-3xl">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-stone-800">Частые вопросы</h2>
            </Reveal>
            
            <div className="space-y-4">
                {questions.map((item, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="glass p-6 rounded-2xl cursor-pointer group hover:bg-white transition duration-300" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex justify-between items-center font-bold text-stone-800 text-lg select-none">
                            {item.question}
                            <div className={`w-8 h-8 rounded-full bg-fresh-100 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                 <ChevronDown size={14} className="text-fresh-600" />
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 mt-4 border-t border-stone-100 pt-4' : 'max-h-0 opacity-0'}`}>
                            <p className="text-stone-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                  </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};