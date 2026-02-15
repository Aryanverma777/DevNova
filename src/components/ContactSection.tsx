import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, Calendar } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#1C1C1C] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14B8A6] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/20 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Build Something
            <br />Amazing Together
          </h2>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear about it. Get in touch and let's make it happen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  What service are you interested in? *
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="mvp">MVP Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="fullstack">Full-Stack Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Project Budget
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white appearance-none cursor-pointer">
                  <option value="">Select budget range</option>
                  <option value="10-25k">$10,000 - $25,000</option>
                  <option value="25-50k">$25,000 - $50,000</option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Tell us about your project *
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all text-white placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full py-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-[#14B8A6]/30 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-400 text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-400 text-sm mb-2">Drop us a line anytime</p>
                    <a href="mailto:hello@digitalforge.com" className="text-[#14B8A6] hover:underline">
                      hello@digitalforge.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-400 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                    <a href="tel: +91 9343257775" className="text-[#14B8A6] hover:underline">
                      +91 9343257775
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Live Chat</h3>
                    <p className="text-gray-400 text-sm mb-2">Chat with our team</p>
                    <button className="text-[#14B8A6] hover:underline">
                      Start Conversation
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Schedule a Call</h3>
                    <p className="text-gray-400 text-sm mb-2">Book a time that works for you</p>
                    <button className="text-[#14B8A6] hover:underline">
                      View Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-gradient-to-br from-[#14B8A6]/10 to-blue-500/10 rounded-2xl p-8 border border-[#14B8A6]/20">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">Our Offices</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <div className="font-medium">🇺🇸 San Francisco, USA</div>
                      <div className="text-sm text-gray-400">HQ & Development Center</div>
                    </div>
                    <div>
                      <div className="font-medium">🇬🇧 London, UK</div>
                      <div className="text-sm text-gray-400">European Operations</div>
                    </div>
                    <div>
                      <div className="font-medium">🇸🇬 Singapore</div>
                      <div className="text-sm text-gray-400">Asia Pacific Hub</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Remote-first company with teams across 15+ countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
