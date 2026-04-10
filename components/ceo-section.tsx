import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail } from 'lucide-react';


export default function CEOSection() {
return (
  <section className="py-12 md:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <Image
                src="/EXECUTIVE TEAM/Dr.Kyei.png"
                alt="Wei Zhang - CEO and Founder"
                width={400}
                height={400}
                className="w-full h-auto rounded-3xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right - Content Section */}
          <div>
            <div className="text-sm font-medium text-primary mb-4">Leadership</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Founder & <span className="text-primary">CEO</span>
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Kyei Baffour</h3>
              <p className="text-lg text-primary font-medium mb-4">Founder & Chief Executive Officer</p>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Dr. Kyei Baffour is the visionary founder and CEO of Zhongfei Groupe. With 20+ years of experience in technology 
                and digital innovation. For many years, Nana has been a principal Promoter and volunteered
Ambassador for the Chinese government Special Initiative &quot;BELT AND
ROAD&quot;, OBOR in Africa.Nana Kyei Baffour has promoted investment between China and Africa
for many years and through his experience, he has supported many
Chinese businesses to be established in Ghana, Togo, Liberia, Nigeria
and so on.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                He is an Expert in building, revitalizing and optimizing company&#39;s
organizational infrastructure, products, technologies, processes, and
measurement systems to optimize results. Excellent qualifications and
experience in strategic and business planning, quality/performance
management, team building, leadership and also a resourceful problem
solver with proven ability to bring quick resolution to challenging
situations.
              </p>
            </div>

            {/* Background */}
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-foreground text-sm text-primary mb-2">PROFESSIONAL BACKGROUND</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• M.S. Computer Science, Stanford University</li>
                  <li>• B.S. Computer Engineering, Tsinghua University</li>
                  <li>• Former CTO at leading tech conglomerate (2005-2009)</li>
                  <li>• Tech advisor to multiple Fortune 500 companies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-sm text-primary mb-2">ACHIEVEMENTS</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Named &quot;Entrepreneur of the Year&quot; (2019)</li>
                  <li>• Listed among &quot;50 Most Influential Tech Leaders&quot;</li>
                  <li>• Patent holder in distributed systems and payments</li>
                  <li>• Board member of major tech and innovation foundations</li>
                </ul>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-foreground font-semibold mb-2">Nana&apos;s Vision:</p>
              <p className="text-muted-foreground italic">
                &quot;Technology should be accessible to everyone and should create positive change in society. 
                At Zhongfei, we&apos;re not just building platforms—we&apos;re building an ecosystem that empowers 
                millions and drives sustainable economic growth.&quot;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-secondary text-secondary hover:bg-secondary/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-secondary text-secondary hover:bg-secondary/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-secondary text-secondary hover:bg-secondary/10"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
