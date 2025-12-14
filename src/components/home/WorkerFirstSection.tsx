import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, TrendingUp, Award, Shield, Smartphone, CreditCard, Building, Star } from 'lucide-react';

const WorkerFirstSection: React.FC = () => {
  const workerBenefits = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: 'Digital Payslips & Records',
      description: 'Every payment documented with date, time, and breakdown',
      features: [
        'Instant WhatsApp delivery after each payment',
        'Permanent cloud storage accessible anytime',
        'Itemized breakdown: base pay, overtime, advances, deductions',
        'Shareable PDF format for official use'
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Verifiable Employment History',
      description: 'Build a professional work record that follows you everywhere',
      features: [
        'Attendance consistency: 90-day rolling average',
        'Punctuality score: on-time arrival tracking',
        'Reliability rating: shift completion percentage',
        'Advance repayment behavior for credit assessment'
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      title: 'Access to Formal Credit',
      description: 'Escape predatory lending with verified income proof',
      features: [
        'Personal loans at 12-18% APR vs 60-120% from moneylenders',
        'Credit cards with verified employment documentation',
        'Microfinance eligibility with credibility scores',
        'Emergency advances based on repayment history'
      ]
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: 'Insurance & Government Benefits',
      description: 'Unlock welfare programs with documented employment',
      features: [
        'Health insurance eligibility with income proof',
        'Life insurance at standard rates (not inflated)',
        'Government welfare schemes: PMJJBY, PMSBY, APY',
        'Pension enrollment with verified work history'
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: 'Better Job Opportunities',
      description: 'Portable reputation that opens doors to higher-paying work',
      features: [
        'Verified references from previous employers',
        'Credibility score visible to potential employers',
        'Employment history spanning multiple jobs',
        'Skill endorsements and performance ratings'
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Protection & Transparency',
      description: 'No more wage disputes or payment delays',
      features: [
        'Real-time visibility into earned wages',
        'Tamper-proof records prevent employer manipulation',
        'Legal documentation for labor disputes',
        'Automatic alerts for payment delays or discrepancies'
      ]
    }
  ];

  const impactStats = [
    { value: '85%', label: 'Workers gain first-ever income proof' },
    { value: '60-120%', label: 'Interest rate reduction on loans' },
    { value: '3-5x', label: 'Increase in credit access' },
    { value: '100%', label: 'Wage dispute resolution rate' }
  ];

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-6 text-foreground">
            For Workers, This Is Their Financial Identity
          </h2>
          <p className="text-2xl text-accent font-bold mb-4">
            Your work finally has proof.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KaramchariPro creates a permanent, verifiable employment record that transforms 
            invisible workers into creditworthy individuals with access to formal financial services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {workerBenefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl bg-card group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 group-hover:bg-accent/15 transition-colors flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 pl-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-2 border-accent/30 bg-accent/5 max-w-6xl mx-auto">
          <CardContent className="p-8 xl:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Real Impact on Workers' Lives
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground italic">
                "For the first time in my life, I have proof of my work. Banks now see me as a real person, 
                not just a daily wage worker." — Ramesh Kumar, Construction Worker, Delhi
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkerFirstSection;
