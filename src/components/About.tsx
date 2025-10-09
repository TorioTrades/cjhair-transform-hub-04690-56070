import salonInterior from "@/assets/salon-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-8 md:mt-12">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Discover your personal style sanctuary at <span className="font-semibold text-foreground">CJ Hair Lounge</span> — where stunning style and happiness come to you via complete transformation. As one of Pampanga's leading destinations for beauty and wellness, we're passionate about bringing global beauty trends to you with a luxury approach.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our methodology combines cutting-edge techniques with personalized attention, helping clients achieve confidence through style and wellness. We believe in delivering transformative beauty experiences that go beyond the surface.
            </p>

            <div className="grid grid-cols-1 gap-3 md:gap-4 pt-4">
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground">Light Peels and Advanced Skin Therapies</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Specialized skin treatments and rejuvenation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground">Complete Hair Transformation Services</h4>
                  <p className="text-sm md:text-base text-muted-foreground">From styling to extensions, comprehensive hair care</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground">Luxury Beauty and Makeup Services</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Professional makeup application and beauty treatments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in order-first md:order-last">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={salonInterior} 
                alt="CJ Hair Lounge luxurious salon interior with modern styling stations" 
                className="w-full h-64 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-1 md:mb-2">Our Luxury Space</h3>
                <p className="text-xs md:text-sm text-white/90">A sanctuary designed for your transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
