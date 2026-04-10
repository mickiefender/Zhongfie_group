import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-lg text-primary-foreground">Z</span>
              </div>
              <span className="text-xl font-bold">Zhongfei</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-6">
              Revolutionizing digital commerce and mobility through innovative technology and customer-centric solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Zhongfei.shop', href: '#' },
                { label: 'Droverides', href: '#' },
                { label: 'API Documentation', href: '#' },
                { label: 'Developer Portal', href: '#' },
                { label: 'Mobile Apps', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Leadership', href: '#ceo' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
                { label: 'Newsroom', href: '#news' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Help Center', href: '#' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'FAQ', href: '#' },
                { label: 'Community', href: '#' },
                { label: 'Status', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'Compliance', href: '#' },
                { label: 'Security', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-secondary-foreground/70">
            <p>&copy; {currentYear} Zhongfei Groupe. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="mailto:contact@zhongfei.group"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mt-8 text-xs text-secondary-foreground/60">
          <p>Built with innovation and care for a better digital future</p>
        </div>
      </div>
    </footer>
  );
}
