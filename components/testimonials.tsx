'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Founder, Luxury Goods Marketplace',
      company: 'Middle East Region',
      content: 'Zhongfei.shop transformed our business. The platform\'s reliability and features have helped us grow our customer base by 300% in just two years. Exceptional support team!',
      rating: 5,
      image: 'A'
    },
    {
      name: 'Priya Sharma',
      role: 'SME Vendor',
      company: 'India Operations',
      content: 'As a small business owner, the ease of use and affordability of Zhongfei.shop made it possible for me to reach millions of customers. Life-changing opportunity!',
      rating: 5,
      image: 'P'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Driver Partner',
      company: 'South America Region',
      content: 'Droverides has given me a flexible income source. The app is intuitive, the earnings are competitive, and the safety features give me peace of mind every day.',
      rating: 5,
      image: 'C'
    },
    {
      name: 'Li Wei',
      role: 'Frequent Customer',
      company: 'Asia Pacific',
      content: 'I use Zhongfei.shop and Droverides daily. The seamless integration, secure payments, and excellent customer service make them my go-to platforms.',
      rating: 5,
      image: 'L'
    },
    {
      name: 'Jennifer Thompson',
      role: 'E-commerce Manager',
      company: 'Enterprise Client',
      content: 'The enterprise solutions from Zhongfei are outstanding. Their API documentation, developer support, and scalability have been instrumental in our growth.',
      rating: 5,
      image: 'J'
    },
    {
      name: 'Kofi Mensah',
      role: 'Logistics Partner',
      company: 'Africa Operations',
      content: 'Working with Zhongfei as a logistics provider has been remarkable. Their technology and partnerships create seamless delivery experiences for everyone.',
      rating: 5,
      image: 'K'
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<ReturnType<typeof window.setInterval> | null>(null);

  // Check scroll position
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  // Scroll function
  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsAutoScrolling(false);
    const scrollAmount: number = 400;
    const targetScroll: number =
      container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    // Resume auto-scroll after user interaction
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollAmount = 400;
      let newScroll = container.scrollLeft + scrollAmount;

      // Loop back to start when reaching the end
      if (newScroll >= container.scrollWidth - container.clientWidth) {
        newScroll = 0;
      }

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }, 4000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Handle scroll events
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  // Handle swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      scroll('right');
    } else if (touchEnd - touchStart > 50) {
      // Swiped right
      scroll('left');
    }
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by <span className="text-primary">Millions Globally</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from users and partners who trust Zhongfei for their commerce and mobility needs
          </p>
        </div>

        {/* Testimonials Horizontal Scroll Container */}
        <div className="relative mb-16">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow -ml-6"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} style={{ minWidth: 'calc(50% - 12px)', maxWidth: 'calc(50% - 12px)' }} className="md:max-w-sm md:min-w-sm lg:max-w-md lg:min-w-md">
                  <Card className="border-border hover:border-primary transition-colors overflow-hidden h-full">
                    <CardContent className="p-6">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary-foreground">{testimonial.image}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                          <p className="text-xs text-primary">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow -mr-6"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}
        </div>

        
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
