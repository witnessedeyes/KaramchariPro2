import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ShopOwnerTrustSection from '@/components/home/ShopOwnerTrustSection';
import WorkerFirstSection from '@/components/home/WorkerFirstSection';
import SecuritySection from '@/components/home/SecuritySection';
import MarketValidationSection from '@/components/home/MarketValidationSection';
import VisionSection from '@/components/home/VisionSection';
import Footer from '@/components/common/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ShopOwnerTrustSection />
      <WorkerFirstSection />
      <SecuritySection />
      <MarketValidationSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Home;
