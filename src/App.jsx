import React from "react";
import Footer from "./components/Footer";
import QuoteBanner from "./components/QuoteBaner";
import ModernAminosPage from "./components/MainSection";
import BatchTestedSection from "./components/BatchTestedSection";

import CustomerServiceSection from "./components/CustomerService";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQ";

const App = () => {
  return (
    <div className="space-y-10">
      <ModernAminosPage />
      <BatchTestedSection />
      <CustomerServiceSection />
      <FeaturesSection />
      <FAQSection />
      <QuoteBanner />
      <Footer />
    </div>
  );
};

export default App;
