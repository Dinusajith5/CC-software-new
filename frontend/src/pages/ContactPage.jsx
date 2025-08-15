import React from "react";
import ContactForm from "../components/ContactForm";
import { useCompanyInfo } from "../hooks/useApi";

const ContactPage = () => {
  const { data: companyInfo } = useCompanyInfo();

  return (
    <div className="pt-16 min-h-screen">
      <ContactForm companyInfo={companyInfo} />
    </div>
  );
};

export default ContactPage;