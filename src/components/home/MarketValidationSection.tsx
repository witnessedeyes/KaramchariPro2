import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Store, Repeat } from 'lucide-react';

const MarketValidationSection: React.FC = () => {
  const growthChannels = [
    { icon: <Store className="h-8 w-8" />, text: 'Market Clusters' },
    { icon: <Users className="h-8 w-8" />, text: 'Market Associations' },
    { icon: <Repeat className="h-8 w-8" />, text: 'Worker Referrals' },
    { icon: <TrendingUp className="h-8 w-8" />, text: 'Organic Adoption via Payslips' }
  ];

  const stats = [
    { value: '10,000+', label: 'Workers Onboarded' },
    { value: '₹50L+', label: 'Daily Payroll Processed' },
    { value: '500+', label: 'Active Shop Owners' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4 text-foreground">
            Growing Where India Works
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {growthChannels.map((channel, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-all duration-300 bg-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl bg-secondary/10 text-secondary">
                    {channel.icon}
                  </div>
                  <p className="font-semibold text-foreground">{channel.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 border-secondary/30 bg-secondary/5">
                <CardContent className="p-8 text-center space-y-2">
                  <div className="text-4xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketValidationSection;
