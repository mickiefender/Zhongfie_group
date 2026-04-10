import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsUpdates() {
  const news = [
    {
      id: 1,
      date: 'April 2024',
      category: 'Product Launch',
      title: 'Zhongfei.shop Introduces AI-Powered Recommendation Engine',
      description: 'Revolutionary machine learning features now live across all platforms, increasing conversion rates by 45% for sellers.',
      image: 'AI',
      tags: ['AI/ML', 'E-commerce', 'Feature']
    },
    {
      id: 2,
      date: 'March 2024',
      category: 'Expansion',
      title: 'Droverides Launches in 15 New Cities Across Africa',
      description: 'Extending mobility services to emerging markets, creating thousands of driver opportunities and improving urban transportation.',
      image: 'EXP',
      tags: ['Expansion', 'Mobility', 'Impact']
    },
    {
      id: 3,
      date: 'February 2024',
      category: 'Partnership',
      title: 'Strategic Partnership with Leading Financial Institutions',
      description: 'Launching integrated financial services including micro-loans and investment products for our merchant and user communities.',
      image: 'PART',
      tags: ['Partnership', 'FinTech', 'Growth']
    },
    {
      id: 4,
      date: 'January 2024',
      category: 'Sustainability',
      title: 'Carbon Neutral Operations by 2025: Sustainability Commitment',
      description: 'Zhongfei commits to net-zero emissions, investing in renewable energy and sustainable logistics solutions.',
      image: 'GREEN',
      tags: ['Sustainability', 'Environment', 'CSR']
    },
    {
      id: 5,
      date: 'December 2023',
      category: 'Achievement',
      title: 'Zhongfei Reaches 50 Million Active Users Milestone',
      description: 'Celebrating unprecedented growth with expanded services and enhanced platform features for all user segments.',
      image: 'MIL',
      tags: ['Milestone', 'Growth', 'Community']
    },
    {
      id: 6,
      date: 'November 2023',
      category: 'Technology',
      title: 'Blockchain Integration for Enhanced Security',
      description: 'Implementing blockchain technology for transparent and secure transaction verification across all platforms.',
      image: 'TECH',
      tags: ['Blockchain', 'Security', 'Innovation']
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Company News & <span className="text-primary">Developments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest innovations, expansions, and achievements
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <span className="text-6xl font-bold">AI</span>
                  <p className="mt-2 text-sm">Latest Innovation</p>
                </div>
              </div>
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">April 2024</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Zhongfei.shop Introduces AI-Powered Recommendation Engine
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We&apos;re thrilled to announce the launch of our cutting-edge AI recommendation system. 
                  This breakthrough technology uses advanced machine learning to understand customer preferences 
                  and deliver personalized shopping experiences, resulting in a 45% increase in conversion rates 
                  for our sellers and significantly improved customer satisfaction.
                </p>
                <Button className="rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(1).map((item) => (
            <Card key={item.id} className="border-border hover:border-primary transition-colors overflow-hidden group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <span className="text-4xl font-bold text-primary opacity-30">{item.image}</span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary text-xs font-medium mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {item.category}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-card border border-border rounded px-2 py-1 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 p-8 md:p-12 text-secondary-foreground text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, product updates, and exclusive insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary/20 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-secondary-foreground/50"
            />
            <Button className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
