import React from 'react';
import { Sparkles, Linkedin, Twitter, Github, Instagram, ArrowRight } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#14B8A6] rounded-full blur-[150px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DEVNOVA</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                We're a global team of designers, developers, and strategists building scalable digital products for startups and enterprises.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#14B8A6] rounded-xl flex items-center justify-center transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#14B8A6] rounded-xl flex items-center justify-center transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#14B8A6] rounded-xl flex items-center justify-center transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#14B8A6] rounded-xl flex items-center justify-center transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">MVP Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Backend & APIs</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#14B8A6] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay in the Loop</h3>
            <p className="text-gray-400 mb-6">
              Get updates on new projects, tech insights, and industry trends
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-[#14B8A6]/30 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2026 DigitalForge. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#14B8A6] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#14B8A6] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#14B8A6] transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
