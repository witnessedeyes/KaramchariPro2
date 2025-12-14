import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative mx-auto px-4 py-20 xl:py-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl xl:text-6xl font-bold leading-tight text-balance">
              Digitising Trust Between Employers and Workers
            </h1>
            
            <p className="text-lg xl:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              KaramchariPro is the payroll and payment infrastructure built for India's unorganised workforce — trusted by shop owners, workers, and markets across Bharat.
            </p>
            
            <div className="flex flex-col xl:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection('how-it-works')}
              >
                Start Free – No Card Required
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection('how-it-works')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/343d6c1b-b6a4-41b9-98ed-846d46098f60.jpg" 
                alt="KaramchariPro mobile app showing attendance tracking and payroll payment interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
