import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsCounter from "@/components/StatsCounter";
import ActionCards from "@/components/ActionCards";
import FloatingSupport from "@/components/FloatingSupport";

const Index = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background font-body">
      {/* Fixed Navigation Bar */}

      {/* Main content area with spacing below fixed navbar */}
      <main className="w-full">
        <HeroSection />
        <TestimonialsCarousel />
        <StatsCounter />
        <ActionCards />
      </main>

      {/* Floating Button */}
      <FloatingSupport />
    </div>
  );
};

export default Index;
