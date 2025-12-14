import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Database, CreditCard, Server, Code, Zap, CheckCircle2 } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const techStack = [
    {
      category: 'Backend Architecture',
      icon: <Server className="h-6 w-6 text-secondary" />,
      items: [
        { tech: 'NestJS Microservices', detail: 'Scalable, modular architecture with TypeScript' },
        { tech: 'PostgreSQL 15+', detail: 'ACID-compliant relational database with row-level security' },
        { tech: 'Redis Cluster', detail: 'In-memory caching for sub-50ms response times' },
        { tech: 'BigInt Accounting', detail: 'Paisa-level precision, zero rounding errors' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="h-6 w-6 text-secondary" />,
      items: [
        { tech: 'TLS 1.3 Encryption', detail: 'End-to-end encryption for all data transmission' },
        { tech: 'JWT + OAuth 2.0', detail: 'Stateless authentication with refresh token rotation' },
        { tech: 'RBAC + ABAC', detail: 'Role and attribute-based access control' },
        { tech: 'AES-256 Encryption', detail: 'Military-grade encryption for data at rest' }
      ]
    },
    {
      category: 'Payment Infrastructure',
      icon: <CreditCard className="h-6 w-6 text-secondary" />,
      items: [
        { tech: 'Razorpay Integration', detail: 'PCI-DSS compliant payment processing' },
        { tech: 'UPI Autopay', detail: 'Recurring payments with NPCI certification' },
        { tech: 'Multi-Gateway Routing', detail: 'Automatic failover across Cashfree, PayU, Paytm' },
        { tech: 'Webhook Verification', detail: 'HMAC-SHA256 signature validation' }
      ]
    },
    {
      category: 'Performance & Reliability',
      icon: <Zap className="h-6 w-6 text-secondary" />,
      items: [
        { tech: '99.9% Uptime SLA', detail: 'Multi-region deployment with automatic failover' },
        { tech: 'CDN Distribution', detail: 'Global edge caching for 200ms average latency' },
        { tech: 'Auto-Scaling', detail: 'Handles 10,000+ concurrent users seamlessly' },
        { tech: 'Real-Time Monitoring', detail: 'Prometheus + Grafana for 24/7 observability' }
      ]
    },
    {
      category: 'Data Protection',
      icon: <Database className="h-6 w-6 text-secondary" />,
      items: [
        { tech: 'Daily Automated Backups', detail: 'Point-in-time recovery with 30-day retention' },
        { tech: 'GDPR Compliance', detail: 'Data portability and right to erasure' },
        { tech: 'Audit Logging', detail: 'Immutable logs for all system operations' },
        { tech: 'Data Residency', detail: 'All data stored within India (RBI compliant)' }
      ]
    },
    {
      category: 'Mobile Optimization',
      icon: <Code className="h-6 w-6 text-secondary" />,
      items: [
        { tech: 'Progressive Web App', detail: 'Installable, works offline, 50KB initial load' },
        { tech: 'React Native', detail: 'Native iOS/Android apps with shared codebase' },
        { tech: 'Adaptive Bitrate', detail: 'Automatically adjusts to network conditions' },
        { tech: 'Local-First Sync', detail: 'CRDTs for conflict-free offline operations' }
      ]
    }
  ];

  const certifications = [
    { icon: <Shield className="h-6 w-6" />, text: 'ISO 27001 Certified', detail: 'Information Security Management' },
    { icon: <Lock className="h-6 w-6" />, text: 'PCI-DSS Level 1', detail: 'Payment Card Industry Compliance' },
    { icon: <Database className="h-6 w-6" />, text: 'SOC 2 Type II', detail: 'Security, Availability, Confidentiality' },
    { icon: <CheckCircle2 className="h-6 w-6" />, text: 'NPCI Certified', detail: 'UPI Autopay Authorization' }
  ];

  const commitments = [
    'Your data is never sold or shared with third parties',
    'Workers own their employment history and can export it anytime',
    'Open API for integration with accounting software',
    'Regular third-party security audits and penetration testing'
  ];

  return (
    <section className="py-20 xl:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-6 text-foreground">
            Bank-Grade Technology. Street-Level Understanding.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise infrastructure built to handle millions of transactions while remaining 
            accessible to shop owners with basic smartphones
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-all duration-300 bg-card group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 group-hover:bg-secondary/15 transition-colors">
                      {stack.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{stack.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.tech}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-2 border-secondary/30 bg-secondary/5">
            <CardContent className="p-8 xl:p-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Certifications & Compliance
              </h3>
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-3">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary">
                      {cert.icon}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{cert.text}</p>
                      <p className="text-sm text-muted-foreground">{cert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Our Commitments to You</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{commitment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
