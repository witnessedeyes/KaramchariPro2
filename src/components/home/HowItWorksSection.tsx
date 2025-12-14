import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Add Your Workers',
      description: 'Just phone number needed. No bank account required initially.',
      emoji: '📱'
    },
    {
      number: '2',
      title: 'Mark Attendance/Advances',
      description: 'Works offline. Data safely stored on device.',
      emoji: '✓'
    },
    {
      number: '3',
      title: 'Pay Digitally',
      description: 'Bulk payment → Instant payslips → Permanent records',
      emoji: '💸'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                    {step.number}
                  </div>
                  <span className="text-4xl">{step.emoji}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl text-muted-foreground italic">
            If WhatsApp works on your phone, KaramchariPro will too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
