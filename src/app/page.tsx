import { Header } from '@/components/brand/header';
import { HeroSection } from '@/components/brand/hero-section';
import { FeatureCard } from '@/components/brand/feature-card';
import { Footer } from '@/components/brand/footer';
import { ClipboardList, User, Lock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Intelligent Legal Matching for Modern Professionals"
        subtitle="Streamline your assessment process with our comprehensive platform. Take assessments, track progress, and manage your professional profile all in one place."
        primaryCta={{ text: 'Get Started', href: '/auth' }}
        secondaryCta={{ text: 'Learn More', href: '#features' }}
        showIllustration={true}
      />

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ClipboardList className="w-12 h-12" strokeWidth={1.5} />}
              title="Assessment Tools"
              description="Comprehensive testing platform designed for perfect match analysis."
            />

            <FeatureCard
              icon={<User className="w-12 h-12" strokeWidth={1.5} />}
              title="Profile Management"
              description="Build and maintain your professional profile with confidence and ease."
            />

            <FeatureCard
              icon={<Lock className="w-12 h-12" strokeWidth={1.5} />}
              title="User Authentication"
              description="Secure access control with advanced authentication and dashboard."
            />
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-6 bg-[hsl(var(--navy-primary))] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">AI Powered Matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Secure Data Encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Expert Network Access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Real-time Collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(var(--blue-cta))] rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Join LawMatch Today</h3>
              <p className="text-gray-200 mb-6">
                Start your assessment journey and unlock opportunities with our intelligent matching platform.
              </p>
              <a
                href="/auth"
                className="inline-block px-6 py-3 bg-[hsl(var(--blue-accent))] text-white font-medium rounded-md hover:bg-[hsl(217,91%,50%)] transition-colors"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}