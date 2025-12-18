import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Biology } from './components/Biology';
import { Myths } from './components/Myths';
import { Agenda } from './components/Agenda';
import { Expert } from './components/Expert';
import { Bridge } from './components/Bridge';
import { Giveaway } from './components/Giveaway';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Global Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="blob-bg bg-fresh-300 w-96 h-96 rounded-full top-0 left-0 mix-blend-multiply opacity-40 animate-blob"></div>
          <div className="blob-bg bg-coral-300 w-96 h-96 rounded-full top-0 right-0 mix-blend-multiply opacity-40 animate-blob" style={{animationDelay: '2s'}}></div>
          <div className="blob-bg bg-yellow-200 w-80 h-80 rounded-full bottom-0 left-20 mix-blend-multiply opacity-40 animate-blob" style={{animationDelay: '4s'}}></div>
          <div className="blob-bg bg-fresh-100 w-[500px] h-[500px] rounded-full bottom-[-100px] right-[-100px] mix-blend-multiply opacity-40 animate-pulse-slow"></div>
      </div>

      <main className="relative z-10">
        <Hero onRegister={openModal} />
        <Problems />
        <Biology onRegister={openModal} />
        <Myths />
        <Agenda onRegister={openModal} />
        <Expert />
        <Bridge />
        <Giveaway onRegister={openModal} />
        <FAQ />
      </main>

      <Footer onRegister={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Sticky CTA Mobile */}
      <div className={`fixed bottom-6 left-4 right-4 z-50 transform transition-transform duration-500 md:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-32'}`}>
          <button onClick={openModal} className="w-full relative overflow-hidden bg-gradient-to-r from-fresh-500 to-fresh-600 text-white font-bold py-4 px-6 rounded-2xl shadow-soft hover:shadow-soft-hover transition active:scale-95">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
              Записаться на эфир
          </button>
      </div>
    </div>
  );
};

export default App;