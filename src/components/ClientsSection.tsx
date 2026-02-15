import React from 'react';

// const clients = [
//   { name: 'TechCorp', logo: 'TC' },
//   { name: 'StartupHub', logo: 'SH' },
//   { name: 'FinanceFlow', logo: 'FF' },
//   { name: 'HealthPlus', logo: 'H+' },
//   { name: 'EduLearn', logo: 'EL' },
//   { name: 'RetailPro', logo: 'RP' },
//   { name: 'LogisticX', logo: 'LX' },
//   { name: 'MediaWave', logo: 'MW' },
//   { name: 'CloudSync', logo: 'CS' },
//   { name: 'DataViz', logo: 'DV' },
//   { name: 'SocialHub', logo: 'SH' },
//   { name: 'TravelGo', logo: 'TG' }
// ];

export function ClientsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#14B8A6] rounded-full blur-[150px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <div className="inline-block px-4 py-2 bg-[#14B8A6]/10 rounded-full text-[#14B8A6] text-sm font-medium mb-6">
            trusted by
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
         tailored solutions for every business 
          </h2>
          <p className="text-xl text-gray-600">
            From small beginnings to digital excellence—we walk the journey with you.
          </p>
        </div>

        {/* Clients Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
          {clients.map((client, index) => ( */}
            {/* <div
              key={index}
              className="group relative aspect-square bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#14B8A6]/30 hover:-translate-y-2 flex items-center justify-center"
            > */}
              {/* Glow Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-[#14B8A6]/0 group-hover:from-[#14B8A6]/10 group-hover:to-transparent rounded-2xl transition-all"></div> */}

              {/* Logo Placeholder */}
              {/* <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-gray-300 group-hover:text-[#14B8A6] transition-colors mb-2">
                  {client.logo}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Industry Coverage */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6] rounded-full blur-[100px] opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-center">
                We Work Across Industries
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-3">🏦</div>
                  <h4 className="font-bold mb-2">FinTech & Banking</h4>
                  <p className="text-sm text-gray-400">Secure financial solutions</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🏥</div>
                  <h4 className="font-bold mb-2">Healthcare & MedTech</h4>
                  <p className="text-sm text-gray-400">HIPAA-compliant platforms</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="font-bold mb-2">E-Commerce & Retail</h4>
                  <p className="text-sm text-gray-400">Scalable marketplaces</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🎓</div>
                  <h4 className="font-bold mb-2">EdTech & Learning</h4>
                  <p className="text-sm text-gray-400">Interactive platforms</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🚚</div>
                  <h4 className="font-bold mb-2">Logistics & Supply Chain</h4>
                  <p className="text-sm text-gray-400">Smart tracking systems</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="font-bold mb-2">SaaS & Enterprise</h4>
                  <p className="text-sm text-gray-400">Business automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
