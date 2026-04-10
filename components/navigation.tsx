'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Music2, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (setActiveSection) {
      setActiveSection(sectionId);
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'CEO', id: 'ceo' },
    { label: 'Team', id: 'leadership' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'text-white/70 hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'text-white/70 hover:text-pink-400' },
    { icon: Music2, href: 'https://tiktok.com', label: 'TikTok', color: 'text-white/70 hover:text-white' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-100 backdrop-blur-xl bg-green-900/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-20 h-20 relative">
                <Image
                  src="/products/zhongei enterprise logo.png"
                  alt="BRIX Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-4x2 font-bold text-white tracking-tight hidden sm:inline">Zhongfei Groupe</span>
            </div>

            {/* Center Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-semibold transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Section: Social Icons + CTA Button */}
            <div className="flex items-center gap-6 md:gap-8">
              {/* Social Icons */}
              <div className="hidden lg:flex items-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`transition-colors duration-300 ${social.color}`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>

             
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden backdrop-blur-xl bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-2xl font-bold transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`transition-colors duration-300 ${social.color}`}
                  >
                    <Icon size={28} />
                  </a>
                );
              })}
            </div>

            
          </div>
        </div>
      )}
    </>
  );
}
