"use client";

import React from "react";
import { Award, Target, Users, Lightbulb } from "lucide-react";

const slideInStyles = `
  @keyframes slideInFromLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInFromRight {
    from { opacity: 0; transform: translateX(60px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .slide-in-left {
    animation: slideInFromLeft 0.9s ease forwards;
  }

  .slide-in-right {
    animation: slideInFromRight 0.9s ease forwards;
  }
`;

export default function AboutUs() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push technological boundaries to create solutions that matter",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every decision is guided by our commitment to user satisfaction and trust",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in every aspect of our operations",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Our platforms are built on robust, secure, and scalable infrastructure",
    },
  ];

return (
  <section className="py-12 md:py-20 bg-gradient-to-b from-background via-background to-primary/5">
    <style>{slideInStyles}</style>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* TOP SECTION */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
    
    {/* LEFT TEXT */}
          <div className="slide-in-left">
            <p className="text-sm font-semibold text-primary mb-4 tracking-widest">
              ABOUT US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who is <span className="text-primary">Zhongfei Groupe?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ZHONGFEI (China-Africa Investment Groupe) is a transnational registered Investment Management Firm
that provides Investment Advisory service and in-depth work on formulating investment strategies for
government businesses, and helping private sector fulfil their needs and reach their financial goals.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since 2013, Zhongfei Groupe has been the leading promoter and volunteered Ambassador for H.E. Xi
JingPing special initiative &quot;BELT AND ROAD INITIATIVE&quot;-OBOR in Africa.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "2009", label: "Founded" },
                { value: "50+", label: "Team Members" },
                { value: "$2B+", label: "Annual GMV" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (FIXED) */}
          <div className="slide-in-right">
            {/* RIGHT IMAGE */}
<div className="slide-in-right flex justify-center items-center">
  <img
    src="/products/About Svg.png"
    alt="Zhongfei Groupe"
    className="w-full max-w-md md:max-w-lg h-auto object-contain"
  />
</div>
          </div>
        </div>

        
              {/* Journey - Road Timeline */}
        <div className="mt-12 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Our <span className="text-primary">Journey</span>
          </h3>

          <div className="relative bg-gradient-to-br from-slate-50 to-background rounded-2xl overflow-hidden p-6 md:p-10">
            {/* Decorative Blobs - Smaller */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            {/* Road Path SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 1800"
              preserveAspectRatio="none"
              style={{ pointerEvents: 'none' }}
            >
              {/* Road Background */}
              <path
                d="M 600 50 Q 700 200 700 400 Q 700 600 500 750 Q 350 850 400 1050 Q 450 1250 650 1350 Q 800 1450 700 1650 L 700 1800"
                stroke="#000"
                strokeWidth="80"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Road Dashes */}
              <path
                d="M 600 50 Q 700 200 700 400 Q 700 600 500 750 Q 350 850 400 1050 Q 450 1250 650 1350 Q 800 1450 700 1650 L 700 1800"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray="30,20"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>

            {/* Milestones */}
            <div className="relative space-y-16 md:space-y-20">
              {[
                { year: '2009', title: 'Founded', description: 'Established with vision to transform digital commerce', number: '01' },
                { year: '2012', title: 'First Platform Launch', description: 'Launched Zhongfei.shop, revolutionizing ecommerce in Asia', number: '02' },
                { year: '2016', title: 'Global Expansion', description: 'Expanded operations to 50+ countries globally', number: '03' },
                { year: '2020', title: 'Droverides Launch', description: 'Entered mobility and transportation space', number: '04' },
                { year: '2023', title: 'Milestone Achievement', description: 'Reached 50 million active users across all platforms', number: '05' },
              ].map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex items-center group">
                    {/* Pin Marker - Smaller */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
                      <div className="relative w-10 h-10 md:w-11 md:h-11 animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                        {/* Outer Ring */}
                        <div className="absolute inset-0 bg-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        {/* Pin */}
                        <div className="absolute inset-0.5 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold">{milestone.number}</span>
                        </div>
                      </div>
                    </div>



                     {/* Content Card */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <div className="group/card relative p-4 md:p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105">
                        {/* Glass Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="relative space-y-1">
                          <p className="text-xs font-bold text-foreground tracking-wide">
                            {milestone.year}
                          </p>
                          <h4 className="text-base md:text-lg font-bold text-foreground group-hover/card:text-primary transition-colors duration-300">
                            {milestone.title}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}