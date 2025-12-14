import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">KaramchariPro</h3>
            <p className="text-primary-foreground/80">India's Workforce Infrastructure</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="text-center text-primary-foreground/60 text-sm">
            <p>2025 KaramchariPro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
