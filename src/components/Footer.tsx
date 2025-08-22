import { Instagram, Facebook, Youtube, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links — safe URLs without www
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/madhav__bhatta', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/madhavbhatta11', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@madhavbhatta4695', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/madhavbhatta11', label: 'Twitter' },
    { icon: Linkedin, href: 'https://limport { Instagram, Facebook, Youtube, Twitter, Linkedin, Github } from 'lucide-react';

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48C18.14 1.1 14.85 0 11.5 0 5.15 0 0 5.15 0 11.5c0 2.02.53 3.9 1.53 5.56L0 24l6.97-1.51c1.56 1 3.37 1.51 5.53 1.51 6.35 0 11.5-5.15 11.5-11.5 0-3.36-1.1-6.64-3.48-9.02zm-2.35 13.84c-.27.76-1.53 1.45-2.1 1.55-.55.1-1.19.14-3.12-.66-2.6-1-4.28-3.32-4.4-3.47-.12-.15-1.07-1.35-1.07-2.57 0-1.22.64-1.83.87-2.08.23-.25.5-.32.67-.32.17 0 .34 0 .49.01.15.02.43-.06.66.5.23.55.77 1.9.84 2.04.07.15.12.33.03.53-.08.2-.13.33-.26.52-.13.18-.28.4-.39.53-.13.16-.27.33-.11.64.16.31.73 1.21 1.55 1.95 1.07 1 1.94 1.31 2.29 1.46.35.14.56.12.76-.07.2-.19.83-.96 1.05-1.29.22-.33.45-.27.76-.16.31.12 1.96.92 2.3 1.09.34.17.57.25.65.39.08.14.08.81-.19 1.57z"/>
  </svg>
);

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
    { icon: WhatsAppIcon, href: 'https://wa.me/9779868869289', label: 'WhatsApp' },
  ];

  // Quick navigation links
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
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
inkedin.com/in/madhavbhatta11', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/madhavbhatta11', label: 'GitHub' },
    { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M..."/></svg>, href: 'https://wa.me/9779868869289', label: 'WhatsApp' }

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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
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
