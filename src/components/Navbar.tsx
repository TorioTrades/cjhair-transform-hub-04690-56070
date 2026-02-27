import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'MENU', id: 'menu' },
    { label: 'BOOK NOW', id: 'booking' },
    { label: 'CONTACT US', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(5,5,5,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-heading text-[0.9rem] tracking-[3px] text-[#f1f1f1] relative group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-glow transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden fixed top-4 right-4 z-[60] w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[2px] bg-[#f1f1f1] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#f1f1f1] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#f1f1f1] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[55] bg-[rgba(5,5,5,0.95)] backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-heading text-2xl tracking-[5px] text-[#f1f1f1] hover:text-red-glow transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
