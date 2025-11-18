import Image from 'next/image';
import Link from 'next/link';

interface LawMatchLogoProps {
  className?: string;
  href?: string;
}

export function LawMatchLogo({ className = '', href = '/' }: LawMatchLogoProps) {
  const logo = (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[hsl(var(--navy-primary))]"
      >
        {/* Scales Icon */}
        <g transform="translate(0, 2)">
          {/* Left scale */}
          <circle cx="6" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="6" y1="11" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5"/>
          {/* Right scale */}
          <circle cx="18" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="18" y1="11" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5"/>
          {/* Balance beam */}
          <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5"/>
          {/* Center post */}
          <line x1="12" y1="6" x2="12" y2="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="2" r="1.2" fill="currentColor"/>
        </g>
      </svg>
      <span className="text-xl font-semibold text-[hsl(var(--navy-primary))]">LawMatch</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {logo}
      </Link>
    );
  }

  return logo;
}
