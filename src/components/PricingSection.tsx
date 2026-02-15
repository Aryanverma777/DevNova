import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

const plans = [
  {
    name: 'MVP Starter',
    price: '$15,000',
    duration: 'Starting from',
    description: 'Perfect for validating your idea and getting to market fast',
    features: [
      'MVP Development (4-6 weeks)',
      'Core Features Implementation',
      'Responsive Web or Mobile App',
      'Basic UI/UX Design',
      'Database Setup',
      '2 Rounds of Revisions',
      '1 Month Post-Launch Support',
      'Deployment & Launch'
    ],
    highlighted: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth Package',
    price: '$35,000',
    duration: 'Starting from',
    description: 'For growing businesses ready to scale their digital presence',
    features: [
      'Full-Featured Application (8-12 weeks)',
      'Custom UI/UX Design',
      'Web + Mobile Apps',
      'Advanced Features & Integrations',
      'Admin Dashboard',
      'API Development',
      '3 Months Maintenance',
      'Performance Optimization',
      'SEO & Analytics Setup',
      'Priority Support'
    ],
    highlighted: true,
    cta: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    duration: 'Let\'s Talk',
    description: 'Tailored solutions for complex projects and large-scale applications',
    features: [
      'Custom Development Timeline',
      'Dedicated Development Team',
      'Enterprise Architecture',
      'Advanced Security & Compliance',
      'Microservices & APIs',
      'Cloud Infrastructure Setup',
      'Third-Party Integrations',
      'Ongoing Maintenance & Support',
      'SLA Guarantee',
      '24/7 Support'
    ],
    highlighted: false,
    cta: 'Contact Sales'
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px] opacity-5"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#14B8A6]/10 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Flexible Plans for
            <br />Every Stage
          </h2>
          <p className="text-xl text-gray-600">
            Choose the package that fits your needs. All plans include quality code, modern design, and our commitment to your success.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] text-white shadow-2xl scale-105 lg:scale-110 border-2 border-[#14B8A6]'
                  : 'bg-gray-50 hover:bg-white shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#14B8A6]/30 hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] rounded-full text-sm font-medium shadow-lg">
                    <Zap className="w-4 h-4" />
                    {plan.cta}
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              {!plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-[#14B8A6]/0 hover:from-[#14B8A6]/5 hover:to-transparent rounded-3xl transition-all"></div>
              )}

              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-[#14B8A6]' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <div className={`text-sm mt-2 ${plan.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {plan.duration}
                  </div>
                </div>

                {/* Description */}
                <p className={`mb-8 leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-medium transition-all mb-8 flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-lg hover:shadow-xl hover:shadow-[#14B8A6]/30'
                      : 'bg-[#1C1C1C] hover:bg-[#14B8A6] text-white'
                  }`}
                >
                  {plan.cta !== 'Most Popular' ? plan.cta : 'Choose Plan'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <div className={`text-sm font-medium mb-4 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    What's included:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-[#14B8A6]/20' : 'bg-[#14B8A6]/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-[#14B8A6]' : 'text-[#14B8A6]'}`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-medium transition-all">
              Schedule a Call
            </button>
            <button className="px-8 py-4 border border-gray-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 text-gray-900 rounded-xl font-medium transition-all">
              View FAQ
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-bold mb-2 text-gray-900">Flexible Payment</h4>
              <p className="text-sm text-gray-600">Milestone-based payments or monthly retainers</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold mb-2 text-gray-900">Secure & Protected</h4>
              <p className="text-sm text-gray-600">NDA & IP protection guaranteed</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-2 text-gray-900">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Agile process with weekly updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
