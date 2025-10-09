import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Promotions />
        <Testimonials />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
