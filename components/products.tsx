"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, MapPin, Zap, ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Zhongfei.shop",
      icon: ShoppingCart,
      subtitle: "Multi-Vendor Ecommerce Platform",
      description:
        "A comprehensive ecommerce solution connecting merchants and consumers globally. Featuring secure payment processing, inventory management, and advanced logistics integration.",
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Secure payment gateway",
        "Logistics integration",
      ],
      image: "/products/ecommerce-flyer.png",
      cta: "Explore Shop",
      link: "https://zhongfei.shop",
    },
    {
      id: 2,
      name: "Droverides",
      icon: MapPin,
      subtitle: "Online Hailing & Mobility App",
      description:
        "Revolutionary transportation platform offering convenient, safe, and affordable rides. Connecting passengers with verified drivers through intelligent matching algorithms.",
      features: [
        "Real-time tracking",
        "Driver verification",
        "Dynamic pricing",
        "Safety features",
      ],
      image: "/products/drove-flyer.png",
      cta: "Book a Ride",
      link: "https://droverides.com",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
            OUR PRODUCTS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Digital Solutions for Modern Needs
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our innovative platforms designed to transform commerce and mobility
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <Link
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]">

                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl pointer-events-none" />

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500 -z-10 pointer-events-none" />

                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    
                    {/* Image */}
                    <div className="mb-6 -mx-8 -mt-8 overflow-hidden rounded-b-2xl h-56">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4 transition group-hover:scale-110 group-hover:bg-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {product.name}
                    </h3>

                    <p className="text-sm text-primary font-semibold mb-3">
                      {product.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground text-sm mb-2">
                        Key Features:
                      </h4>

                      <ul className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Zap className="w-3.5 h-3.5 text-primary mt-0.5" />
                            <span className="text-xs text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      {product.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}