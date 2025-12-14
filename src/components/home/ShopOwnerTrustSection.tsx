import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, TrendingUp, Clock, Users, Shield, IndianRupee } from 'lucide-react';

const ShopOwnerTrustSection: React.FC = () => {
  const benefits = [
    {
      icon: <IndianRupee className="h-5 w-5" />,
      title: 'Save ₹8,000-15,000 Monthly',
      detail: 'Eliminate proxy attendance, forgotten advances, and calculation errors'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Save 6-8 Hours Every Month',
      detail: 'Automated payroll processing replaces manual ledger reconciliation'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Reduce Disputes by 95%',
      detail: 'Tamper-proof records eliminate wage disagreements and conflicts'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Improve Retention by 40%',
      detail: 'Transparent payments and credibility scores increase worker loyalty'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Build Hiring Database',
      detail: 'Access verified worker profiles with attendance and reliability scores'
    }
  ];

  const pricingFeatures = [
    'Unlimited workers',
    'Unlimited transactions',
    'Free WhatsApp payslips',
    'Attendance tracking',
    'Advance management',
    'Bulk payments',
    'Export reports',
    '24/7 support'
  ];

  return (
    <section className="py-20 xl:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-5xl font-bold mb-6 text-foreground">
              Built for Indian Businesses, Not Corporate HR
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple enough for a tea stall, powerful enough for a 500-worker factory. 
              No training required, no complex setup.
            </p>
          </div>
          
          <Card className="border-2 border-secondary/30 shadow-xl bg-card">
            <CardContent className="p-8 xl:p-12">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Measurable Business Impact
                  </h3>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 flex-shrink-0 transition-colors">
                        <div className="text-secondary">{benefit.icon}</div>
                      </div>
                      <div>
                        <p className="text-lg text-foreground font-bold mb-1">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">{benefit.detail}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Average ROI: 15-20x within first 3 months based on error reduction and time savings
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 space-y-6 sticky top-8">
                  <div className="text-center space-y-2 pb-6 border-b border-primary-foreground/20">
                    <p className="text-sm opacity-75 uppercase tracking-wide">Simple Pricing</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-bold">₹49</span>
                      <span className="text-2xl opacity-90">/month</span>
                    </div>
                    <p className="text-sm opacity-75">Less than ₹2 per day</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-bold text-sm uppercase tracking-wide opacity-75">Everything Included:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {pricingFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-primary-foreground/20 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Cancel anytime, no questions asked</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>UPI Autopay - set it and forget it</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>No setup fees, no hidden charges</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-center text-sm font-medium opacity-90">
                      7-day free trial. No credit card required.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShopOwnerTrustSection;
