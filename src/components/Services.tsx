import { Card } from "@/components/ui/card";
import hairService from "@/assets/hair-service.jpg";
import beautyService from "@/assets/beauty-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import extensionsService from "@/assets/extensions-service.jpg";
import therapyService from "@/assets/therapy-service.jpg";
import nailsService from "@/assets/nails-service.jpg";

const Services = () => {
  const basicServices = [
    { name: "Blow Dry", price: "₱200" },
    { name: "Women's Hair Cut", price: "₱250" },
    { name: "Men's Hair Cut", price: "₱250" },
    { name: "Curling", price: "₱300" },
    { name: "Iron", price: "₱200" },
  ];

  const packageServices = [
    {
      title: "Brazilian Keratin",
      image: hairService,
      prices: [
        { length: "Short", price: "₱2000" },
        { length: "Medium", price: "₱2500" },
        { length: "Long", price: "₱3000" },
      ],
    },
    {
      title: "Package 1: Color with Brazilian Keratin",
      image: beautyService,
      prices: [
        { length: "Short", price: "₱2500" },
        { length: "Medium", price: "₱3000" },
        { length: "Long", price: "₱4000" },
      ],
    },
    {
      title: "Package 2: Classic One Step Rebond with Brazilian Keratin",
      subtitle: "Option 1",
      image: extensionsService,
      prices: [
        { length: "Short", price: "₱3000" },
        { length: "Medium", price: "₱4000" },
        { length: "Long", price: "₱5000" },
      ],
    },
    {
      title: "Package 2: Classic One Step Rebond with Color",
      subtitle: "Option 2",
      image: extensionsService,
      prices: [
        { length: "Short", price: "₱2500" },
        { length: "Medium", price: "₱3000" },
        { length: "Long", price: "₱4000" },
      ],
    },
    {
      title: "Classic Highlights or Balayage with Toner",
      image: therapyService,
      prices: [
        { length: "Short", price: "₱2500" },
        { length: "Medium", price: "₱3500" },
        { length: "Long", price: "₱4500" },
      ],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-secondary/50">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-2">Price List</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 md:mb-4">Hair Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional hair care and styling services with transparent pricing
          </p>
        </div>

        {/* Basic Hair Services */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6 text-center">Basic Services</h3>
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-card">
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {basicServices.map((service, index) => (
                  <div 
                    key={service.name} 
                    className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-base md:text-lg font-medium text-foreground">{service.name}</span>
                    <span className="text-lg md:text-xl font-bold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Package Services */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6 text-center">Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {packageServices.map((service, index) => (
              <Card 
                key={service.title + (service.subtitle || '')}
                className="group overflow-hidden border-0 shadow-lg hover-lift bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} at CJ Hair Lounge`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <h4 className="text-white text-base md:text-lg font-serif font-bold leading-tight">
                      {service.title}
                    </h4>
                    {service.subtitle && (
                      <p className="text-white/90 text-sm mt-1">{service.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-secondary/30">
                  <div className="space-y-2">
                    {service.prices.map((priceItem) => (
                      <div key={priceItem.length} className="flex justify-between items-center">
                        <span className="text-sm md:text-base font-medium text-foreground">{priceItem.length}</span>
                        <span className="text-base md:text-lg font-bold text-primary">{priceItem.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-md text-sm md:text-base w-full sm:w-auto"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
