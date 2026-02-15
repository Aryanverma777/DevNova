import React from 'react';
import { Monitor, Smartphone, Palette, Rocket, Database, Settings } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, performant, and SEO-optimized.',
    gradient: 'from-[#14B8A6] to-[#0D9488]'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality. From wireframes to high-fidelity prototypes.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Robust backend systems and RESTful APIs. Database design, cloud infrastructure, and microservices architecture.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Fast-track your idea to market. We build lean MVPs to validate your concept and attract investors.',
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and optimization to keep your digital products running smoothly.',
    gradient: 'from-cyan-500 to-cyan-600'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/10 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Services That Scale
            <br />Your Business
          </h2>
          <p className="text-xl text-gray-600">
            End-to-end digital solutions tailored to your unique business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#14B8A6]/20 hover:-translate-y-2"
            >
              {/* Gradient Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="text-[#14B8A6] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need something custom?</p>
          <button className="px-8 py-4 bg-[#14B8A6] hover:bg-[#0D9488] text-white rounded-xl font-medium transition-all hover:shadow-xl hover:shadow-[#14B8A6]/30">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
