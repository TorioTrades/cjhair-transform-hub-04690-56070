import { useScrollReveal } from '@/hooks/useScrollReveal';

const VIDEO_URL = 'https://i.imgur.com/LfCkDP6.mp4';

const VIPSection = () => {
  const content = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[400px] md:h-[400px] overflow-hidden flex items-center justify-center">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[rgba(10,10,10,0.5)] to-[#0a0a0a]" />

      <div ref={content.ref} className={`relative z-10 text-center transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-accent italic text-[1.8rem] md:text-[2.4rem] tracking-[3px] text-gold-light" style={{ textShadow: '0 0 30px rgba(240,208,120,0.4)' }}>
          Super VIP
        </p>
        <button onClick={() => scrollTo('booking')} className="btn-pill-gold mt-6">BOOK TABLE NOW</button>
      </div>
    </section>
  );
};

export default VIPSection;
