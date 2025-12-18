import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Lock } from 'lucide-react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = 'https://t.me/durov'; // Simulate redirect
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-md" onClick={onClose}></div>
        
        <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md relative z-10 overflow-hidden transform transition-all scale-100 animate-fade-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-100 rounded-bl-[100%] z-0"></div>

            <div className="p-8 flex justify-between items-center relative z-10">
                <h3 className="text-2xl font-bold text-stone-800">Регистрация</h3>
                <button onClick={onClose} className="text-stone-400 hover:text-stone-600 transition w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100">
                    <X size={20} />
                </button>
            </div>
            
            <div className="p-8 pt-0 relative z-10">
                <p className="text-stone-500 text-sm mb-8">
                    Введите данные, чтобы получить ссылку на эфир.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                        <label className="block text-xs font-bold text-stone-400 uppercase mb-2 group-focus-within:text-fresh-500 transition">Ваше имя</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" 
                               className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-fresh-400 focus:bg-white focus:ring-4 focus:ring-fresh-50 outline-none transition text-stone-800 placeholder-stone-400" />
                    </div>
                    
                    <div className="group">
                        <label className="block text-xs font-bold text-stone-400 uppercase mb-2 group-focus-within:text-fresh-500 transition">Telegram</label>
                        <div className="relative">
                            <input type="text" required value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder="@username" 
                                   className="w-full pl-5 px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-fresh-400 focus:bg-white focus:ring-4 focus:ring-fresh-50 outline-none transition text-stone-800 placeholder-stone-400" />
                        </div>
                    </div>
                    
                    <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-fresh-500 to-fresh-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition flex justify-center items-center gap-3 mt-4 disabled:opacity-75">
                        {isLoading ? 'Загрузка...' : (
                          <><span>Завершить регистрацию</span> <ArrowRight size={20} /></>
                        )}
                    </button>
                </form>
            </div>
            
            <div className="bg-stone-50 px-8 py-4 text-center border-t border-stone-100 relative z-10">
                <p className="text-xs text-stone-500 flex justify-center items-center gap-2">
                    <Lock size={12} className="text-fresh-400" /> Данные защищены
                </p>
            </div>
        </div>
    </div>
  );
};