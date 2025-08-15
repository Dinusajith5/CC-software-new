import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import { useCompanyInfo } from "../hooks/useApi";

const HomePage = () => {
  const { data: companyInfo } = useCompanyInfo();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <CTASection />
      <ContactForm companyInfo={companyInfo} />
    </div>
  );
};

export default HomePage;