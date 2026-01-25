'use client';

import { useTranslations } from 'next-intl';
import { Leaf, Truck, BadgeCheck, Gem } from 'lucide-react';

const WhyUs = () => {
  const t = useTranslations('whyUs');
  
  const features = [
    {
      id: 1,
      icon: Leaf,
      key: 'sustainable'
    },
    {
      id: 2,
      icon: Truck,
      key: 'fast_delivery'
    },
    {
      id: 3,
      icon: BadgeCheck,
      key: 'quality'
    },
    {
      id: 4,
      icon: Gem,
      key: 'value'
    }
  ];

  return (
    <section className="bg-[#EEEAE2]">
      <div className="text-center">
        <h2 className="font-bold py-5 text-[#474747] text-3xl">
          {t('title')}
        </h2>
        <p className="text-center text-[#606060] px-3 mb-5">
          {t('subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow transition transform hover:scale-110 hover:bg-[#C09059] flex items-center justify-center">
                <Icon size={40} className="text-[#C09059] hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-[#474747] text-lg">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 text-[#606060]">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;