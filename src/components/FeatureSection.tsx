import React from 'react';
import type { LucideIcon } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  accentWord?: string;
  features: Feature[];
  backgroundColor?: 'light' | 'white';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  accentWord, 
  features, 
  backgroundColor = 'light' 
}) => {
  const bgClass = backgroundColor === 'white' ? 'bg-[#333333]' : 'bg-[#333333]';
  
  return (
    <section id='features' className={`${bgClass} py-20  scroll-mt-35 ` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title.split(accentWord || '').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && accentWord && (
                  <span className="text-[#FF0000]">{accentWord}</span>
                )}
              </React.Fragment>
            ))}
          </h2>
          {subtitle && (
            <p className="text-lg text-white max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ minHeight: '250px' }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto border-t border-[#666666] mt-16 w-[900px]"></div>
    </section>
  );
};

export default FeatureSection;
