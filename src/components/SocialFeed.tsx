import { Instagram } from "lucide-react";
import hairService from "@/assets/hair-service.jpg";
import beautyService from "@/assets/beauty-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import extensionsService from "@/assets/extensions-service.jpg";
import therapyService from "@/assets/therapy-service.jpg";
import nailsService from "@/assets/nails-service.jpg";

const SocialFeed = () => {
  const instagramImages = [
    hairService,
    beautyService,
    makeupService,
    extensionsService,
    therapyService,
    nailsService,
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground break-words">
              Instagram: @hairlounge.cjpr | #hairtalkflour
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">Follow us for daily inspiration and beauty tips</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => window.open('https://www.facebook.com/CJhairlounge', '_blank')}
            >
              <img 
                src={image} 
                alt={`CJ Hair Lounge Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
