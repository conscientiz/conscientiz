import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CenarioSection from "@/components/CenarioSection";
import SolucaoSection from "@/components/SolucaoSection";
import ValoresSection from "@/components/ValoresSection";
import ServicosSection from "@/components/ServicosSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CenarioSection />
      <SolucaoSection />
      <ValoresSection />
      <QuemSomosSection />
      <ServicosSection />
      <FooterSection />
    </div>
  );
};

export default Index;
