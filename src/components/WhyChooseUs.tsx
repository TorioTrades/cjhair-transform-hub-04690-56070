import { Sparkles, Heart, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Expert Care, Stunning Results",
      description: "Powered by certified beauty experts based on personalized treatment strategy.",
    },
    {
      icon: Heart,
      title: "We Care for You in All Aspects",
      description: "Holistic approach to your style, skin, and overall well-being.",
    },
    {
      icon: Award,
      title: "One-Stop Beauty Destination",
      description: "From hair to nails, everything you need under one luxurious roof.",
    },
    {
      icon: Users,
      title: "Experienced & Friendly Staff",
      description: "Professional experts who prioritize your comfort and satisfaction.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground">
            Why Choose Hair Lounge Salon?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
