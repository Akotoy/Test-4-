import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const now = new Date();
    let targetYear = now.getFullYear();
    const targetDate = new Date(`${targetYear}-12-29T19:00:00`);
    if (now > targetDate) { targetYear += 1; }
    const finalDate = new Date(`${targetYear}-12-29T19:00:00`).getTime();

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = finalDate - currentTime;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Unit = ({ val, label }: { val: number; label: string }) => (
    <div className="text-center">
        <span className="text-2xl font-bold text-stone-700">{val.toString().padStart(2, '0')}</span>
        <span className="text-xs text-stone-500 block">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-6 opacity-80 scale-90">
      <Unit val={timeLeft.days} label="дней" />
      <div className="text-center"><span className="text-2xl font-bold text-stone-700">:</span></div>
      <Unit val={timeLeft.hours} label="часов" />
      <div className="text-center"><span className="text-2xl font-bold text-stone-700">:</span></div>
      <Unit val={timeLeft.minutes} label="минут" />
    </div>
  );
};