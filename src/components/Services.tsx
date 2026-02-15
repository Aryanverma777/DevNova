import React from 'react';
import { Code, Palette, TrendingUp, Smartphone, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand & Design',
    description: 'Strategic brand identity and visual design that resonates with your audience and stands out in the market.',
    features: ['Brand Strategy', 'UI/UX Design', 'Design Systems']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies, optimized for performance and scale.',
    features: ['React & Next.js', 'E-commerce', 'CMS Integration']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
    features: ['iOS & Android', 'React Native', 'App Store Launch']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility, engagement, and conversions for your brand.',
    features: ['SEO & SEM', 'Social Media', 'Analytics']
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation strategies aligned with your business goals and market opportunities.',
    features: ['Consulting', 'Roadmapping', 'Market Research']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization services that ensure your digital products are fast, reliable, and deliver measurable results.',
    features: ['Speed Optimization', 'Testing', 'Monitoring']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm mb-6 text-gray-700">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            Services Built for Growth
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer end-to-end digital solutions tailored to help your business thrive in an ever-evolving digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 lg:p-10 border border-gray-200 hover:border-gray-300 bg-white hover:shadow-xl transition-all duration-300 rounded-sm"
            >
              <div className="w-12 h-12 bg-gray-100 group-hover:bg-[#1a1a1a] rounded-sm flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors inline-flex items-center gap-2">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
