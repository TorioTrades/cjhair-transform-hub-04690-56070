import { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const remove = setTimeout(() => setVisible(false), 1800);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <img
        src="/logo.png"
        alt="Auxiliary"
        className="w-24 md:w-32 animate-pulse-glow"
        style={{ filter: 'drop-shadow(0 0 20px rgba(193,18,31,0.5))' }}
      />
    </div>
  );
};

export default Preloader;
