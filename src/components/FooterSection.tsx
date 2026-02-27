const socials = [
  { href: 'https://www.facebook.com/profile.php?id=61581380972061', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { href: 'https://www.instagram.com/auxiliarybar_lounge', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { href: 'https://www.facebook.com/messages/t/853504411170602', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8.3l3.13 3.259L19.752 8.3l-6.559 6.663z"/></svg>
  )},
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-background text-center">
      <img
        src="/logo.png"
        alt="Auxiliary"
        className="w-20 mx-auto mb-6"
        style={{ filter: 'drop-shadow(0 0 12px rgba(193,18,31,0.4))' }}
      />

      <div className="font-body text-[0.78rem] text-muted-foreground font-light leading-[2] space-y-1">
        <p>No. 7 Buenamar Road, Dona Isaura Village, Brgy. Novaliches Proper, Quezon City</p>
        <p><a href="tel:09510815806" className="hover:text-red-glow transition-colors">0951 081 5806</a></p>
        <p><a href="https://www.instagram.com/auxiliarybar_lounge" target="_blank" rel="noopener noreferrer" className="hover:text-red-glow transition-colors">@auxiliarybar_lounge</a></p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-[#f1f1f1] hover:border-red-glow hover:text-red-glow hover:-translate-y-1 transition-all duration-300"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <div className="w-[60px] h-[1px] bg-[rgba(255,255,255,0.1)] mx-auto my-8" />

      <p className="font-body text-[0.65rem] text-[rgba(255,255,255,0.25)] font-light">
        Powered by LogiCode.PH
      </p>
    </footer>
  );
};

export default FooterSection;
