import React from 'react';

interface FooterProps {
  onRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegister }) => {
  return (
    <>
      {/* Final CTA */}
      <section className="py-24 bg-stone-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="blob-bg bg-fresh-600 w-96 h-96 rounded-full top-0 left-1/2 opacity-20 animate-blob"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                  Разберитесь, что происходит с вашим организмом — спокойно и безопасно
              </h2>
              <button onClick={onRegister} className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-stone-900 transition-all duration-300 bg-white rounded-full hover:bg-fresh-50 shadow-glow overflow-hidden mb-6">
                  <span className="relative z-10">👉 Записаться на эфир 29 декабря</span>
              </button>
              <p className="text-stone-400 text-sm">
                  Регистрация бесплатная. Количество участников ограничено форматом эфира.
              </p>
          </div>
      </section>

      {/* Footer Links */}
      <footer className="py-8 bg-stone-900 text-center text-stone-500 text-xs border-t border-stone-800">
          <div className="container mx-auto px-4">
              <p className="mb-2">&copy; 2024 Елена Соколова. Все права защищены.</p>
              <div className="flex justify-center gap-6">
                  <a href="#" className="hover:text-stone-300 transition">Политика конфиденциальности</a>
                  <a href="#" className="hover:text-stone-300 transition">Публичная оферта</a>
              </div>
          </div>
      </footer>
    </>
  );
};