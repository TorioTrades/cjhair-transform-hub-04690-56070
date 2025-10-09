import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center px-4 py-12 md:py-16 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full h-20 md:h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" 
           style={{ clipPath: 'ellipse(80% 100% at 50% 0%)' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-balance leading-tight">
              Where Style Begins & 
              <span className="block text-primary mt-1 md:mt-2">Confidence Takes Shape</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance">
              Indulge in our luxurious sanctuary of beauty where cutting-edge techniques meet personalized care. Transform your look and unleash your confidence with our expert team.
            </p>
            
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Book Your Transformation
            </Button>
          </div>

          {/* Image Mosaic */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 animate-scale-in">
            <div className="space-y-3 md:space-y-4">
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover-lift">
                <img 
                  src={hero1} 
                  alt="Professional hair styling service" 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover-lift">
                <img 
                  src={hero2} 
                  alt="Eyelash extension before and after" 
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover-lift">
                <img 
                  src={hero3} 
                  alt="Professional salon interior" 
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover-lift">
                <img 
                  src={hero4} 
                  alt="Beautiful hair coloring result" 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-primary/10">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
