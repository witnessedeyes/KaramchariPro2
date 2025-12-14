import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, UserX, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-8 w-8 text-destructive" />,
      title: 'Manual Payroll Errors',
      stat: '₹8,000-15,000',
      period: 'lost per shop monthly',
      details: [
        'Forgotten salary advances creating payment disputes',
        'Proxy attendance inflating wage bills by 12-18%',
        'Manual calculation errors in overtime & deductions',
        '6-8 hours monthly wasted on payroll reconciliation',
        'Cash handling risks and potential theft incidents'
      ]
    },
    {
      icon: <UserX className="h-8 w-8 text-destructive" />,
      title: 'Zero Financial Identity',
      stat: '85%',
      period: 'workers invisible to banks',
      details: [
        'No verifiable income proof for loans or credit cards',
        'Excluded from formal insurance and pension schemes',
        'Unable to access government welfare programs',
        'Forced into predatory lending at 5-10% monthly interest',
        'No employment history for better job opportunities'
      ]
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-destructive" />,
      title: 'Trust Breakdown & Attrition',
      stat: '40%',
      period: 'annual worker turnover',
      details: [
        'Wage disputes consuming 3-4 hours weekly',
        'Workers leaving mid-month over payment disagreements',
        'Recruitment costs: ₹5,000-8,000 per replacement',
        'Training new workers: 2-3 weeks productivity loss',
        'Reputation damage affecting future hiring quality'
      ]
    }
  ];

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-6 text-foreground">
            The ₹4,000 Crore Problem Nobody Talks About
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's unorganised sector loses billions annually to inefficient payroll systems, 
            affecting 200 million workers and millions of small businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-xl bg-card group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-destructive/10 group-hover:bg-destructive/15 transition-colors">
                  {problem.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{problem.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-destructive">{problem.stat}</span>
                    <span className="text-sm text-muted-foreground">{problem.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {problem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                      <span className="text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-secondary/10 rounded-2xl px-8 py-6 border-2 border-secondary/30">
            <p className="text-2xl font-bold text-foreground mb-2">
              KaramchariPro replaces guesswork with proof.
            </p>
            <p className="text-muted-foreground">
              One system to eliminate errors, build trust, and create financial identity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
