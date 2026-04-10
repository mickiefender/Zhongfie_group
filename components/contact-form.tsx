'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ SEND TO WHATSAPP
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = '233533559629'; // no + symbol

    const message = `
*New Contact Form Message*

 Name: ${formData.name}
 Email: ${formData.email}
 Subject: ${formData.subject}
 Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // UI feedback
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  // CONTACT INFO
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'zhongfeigh@gmail.com',
      link: 'mailto:zhongfeigh@gmail.com',
      description: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+233 53 355 9629',
      link: 'https://wa.me/233533559629',
      description: 'Chat with us instantly'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Zhongfei Africa-China Investment Groupe, Accra',
      link: 'https://www.google.com/maps/place/ZHONGFEI+AFRICA+CHINA+INVESTMENT+GROUPE',
      description: 'Find us on the map'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary mb-4">Get in Touch</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Zhongfei Groupe</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or partnership inquiries? Reach out to us directly.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;

            return (
              <a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />

                    <h3 className="font-semibold mb-2">{info.title}</h3>

                    <p className="text-primary text-sm mb-1">
                      {info.value}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* FORM + INFO */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:border-primary"
                >
                  <option value="">Select Subject</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:border-primary"
                />

                <Button className="w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>

                {submitted && (
                  <p className="text-green-600 text-sm">
                    Redirecting to WhatsApp...
                  </p>
                )}

              </form>
            </CardContent>
          </Card>

          {/* INFO */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Why Choose Zhongfei?</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                'Global Reach',
                'Trusted Platform',
                '24/7 Support',
                'Innovation First',
                'Secure Systems',
                'Partner Success'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}