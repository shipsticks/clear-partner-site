import React from 'react';
import BenefitItem from './BenefitItem';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'truck-icon',
      title: 'No Baggage, No Boundaries',
      description: 'Skip the hassle of carrying and checking bags.',
    },
    {
      icon: 'globe-icon',
      title: 'Door-to-Door Convenience',
      description: 'We pick up and deliver your luggage directly.',
    },
    {
      icon: 'suitcase-icon',
      title: 'Travel with Confidence',
      description: 'Every shipment is trackable and fully insured.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 items-center bg-white text-center lg:text-left px-8 py-14 lg:px-24 xl:px-44 2xl:px-60 lg:py-16 w-full">
      <div className="flex-1 space-y-4 md:space-y-0 md:flex md:flex-col text-[#1C2938] xl:pr-20">
        <h2 className="lg:text-4xl text-2xl font-bold mb-6">
          Ship & Play benefits
        </h2>
        <div className="flex flex-1 flex-col justify-center space-y-6 lg:space-y-0 divide-y divide-gray-300 max-w-[635px] sm:text-nowrap">
          {benefits.map((benefit, index) => (
            <div key={index} className="py-4 sm:px-28 lg:px-0">
              <BenefitItem {...benefit} />
            </div>
          ))}
        </div>

      </div>
      <div className="hidden lg:pl-6 lg:block">
        <img
          src="/images/bike-ampersand.png"
          alt="Benefits Visual"
          className="h-[463px]"
          // width={508}
          // height={463}
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
