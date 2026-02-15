import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  // {
  //   title: 'FinTech Mobile Banking App',
  //   category: 'Mobile App Development',
  //   description: 'A complete digital banking solution with biometric authentication, real-time transactions, and AI-powered financial insights.',
  //   image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcwNzcwMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   tags: ['React Native', 'Node.js', 'AWS'],
  //   metrics: { users: '50K+', rating: '4.8★', launch: '3 months' },
  //   featured: true
  // },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Scalable marketplace platform with advanced search, payment gateway integration, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzA3MzM2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    metrics: { revenue: '$2M+', conversion: '+185%', speed: '0.8s' },
    featured: true
  },
  {
    title: 'SaaS Project Management Tool',
    category: 'Web Application',
    description: 'Enterprise-grade project management platform with team collaboration, time tracking, and advanced reporting.',
    image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcwNDkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'GraphQL', 'MongoDB'],
    metrics: { teams: '1000+', productivity: '+45%', uptime: '99.9%' },
    featured: false
  }
];

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/10 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Projects We're Proud Of
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real projects. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#14B8A6]/30 ${
                project.featured ? 'lg:h-[500px]' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-5'} gap-0`}>
                {/* Image */}
                <div className={`relative ${project.featured ? '' : 'lg:col-span-2'} h-64 lg:h-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14B8A6]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* View Project Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-medium shadow-xl hover:bg-[#14B8A6] hover:text-white transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={`${project.featured ? '' : 'lg:col-span-3'} p-8 lg:p-12 flex flex-col justify-between`}>
                  <div>
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] text-sm font-medium rounded-full mb-4">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#14B8A6] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className="text-2xl lg:text-3xl font-bold text-[#14B8A6] mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-transparent opacity-0 group-hover:opacity-20 transition-opacity rounded-bl-[100px]"></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-[#1C1C1C] hover:bg-[#14B8A6] text-white rounded-xl font-medium transition-all hover:shadow-xl hover:shadow-[#14B8A6]/30 inline-flex items-center gap-2">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
