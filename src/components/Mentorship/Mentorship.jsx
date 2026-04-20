import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MentorshipHero from './MentorshipHero';
import PricingCard from './PricingCard';
import ApplicationForm from './ApplicationForm';
import CompanyCarousel from './CompanyCarousel';
import { pricingTiers } from './mentorshipData';

const Mentorship = () => {
  const [selectedTier, setSelectedTier] = useState('');

  const handleTierSelect = (tierId) => {
    setSelectedTier(tierId);
  };

  return (
    <div className='space-y-6'>
      {/* Hero Section */}
      <MentorshipHero />

      {/* Company Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <CompanyCarousel />
      </motion.div>

      {/* Pricing Section */}
      <div className='space-y-8'>
        <motion.div
          className='text-center space-y-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 id="pricing-packages" className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            Choose Your Package
          </h3>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            Select the tutoring program that fits your needs
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 p-6'>
          {pricingTiers.map((tier, idx) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={idx}
              onSelect={handleTierSelect}
            />
          ))}
        </div>
      </div>

      {/* Application Form Section */}
      <div className='space-y-8'>
        <ApplicationForm
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
        />
      </div>
    </div>
  );
};

export default Mentorship;
