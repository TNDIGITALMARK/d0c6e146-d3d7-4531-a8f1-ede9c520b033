import { LawWorkLogo } from '@/components/brand/lawwork-logo';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1D7AFC]">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <LawWorkLogo />
        <Link
          href="/auth"
          className="px-6 py-2 bg-white text-[#1D7AFC] font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Sign In
        </Link>
      </header>

      {/* Hero Section with Assessment Card */}
      <main className="flex-1 px-6 py-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-[#FF7B5F] rounded-full text-sm font-medium">
              ✨ Legal Staffing Made Simple
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Connect with Top Legal Talent.
              <br />
              <span className="text-gray-900">Simplified.</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              Find the perfect paralegal or executive assistant match for your law firm through our data-driven assessment platform.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/assessment/start"
                className="px-8 py-4 bg-[#FF7B5F] text-white font-semibold rounded-lg hover:bg-[#FF6B4F] transition-all hover:shadow-lg inline-flex items-center gap-2"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-[#FF7B5F]">94%</div>
                <div className="text-blue-100 text-sm">Match Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF7B5F]">500+</div>
                <div className="text-blue-100 text-sm">Legal Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF7B5F]">250+</div>
                <div className="text-blue-100 text-sm">Law Firms Served</div>
              </div>
            </div>
          </div>

          {/* Right Card - Assessment Steps */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Find Your Perfect Match
            </h2>
            <p className="text-gray-600 mb-8">
              Our comprehensive assessment identifies candidates that fit your exact needs
            </p>

            {/* Assessment Steps */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#FF7B5F] text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Understanding Your Firm</h3>
                  <p className="text-sm text-gray-600">Tell us about your practice area and role</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#FF7B5F] text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Define Your Needs</h3>
                  <p className="text-sm text-gray-600">Specify the type of support you require</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#FF7B5F] text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Get Matched</h3>
                  <p className="text-sm text-gray-600">Review ranked candidates with compatibility scores</p>
                </div>
              </div>
            </div>

            {/* Live Preview Badge */}
            <div className="mt-6 flex justify-end">
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Live Preview
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="/assessment/start"
              className="mt-6 w-full block text-center px-8 py-4 bg-[#FF7B5F] text-white font-semibold rounded-lg hover:bg-[#FF6B4F] transition-all hover:shadow-lg"
            >
              Start Your Assessment
              <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-[#FF7B5F]">Law</span>Work?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our platform combines advanced matching algorithms with deep legal industry expertise to connect you with the perfect talent.
          </p>
        </div>
      </section>
    </div>
  );
}