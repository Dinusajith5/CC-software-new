import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import CTASection from "../components/CTASection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;