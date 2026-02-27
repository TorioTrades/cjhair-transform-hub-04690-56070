import { useScrollReveal } from '@/hooks/useScrollReveal';

const djs = [
  { name: 'DJ TRICIA COSIO', role: 'Resident DJ' },
  { name: 'SHY DEE WONG', role: 'Resident DJ' },
  { name: 'LA PASCUAL', role: 'DJ' },
  { name: 'CHIN LY', role: 'DJ' },
  { name: 'DJ DAN', role: 'DJ' },
];

const FeaturedDJs = () => {
  const title = useScrollReveal();
  const cards = useScrollReveal(0.1);

  return (
    <section className="py-[100px] px-6 bg-background">
      <div ref={title.ref} className={`text-center mb-14 transition-all duration-700 ${title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-heading text-[2rem] tracking-[5px] text-[#f1f1f1]">FEATURED DJS</h2>
        <p className="font-heading text-[1.6rem] tracking-[4px] text-red-glow mt-1">AND UNMATCHED PERFORMANCES</p>
        <p className="font-body text-[0.82rem] text-muted-foreground font-light max-w-[540px] mx-auto mt-4">
          Auxiliary showcases the hottest DJs in the metro, delivering electrifying sets, immersive light shows, and an atmosphere that keeps the crowd moving all night long.
        </p>
      </div>

      <div ref={cards.ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[800px] mx-auto">
        {djs.map((dj, i) => (
          <div
            key={dj.name}
            className={`glass rounded-xl p-5 text-center hover:border-red-glow hover:bg-[rgba(193,18,31,0.06)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(193,18,31,0.2)] transition-all duration-300 ${cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: cards.isVisible ? `${i * 100}ms` : '0ms' }}
          >
            <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c1121f, #e63946)' }}>
              <div className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.3)]" />
            </div>
            <h3 className="font-heading text-[1rem] tracking-[2px] text-[#f1f1f1]">{dj.name}</h3>
            <p className="font-body text-[0.7rem] text-muted-foreground mt-1">{dj.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDJs;
