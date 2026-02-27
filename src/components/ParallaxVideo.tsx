import { useParallax, useScrollReveal } from '@/hooks/useScrollReveal';

const VIDEO_URL = 'https://i.imgur.com/LfCkDP6.mp4';

const ParallaxVideo = () => {
  const parallaxRef = useParallax();
  const content = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={parallaxRef} className="relative h-[500px] md:h-[500px] overflow-hidden flex items-center justify-center" style={{ height: '500px' }}>
      <video
        autoPlay muted loop playsInline
        className="absolute inset-[-100px] w-full object-cover"
        style={{ height: 'calc(100% + 200px)' }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[rgba(10,10,10,0.4)] to-[#0a0a0a]" />

      <div ref={content.ref} className={`relative z-10 text-center px-6 transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-heading text-[1.8rem] md:text-[2.6rem] tracking-[4px] md:tracking-[8px] text-[#f1f1f1]" style={{ textShadow: '0 0 30px rgba(230,57,70,0.5)' }}>
          EVERY NIGHT IS<br />UNFORGETTABLE
        </h2>
        <p className="font-body text-[0.88rem] text-[rgba(255,255,255,0.7)] font-light mt-4">
          The biggest party in Novaliches, Quezon City
        </p>
        <button onClick={() => scrollTo('booking')} className="btn-pill mt-8">RESERVE YOUR SPOT</button>
      </div>
    </section>
  );
};

export default ParallaxVideo;
