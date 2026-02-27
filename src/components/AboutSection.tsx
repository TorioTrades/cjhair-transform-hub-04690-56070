import { useScrollReveal } from '@/hooks/useScrollReveal';

const VIDEO_URL = 'https://i.imgur.com/LfCkDP6.mp4';

const AboutSection = () => {
  const left = useScrollReveal();
  const right = useScrollReveal();

  return (
    <section id="about" className="w-full grid md:grid-cols-2">
      {/* Left - Video */}
      <div
        ref={left.ref}
        className={`relative h-[220px] md:h-auto min-h-[400px] overflow-hidden transition-all duration-800 ${left.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
      >
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(139,0,0,0.4)]" />
      </div>

      {/* Right - Text */}
      <div
        ref={right.ref}
        className={`flex flex-col justify-center p-10 md:p-[50px] transition-all duration-800 ${right.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
        style={{ background: 'linear-gradient(135deg, #8b0000, #5a0000)' }}
      >
        <h2 className="font-heading text-[2rem] tracking-[4px] text-[#f1f1f1]">ABOUT AUXILIARY</h2>
        <p className="font-body text-[0.82rem] font-light text-[rgba(255,255,255,0.85)] leading-[1.9] mt-5">
          Welcome to Auxiliary Bar and Lounge, Novaliches' hottest nightlife destination. Renowned for its electrifying atmosphere and unparalleled musical performances, Auxiliary brings the best of the Manila nightlife scene to Quezon City. Featuring top DJs like Tricia Cosio, Shy Dee Wong, LA Pascual, and more, alongside resident MCs Iver, Pain, and Monde, every night is an unforgettable experience. Whether you're looking for a chill lounge vibe or a full-on party, Auxiliary has something for everyone.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
