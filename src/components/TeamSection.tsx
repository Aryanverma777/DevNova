import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import harsh from "./images/harsh.jpeg";
import aryan from "./images/aryan.jpeg";
import tulshi from "./images/tulshi.jpeg";
import kunesh from "./images/kunesh.jpeg";


const teamMembers = [
  {
    name: 'Harsh Thakur',
    role: 'Frontend Developer',
    expertise: 'UI/UX & Branding',
    image: harsh,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Aryan Verma',
    role: 'Backend Developer',
    expertise: 'Django & Flask',
    image: aryan,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Tulshi Keswani',
    role: 'Full-Stack Development',
    expertise: 'MERN Stack ',
    image: tulshi,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Kunesh Bhanpurkar',
    role: 'Backend Developer',
    expertise: 'Node.js & Express',
    image: kunesh,
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/10 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Meet The Experts
            <br />Behind Your Success
          </h2>
          <p className="text-xl text-gray-600">
            A diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card with Hover Effect */}
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#14B8A6] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#14B8A6] hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.social.github} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#14B8A6] hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#14B8A6] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.expertise}
                  </p>
                </div>

                {/* Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#14B8A6]/10 to-blue-500/10 rounded-2xl p-10 max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <button className="px-8 py-3 bg-[#14B8A6] hover:bg-[#0D9488] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#14B8A6]/30">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
