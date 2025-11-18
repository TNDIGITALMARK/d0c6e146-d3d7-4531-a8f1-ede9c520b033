import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showIllustration?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showIllustration = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-[hsl(var(--navy-primary))] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 pt-4">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="px-6 py-3 bg-[hsl(var(--blue-accent))] text-white font-medium rounded-md hover:bg-[hsl(217,91%,50%)] transition-colors inline-block"
                  >
                    {primaryCta.text}
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="px-6 py-3 bg-white text-[hsl(var(--navy-primary))] font-medium rounded-md hover:bg-gray-100 transition-colors inline-block"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Illustration */}
          {showIllustration && (
            <div className="hidden md:block">
              <div className="relative w-full h-64 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-md mx-auto"
                >
                  {/* Decorative Legal Scales Illustration */}
                  <g opacity="0.8">
                    {/* Left scale base */}
                    <circle cx="120" cy="220" r="40" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                    <line x1="120" y1="180" x2="120" y2="120" stroke="#3B82F6" strokeWidth="2"/>

                    {/* Connection dots */}
                    <circle cx="120" cy="120" r="4" fill="#3B82F6"/>
                    <circle cx="200" cy="80" r="4" fill="#3B82F6"/>
                    <circle cx="280" cy="120" r="4" fill="#3B82F6"/>

                    {/* Connecting lines */}
                    <line x1="120" y1="120" x2="200" y2="80" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
                    <line x1="200" y1="80" x2="280" y2="120" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
                  </g>

                  {/* Right scale with connecting lines */}
                  <g opacity="0.8">
                    {/* Right scale base */}
                    <circle cx="280" cy="220" r="40" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                    <line x1="280" y1="180" x2="280" y2="120" stroke="#3B82F6" strokeWidth="2"/>

                    {/* Connection to center */}
                    <line x1="280" y1="120" x2="200" y2="80" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
                  </g>

                  {/* Balance beam */}
                  <line x1="120" y1="120" x2="280" y2="120" stroke="#3B82F6" strokeWidth="2"/>

                  {/* Center post */}
                  <line x1="200" y1="120" x2="200" y2="50" stroke="#3B82F6" strokeWidth="2"/>
                  <circle cx="200" cy="50" r="6" fill="#3B82F6"/>

                  {/* Decorative connecting nodes */}
                  <circle cx="160" cy="100" r="3" fill="#3B82F6" opacity="0.5"/>
                  <circle cx="240" cy="100" r="3" fill="#3B82F6" opacity="0.5"/>
                  <circle cx="200" cy="150" r="3" fill="#3B82F6" opacity="0.5"/>

                  {/* Additional connecting lines */}
                  <line x1="160" y1="100" x2="200" y2="80" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
                  <line x1="240" y1="100" x2="200" y2="80" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
