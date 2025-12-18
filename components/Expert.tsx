import React from 'react';
import { Award } from 'lucide-react';
import { Reveal } from './Reveal';

export const Expert: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">Эфир проводит нутрициолог</h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-strong rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-soft">
                  <div className="w-full md:w-1/3 flex justify-center">
                      <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-white shadow-xl group">
                          <img src="https://picsum.photos/id/64/800/800" 
                               alt="Елена Соколова" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                      </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-stone-800 mb-2">Елена Соколова</h3>
                      <div className="inline-block px-3 py-1 bg-fresh-50 text-fresh-600 text-sm font-semibold rounded-lg mb-6">
                          Дипломированный нутрициолог
                      </div>
                      <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                          Специалист по функциональному питанию. Автор методики системного восстановления ЖКТ без жестких протоколов. Более 1500 успешных кейсов.
                      </p>
                      
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 inline-block hover:shadow-md transition-shadow">
                          <p className="text-sm font-medium text-stone-500 flex items-center justify-center md:justify-start gap-2">
                              <Award className="text-fresh-500" size={16} />
                              Эфир ведёт специалист, а не продавец «чудо-средств».
                          </p>
                      </div>
                  </div>
              </div>
            </Reveal>
        </div>
    </section>
  );
};