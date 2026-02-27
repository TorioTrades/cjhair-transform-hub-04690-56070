import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDJs from "@/components/FeaturedDJs";
import ParallaxVideo from "@/components/ParallaxVideo";
import MenuSection from "@/components/MenuSection";
import VIPSection from "@/components/VIPSection";
import BookingSection from "@/components/BookingSection";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedDJs />
        <ParallaxVideo />
        <MenuSection />
        <VIPSection />
        <BookingSection />
        <MapSection />
      </main>
      <FooterSection />
      <Toaster />
    </div>
  );
};

export default Index;
