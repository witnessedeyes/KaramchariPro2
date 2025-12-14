import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wifi, CreditCard, Shield, CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="h-10 w-10 text-secondary" />,
      title: 'Worker Credibility Score',
      subtitle: 'Building Financial Identity Through Work',
      features: [
        {
          title: 'Attendance Consistency Tracking',
          detail: 'AI-powered pattern recognition across 90-day rolling windows'
        },
        {
          title: 'Punctuality & Reliability Metrics',
          detail: 'Real-time scoring based on check-in times and shift completion'
        },
        {
          title: 'Advance Repayment Behavior',
          detail: 'Credit-like scoring for salary advances and loan eligibility'
        },
        {
          title: 'Portable Employment History',
          detail: 'Verifiable credentials that follow workers across jobs'
        }
      ],
      impact: 'Enables workers to access formal credit at 12-18% APR vs 60-120% from informal lenders'
    },
    {
      icon: <Wifi className="h-10 w-10 text-secondary" />,
      title: 'Offline-First Architecture',
      subtitle: 'Built for Real India, Not Just Metro Cities',
      features: [
        {
          title: '100% Offline Functionality',
          detail: 'Mark attendance, record advances, calculate wages without internet'
        },
        {
          title: 'Intelligent Auto-Sync',
          detail: 'Conflict-free data synchronization when connectivity returns'
        },
        {
          title: '2G Network Optimization',
          detail: 'Data packets under 50KB, works on EDGE/GPRS networks'
        },
        {
          title: 'Local-First Data Storage',
          detail: 'Encrypted SQLite database with automatic cloud backup'
        }
      ],
      impact: 'Works in 99.8% of India including remote villages and low-connectivity areas'
    },
    {
      icon: <CreditCard className="h-10 w-10 text-secondary" />,
      title: 'Bulk Payment Infrastructure',
      subtitle: 'From Hours to Minutes: Payroll Automation',
      features: [
        {
          title: 'One-Click Mass Payouts',
          detail: 'Process 50-500 workers simultaneously via UPI/NEFT/IMPS'
        },
        {
          title: 'Multi-Bank Integration',
          detail: 'Direct integration with 15+ banks and payment gateways'
        },
        {
          title: 'Automated Payslip Generation',
          detail: 'Instant PDF/WhatsApp delivery with itemized breakdowns'
        },
        {
          title: 'Payment Reconciliation',
          detail: 'Real-time status tracking with automatic retry for failures'
        }
      ],
      impact: 'Reduces payroll processing time from 6-8 hours to under 15 minutes'
    },
    {
      icon: <Shield className="h-10 w-10 text-secondary" />,
      title: 'Immutable Record System',
      subtitle: 'Blockchain-Grade Trust Without Blockchain Complexity',
      features: [
        {
          title: 'Append-Only Data Architecture',
          detail: 'No edits or deletions possible after entry confirmation'
        },
        {
          title: 'Cryptographic Verification',
          detail: 'SHA-256 hashing ensures data integrity and authenticity'
        },
        {
          title: 'Dual-Party Transparency',
          detail: 'Employers and workers see identical records in real-time'
        },
        {
          title: 'Audit Trail Generation',
          detail: 'Complete history for compliance, disputes, and legal purposes'
        }
      ],
      impact: 'Eliminates 95% of wage disputes and provides legal-grade documentation'
    }
  ];

  return (
    <section className="py-20 xl:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-6 text-foreground">
            One System. Total Clarity.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade technology designed for India's unorganised workforce. 
            No complexity, no training required, just results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl bg-card group">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary/10 group-hover:bg-secondary/15 transition-colors">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">{solution.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="space-y-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">{feature.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold text-sm">IMPACT:</span>
                    <p className="text-sm text-muted-foreground italic">{solution.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
