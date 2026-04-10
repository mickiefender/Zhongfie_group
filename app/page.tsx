'use client';

import React, { useState } from 'react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Products from '@/components/products';
import { ProductsSlide } from '@/components/products-slide';
import AboutUs from '@/components/about-us';
import CEOSection from '@/components/ceo-section';
import LeadershipCarousel from '@/components/leadership-corousel';
import Testimonials from '@/components/testimonials';
import NewsUpdates from '@/components/news-updates';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="productsSlide">
         <ProductsSlide/>
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <section id="about">
          <AboutUs />
        </section>
        
        <section id="ceo">
          <CEOSection />
        </section>
        
        <section id="leadership">
          <LeadershipCarousel />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
       {/*<section id="news">
          <NewsUpdates />
        </section>
} */} 
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
