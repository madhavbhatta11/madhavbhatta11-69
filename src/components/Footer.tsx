import { Instagram, Facebook, Youtube, Twitter, Linkedin, Github, BrandWhatsapp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/madhav__bhatta', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/madhavbhatta11', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@madhavbhatta4695', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/madhavbhatta11', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/madhavbhatta11', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/madhavbhatta11', label: 'GitHub' },
    { icon: BrandWhatsapp, href: 'https://wa.me/9779868869289', label: 'WhatsApp' }, // Your Nepal number
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm">© {currentYear} Madhav Bhatta. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6 md:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <div
                  key={social.label}
                  onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">©madhavbhatta11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
