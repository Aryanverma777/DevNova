import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const caseStudies = [
  {
    title: 'TechVision Platform',
    category: 'Web Development & Design',
    description: 'A comprehensive SaaS platform redesign that increased user engagement by 240% and reduced churn by 35%.',
    image: 'https://images.unsplash.com/photo-1576057122708-9608db46b2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3MDc5MTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Design System', 'UX Research'],
    metrics: { engagement: '+240%', churn: '-35%' }
  },
  {
    title: 'GlobalRetail App',
    category: 'Mobile & E-commerce',
    description: 'End-to-end mobile commerce experience serving 500K+ users across 15 countries with seamless checkout.',
    image: 'https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDc2MjIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Payment Integration', 'Analytics'],
    metrics: { users: '500K+', countries: '15' }
  },
  {
    title: 'FinanceHub Brand',
    category: 'Branding & Strategy',
    description: 'Complete brand transformation for a fintech startup, from naming to visual identity and go-to-market strategy.',
    image: 'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA3MzA0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Brand Identity', 'Positioning', 'Marketing'],
    metrics: { funding: '$2M', growth: '+180%' }
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-white rounded-full text-sm mb-6 text-gray-700">
              Our Work
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Projects That Made an Impact
            </h2>
          </div>
          <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 transition-colors self-start lg:self-auto">
            View All Projects
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 hover:border-gray-300 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-3 tracking-wide">
                      {study.category}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {study.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics & CTA */}
                  <div className="flex items-end justify-between">
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(study.metrics).map(([key, value], idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-bold text-[#1a1a1a]">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <button className="w-12 h-12 border border-gray-300 group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
