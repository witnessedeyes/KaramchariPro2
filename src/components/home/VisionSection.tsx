import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Shield as ShieldIcon, TrendingUp, Briefcase, Users, Building2, CreditCard, FileCheck, ArrowRight } from 'lucide-react';

const VisionSection: React.FC = () => {
  const visionPoints = [
    {
      icon: <Target className="h-10 w-10 text-accent" />,
      title: 'Payroll is the Entry Point',
      description: 'Every business needs payroll. We solve an immediate, painful problem that shop owners face monthly.'
    },
    {
      icon: <ShieldIcon className="h-10 w-10 text-accent" />,
      title: 'Trust is the Moat',
      description: 'Tamper-proof records and dual-party transparency create irreplaceable trust between employers and workers.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-accent" />,
      title: 'Finance is the Future',
      description: 'With verified income data, we unlock lending, insurance, and financial services for 200M workers.'
    }
  ];

  const futureModules = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Worker Microloans',
      description: 'Instant credit based on credibility scores',
      timeline: 'Q2 2025',
      impact: '₹500-50,000 loans at 12-18% APR'
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Shop Owner Working Capital',
      description: 'Business loans backed by payroll data',
      timeline: 'Q3 2025',
      impact: '₹50,000-10L at competitive rates'
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: 'Insurance Products',
      description: 'Health, life, and accident coverage',
      timeline: 'Q4 2025',
      impact: 'Affordable premiums with verified income'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Verifiable Hiring Marketplace',
      description: 'Connect employers with pre-verified workers',
      timeline: 'Q1 2026',
      impact: 'Reduce hiring time from weeks to days'
    }
  ];

  const marketOpportunity = [
    { metric: '200M', label: 'Unorganised sector workers in India' },
    { metric: '₹4,000 Cr', label: 'Annual losses from payroll inefficiency' },
    { metric: '₹50,000 Cr', label: 'Addressable lending market' },
    { metric: '85%', label: 'Workers without formal financial identity' }
  ];

  return (
    <section className="py-20 xl:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl xl:text-6xl font-bold">
              Building Infrastructure for 200 Million Workers
            </h2>
            <p className="text-xl xl:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              We're not building a payroll app. We're creating the financial backbone for India's unorganised workforce — 
              the missing layer between informal work and formal financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-2 border-primary-foreground/20 backdrop-blur hover:bg-primary-foreground/15 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-2xl bg-accent/20">
                    {point.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center">{point.title}</h3>
                  <p className="text-center opacity-90 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-primary-foreground/10 border-2 border-accent/30 backdrop-blur">
            <CardContent className="p-8 xl:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Briefcase className="h-12 w-12 text-accent" />
                    <h3 className="text-3xl xl:text-4xl font-bold">Product Roadmap</h3>
                  </div>
                  <p className="text-lg opacity-90 max-w-3xl mx-auto">
                    From payroll infrastructure to complete financial ecosystem — 
                    each module builds on verified employment data and trust
                  </p>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {futureModules.map((module, index) => (
                    <div key={index} className="p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all border border-primary-foreground/10 group">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                          {module.icon}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold">{module.title}</h4>
                            <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold">
                              {module.timeline}
                            </span>
                          </div>
                          <p className="text-sm opacity-90">{module.description}</p>
                          <p className="text-xs opacity-75 flex items-center gap-2">
                            <ArrowRight className="h-3 w-3" />
                            {module.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-2 border-primary-foreground/20 backdrop-blur">
            <CardContent className="p-8 xl:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-4">The Market Opportunity</h3>
                  <p className="text-lg opacity-90 max-w-3xl mx-auto">
                    India's unorganised sector is the world's largest underserved financial market
                  </p>
                </div>
                
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                  {marketOpportunity.map((item, index) => (
                    <div key={index} className="text-center space-y-2 p-6 rounded-xl bg-primary-foreground/5">
                      <div className="text-4xl xl:text-5xl font-bold text-accent">{item.metric}</div>
                      <div className="text-sm opacity-90">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-primary-foreground/20 text-center">
                  <p className="text-lg opacity-90 italic max-w-4xl mx-auto">
                    "We're building the UPI of employment — a universal infrastructure that makes every worker's 
                    contribution visible, verifiable, and valuable. This is not a startup. This is nation-building."
                  </p>
                  <p className="text-sm opacity-75 mt-4">— KaramchariPro Founding Team</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
