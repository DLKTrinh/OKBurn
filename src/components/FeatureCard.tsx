import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative bg-[#1a1a1a] rounded-xl p-6 shadow-lg transition-all duration-500 border border-gray-800 overflow-hidden max-h-44 hover:max-h-[250px]">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="bg-[#FF0000] bg-opacity-10 rounded-full p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-3">{title}</h3>

        {/* Description (hidden until hover, but pushes inside card) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
          <p className="text-[#CCCCCC] text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
