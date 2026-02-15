import React from 'react';
 

import { ArrowRight, Sparkles, Code, Smartphone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14B8A6] rounded-full blur-[150px] opacity-5"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-12 lg:left-24 opacity-20 animate-bounce">
        <Code className="w-12 h-12 text-[#14B8A6]" />
      </div>
      <div className="absolute bottom-40 right-16 lg:right-32 opacity-20" style={{ animation: 'bounce 3s infinite' }}>
        <Smartphone className="w-10 h-10 text-[#14B8A6]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">DEVNOVA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-[#14B8A6] transition-colors">Services</a>
            <a href="#work" className="text-sm hover:text-[#14B8A6] transition-colors">Work</a>
            <a href="#team" className="text-sm hover:text-[#14B8A6] transition-colors">Team</a>
            {/* <a href="#pricing" className="text-sm hover:text-[#14B8A6] transition-colors">Pricing</a> */}
            <button className="px-6 py-2.5 bg-[#14B8A6] hover:bg-[#0D9488] text-white rounded-xl transition-all hover:shadow-lg hover:shadow-[#14B8A6]/20 font-medium">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 lg:pt-28 lg:pb-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Where Creativity Meets Technology</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 tracking-tight">
            We Build Scalable
            <br />
            <span className="bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#14B8A6] bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
           Fusing cutting-edge technology with strategic design to deliver measurable business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="group px-8 py-4 bg-[#14B8A6] hover:bg-[#0D9488] text-white rounded-xl font-medium transition-all hover:shadow-xl hover:shadow-[#14B8A6]/30 inline-flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 rounded-xl font-medium transition-all">
              View Case Studies
            </button>
          </div>

          {/* Stats Cards - Floating Effect */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              // { label: 'Projects Delivered', value: '50+' },
              // { label: 'Happy Clients', value: '47+' },
              // { label: 'Team Members', value: '12+' },
              // { label: 'Years Experience', value: '5+' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#14B8A6]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* <div className="text-3xl lg:text-4xl font-bold text-[#14B8A6] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
