import React from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-8">
            Let's Work Together
          </div>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            We're here to help you build something exceptional. Let's discuss your project and explore how we can bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group">
              <MessageSquare className="w-5 h-5" />
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send us an Email
            </button>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <div className="text-sm text-gray-400 mb-2">Email</div>
              <a href="mailto:hello@agency.com" className="text-lg hover:text-gray-300 transition-colors">
                hello@agency.com
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Phone</div>
              <a href="tel:+1234567890" className="text-lg hover:text-gray-300 transition-colors">
                  +91 9343257775
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Location</div>
              <div className="text-lg">
                Global · Remote First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
