'use client';

import { LawMatchLogo } from './lawmatch-logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Assessments', href: '/assessment' },
  { name: 'Profile', href: '/profile' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LawMatchLogo href="/" />

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[hsl(var(--navy-primary))]'
                    : 'text-gray-600 hover:text-[hsl(var(--navy-primary))]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth"
              className="px-5 py-2.5 bg-[hsl(var(--blue-cta))] text-white text-sm font-medium rounded-md hover:bg-[hsl(212,54%,20%)] transition-colors"
            >
              Login/Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
