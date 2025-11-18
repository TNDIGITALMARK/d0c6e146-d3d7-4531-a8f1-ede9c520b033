"use client";

import { LawWorkLogo } from '@/components/brand/lawwork-logo';
import Link from 'next/link';

export default function AssessmentResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1D7AFC] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <LawWorkLogo />
          </Link>
          <Link
            href="/auth"
            className="px-6 py-2 bg-white text-[#1D7AFC] font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Results Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Your Candidate Matches
            </h1>
            <p className="text-gray-600 text-lg">
              Based on your assessment, we've identified 3 potential matches ranked by compatibility
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Candidate Matches */}
            <div className="lg:col-span-2 space-y-6">
              {/* Candidate 1 - Top Match */}
              <CandidateCard
                name="Sarah R."
                initials="SR"
                role="Paralegal - Executive Support"
                experience="5 years Personal Injury experience"
                matchScore={94}
                isTopMatch={true}
                compatibility={{
                  practiceArea: 95,
                  softwareProficiency: 92,
                  availabilityOverlap: 98,
                  personalityFit: 92,
                }}
                schedule="Monday-Thursday, 9am-4pm Eastern"
                location="Remote (Eastern Time)"
                software={[
                  { name: 'Clio', level: 'Expert' },
                  { name: 'QuickBooks', level: 'Advanced' },
                ]}
                strengths={[
                  'Highly independent client communication',
                  'Expert in case management systems',
                  'Strong document preparation skills',
                ]}
              />

              {/* Candidate 2 */}
              <CandidateCard
                name="Michael T."
                initials="MT"
                role="Executive Assistant"
                experience="3 years Corporate Law experience"
                matchScore={89}
                compatibility={{
                  practiceArea: 88,
                  softwareProficiency: 90,
                  availabilityOverlap: 95,
                  personalityFit: 83,
                }}
                schedule="Monday-Friday, 8am-5pm Eastern"
                location="Remote (Eastern Time)"
                software={[
                  { name: 'MyCase', level: 'Advanced' },
                  { name: 'Outlook', level: 'Expert' },
                ]}
                strengths={[
                  'Excellent organizational skills',
                  'Proficient in legal document drafting',
                  'Strong calendar management',
                ]}
              />

              {/* Candidate 3 */}
              <CandidateCard
                name="Jennifer L."
                initials="JL"
                role="Legal Assistant"
                experience="4 years Family Law experience"
                matchScore={85}
                compatibility={{
                  practiceArea: 82,
                  softwareProficiency: 88,
                  availabilityOverlap: 90,
                  personalityFit: 80,
                }}
                schedule="Tuesday-Saturday, 10am-6pm Eastern"
                location="Remote (Central Time)"
                software={[
                  { name: 'Filevine', level: 'Advanced' },
                  { name: 'Zoom', level: 'Expert' },
                ]}
                strengths={[
                  'Strong client intake skills',
                  'Experienced with court filings',
                  'Detail-oriented documentation',
                ]}
              />
            </div>

            {/* Assessment Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Assessment Summary
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Firm Details</h3>
                    <div className="text-sm space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">Firm:</span> Not specified
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">Practice Area:</span> Personal Injury
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">Role:</span> Partner
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Support Needed</h3>
                    <p className="text-sm text-gray-600">
                      Administrative, Legal, Client-facing tasks
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Weekly Hours</h3>
                    <p className="text-sm text-gray-600">30-40 hours/week</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Time Zone</h3>
                    <p className="text-sm text-gray-600">Eastern Time</p>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refine Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#1D7AFC] rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Ready to Connect?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Create an account to view full candidate profiles, schedule interviews, and find your perfect legal support match.
            </p>
            <Link
              href="/auth"
              className="inline-block px-8 py-4 bg-[#FF7B5F] text-white font-semibold rounded-lg hover:bg-[#FF6B4F] transition-all hover:shadow-lg"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

interface CandidateCardProps {
  name: string;
  initials: string;
  role: string;
  experience: string;
  matchScore: number;
  isTopMatch?: boolean;
  compatibility: {
    practiceArea: number;
    softwareProficiency: number;
    availabilityOverlap: number;
    personalityFit: number;
  };
  schedule: string;
  location: string;
  software: { name: string; level: string }[];
  strengths: string[];
}

function CandidateCard({
  name,
  initials,
  role,
  experience,
  matchScore,
  isTopMatch,
  compatibility,
  schedule,
  location,
  software,
  strengths,
}: CandidateCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative">
      {/* Top Match Badge */}
      {isTopMatch && (
        <div className="absolute top-6 right-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Top Match
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-[#FF7B5F] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
          {initials}
        </div>

        {/* Name & Role */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 font-medium">{role}</p>
          <p className="text-sm text-gray-500">{experience}</p>
        </div>

        {/* Match Score */}
        <div className="text-right">
          <div className="flex items-center gap-1">
            <svg className="w-6 h-6 text-[#FF7B5F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-3xl font-bold text-[#1D7AFC]">{matchScore}%</span>
          </div>
        </div>
      </div>

      {/* Compatibility Breakdown */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Compatibility Breakdown:</h4>
        <div className="space-y-3">
          <CompatibilityBar label="Practice Area Experience" score={compatibility.practiceArea} />
          <CompatibilityBar label="Software Proficiency" score={compatibility.softwareProficiency} />
          <CompatibilityBar label="Availability Overlap" score={compatibility.availabilityOverlap} />
          <CompatibilityBar label="Personality Fit" score={compatibility.personalityFit} />
        </div>
      </div>

      {/* Schedule & Location */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{schedule}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      {/* Software Expertise */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Software Expertise:</h4>
        <div className="flex flex-wrap gap-2">
          {software.map((sw) => (
            <span
              key={sw.name}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {sw.name} <span className="text-gray-500">({sw.level})</span>
            </span>
          ))}
        </div>
      </div>

      {/* Key Strengths */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Key Strengths:</h4>
        <ul className="space-y-2">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompatibilityBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{score}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1D7AFC] transition-all rounded-full"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
