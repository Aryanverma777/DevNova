import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold tracking-tight">AGENCY</div>
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex items-center gap-12">
          <a href="#services" className="text-sm tracking-wide hover:text-gray-300 transition-colors">Services</a>
          <a href="#work" className="text-sm tracking-wide hover:text-gray-300 transition-colors">Work</a>
          <a href="#about" className="text-sm tracking-wide hover:text-gray-300 transition-colors">About</a>
          <a href="#contact" className="text-sm tracking-wide hover:text-gray-300 transition-colors">Contact</a>
          <button className="px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32 lg:pt-32 lg:pb-40 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-8">
            ✦ International Creative Studio
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 tracking-tight">
            We Build Digital
            <br />
            <span className="text-gray-400">Experiences</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            A global team of designers, developers, and strategists crafting premium digital solutions that drive results for forward-thinking brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group">
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 hover:bg-white/5 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Stats section at bottom */}
      <div className="container mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-white/10">
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">150+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
            <div className="text-gray-400 text-sm">Countries Served</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">10Y</div>
            <div className="text-gray-400 text-sm">Industry Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
