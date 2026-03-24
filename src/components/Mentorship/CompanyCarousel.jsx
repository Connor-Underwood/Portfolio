import { useState, useEffect } from 'react';

import googleLogo from '../../assets/logos/google.png';
import amazonLogo from '../../assets/logos/amazon.png';
import microsoftLogo from '../../assets/logos/microsoft.png';
import purdueLogo from '../../assets/logos/purdue.png';
import wabashLogo from '../../assets/logos/wabash.jpg';
import jdSportsLogo from '../../assets/logos/jd.png';

const CompanyCarousel = () => {
  const companies = [
    { name: 'Google', logo: googleLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Purdue University', logo: purdueLogo },
    { name: 'Wabash National', logo: wabashLogo },
    { name: 'JD Sports', logo: jdSportsLogo }
  ];

  const extendedCompanies = [...companies, ...companies];

  return (
    <div className='relative w-full overflow-hidden py-8 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-xl border border-indigo-500/20 shadow-xl'>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 4rem;
          padding: 0 2rem;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        @media (max-width: 768px) {
          .marquee-track {
            gap: 1.5rem;
            padding: 0 1rem;
            animation-duration: 10s;
          }
        }
      `}</style>

      {/* Animated background orbs */}
      <div className='absolute top-0 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000' />

      <p className='relative z-10 text-center bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent text-sm mb-6 font-bold tracking-wide uppercase'>
        Experience At
      </p>

      <div className='relative z-10'>
        {/* Gradient overlays for smooth edges */}
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none' />

        <div className='marquee-track'>
          {extendedCompanies.map((company, idx) => (
            <div
              key={idx}
              className='flex-shrink-0 flex flex-col items-center justify-center w-32 group'
            >
              <div className='relative w-20 h-20 rounded-xl bg-white/95 flex items-center justify-center p-3 group-hover:scale-110 transition-all shadow-lg group-hover:shadow-2xl group-hover:shadow-indigo-500/30 border-2 border-transparent group-hover:border-indigo-400'>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className='w-full h-full object-contain'
                />
              </div>
              <span className='text-xs text-gray-300 font-medium text-center mt-3 group-hover:text-indigo-300 transition-colors'>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;