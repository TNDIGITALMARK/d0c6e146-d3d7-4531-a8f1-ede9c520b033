import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-lg p-8 shadow hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${className}`}>
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center text-[hsl(var(--navy-primary))] mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[hsl(var(--navy-primary))] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
