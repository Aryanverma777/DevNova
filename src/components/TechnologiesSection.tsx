import React from 'react';

const technologies = [
  {
    category: 'Frontend',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '🎨' }
    ]
  },
  {
    category: 'Backend',
    tools: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    tools: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⚙️' },
      { name: 'CI/CD', icon: '🔄' }
    ]
  },
  {
    category: 'Design',
    tools: [
      { name: 'Figma', icon: '🎯' },
    ]
  },
  {
    category: 'Other',
    tools: [
      { name: 'Firebase', icon: '🔥' },
      { name: 'Stripe', icon: '💳' },
      { name: 'Vercel', icon: '▼' }
    ]
  }
];

export function TechnologiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1C1C1C] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/20 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            Tech Stack
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-400">
            We work with cutting-edge technologies to build fast, secure, and scalable solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#14B8A6]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-[#14B8A6]/0 group-hover:from-[#14B8A6]/10 group-hover:to-transparent rounded-2xl transition-all"></div>

              <div className="relative z-10">
                {/* Category Title */}
                <h3 className="text-xl font-bold mb-6 text-[#14B8A6]">
                  {tech.category}
                </h3>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {tech.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors overflow-hidden"
                    >
                      <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                      <span className="text-sm font-medium truncate">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-[#14B8A6] mb-2">15+</div>
            <div className="text-gray-400">Programming Languages</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#14B8A6] mb-2">15+</div>
            <div className="text-gray-400">Frameworks & Tools</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#14B8A6] mb-2">100%</div>
            <div className="text-gray-400">Modern Stack</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#14B8A6] mb-2">24/7</div>
            <div className="text-gray-400">Learning & Improving</div>
          </div>
        </div>
      </div>
    </section>
  );
}
