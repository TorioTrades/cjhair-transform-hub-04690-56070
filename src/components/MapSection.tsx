import { useScrollReveal } from '@/hooks/useScrollReveal';

const MapSection = () => {
  const content = useScrollReveal();

  return (
    <section className="py-[80px] px-6 bg-background">
      <div ref={content.ref} className={`text-center mb-8 transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-heading text-[2rem] tracking-[5px] text-[#f1f1f1]">FIND US</h2>
        <p className="font-body text-[0.82rem] text-muted-foreground font-light mt-2">
          No. 7 Buenamar Road, Dona Isaura Village, Brgy. Novaliches Proper, Quezon City, 1123
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.2!2d121.04!3d14.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzEyLjAiTiAxMjHCsDAyJzI0LjAiRQ!5e0!3m2!1sen!2sph!4v1"
          width="100%"
          height="350"
          style={{ border: 0, filter: 'grayscale(80%) brightness(0.7) contrast(1.2)' }}
          className="transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 h-[250px] md:h-[350px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Auxiliary Bar and Lounge Location"
        />
      </div>
    </section>
  );
};

export default MapSection;
