import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    content: 'Working with this agency transformed our digital presence. Their strategic approach and attention to detail resulted in a 300% increase in conversions. Truly world-class work.',
    author: 'Sarah Mitchell',
    role: 'CEO, TechVision',
    company: 'Fortune 500 SaaS',
    image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzA2ODkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  },
  {
    content: 'The team\'s expertise in both design and development is unmatched. They delivered a complex mobile app on time and exceeded all our expectations. Communication was flawless throughout.',
    author: 'Marcus Chen',
    role: 'Product Director',
    company: 'GlobalRetail Inc.',
    image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwNzU2NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  },
  {
    content: 'From brand strategy to implementation, they handled everything with professionalism and creativity. Our brand now truly reflects our values and resonates with our target audience.',
    author: 'Elena Rodriguez',
    role: 'Founder & CMO',
    company: 'FinanceHub',
    image: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzA3NzA3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm mb-6 text-gray-700">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 lg:p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gray-300 mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">95%</div>
              <div className="text-gray-600">Repeat Business</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
