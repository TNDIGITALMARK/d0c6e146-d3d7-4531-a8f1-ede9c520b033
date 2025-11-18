"use client";

import { useState } from 'react';
import { LawWorkLogo } from '@/components/brand/lawwork-logo';
import { ProgressStepper } from '@/components/assessment/progress-stepper';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AssessmentStartPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firmName: '',
    practiceArea: '',
    role: '',
  });

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/assessment/results');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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

      {/* Assessment Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Find Your Perfect Legal Support Match
            </h1>
            <p className="text-gray-600 text-lg">
              Complete this assessment to identify the best paralegal or executive assistant for your firm
            </p>
          </div>

          {/* Progress Stepper */}
          <ProgressStepper currentStep={currentStep} totalSteps={6} />

          {/* Assessment Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 1: Firm Details
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your law firm and practice
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Firm Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your firm name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Practice Area *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none"
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    >
                      <option value="">Select practice area</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="family">Family Law</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="intellectual-property">Intellectual Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Role *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="">Select your role</option>
                      <option value="partner">Partner</option>
                      <option value="associate">Associate Attorney</option>
                      <option value="managing-attorney">Managing Attorney</option>
                      <option value="solo-practitioner">Solo Practitioner</option>
                      <option value="office-manager">Office Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 2: Key Task Areas
                </h2>
                <p className="text-gray-600 mb-4">
                  Select the most important tasks for your practice
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <p className="text-sm text-gray-700 font-medium">
                    Rate the priority of tasks for your practice
                  </p>
                  <p className="text-sm text-gray-600">
                    0 = Not Specified, 1 = Low, 2 = Medium, 3 = High
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Administrative */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                      ADMINISTRATIVE
                    </h3>
                    <TaskItem task="Use CRM & CMS" frequency="330/year" />
                    <TaskItem task="Organize & File Documents" frequency="308/year" />
                    <TaskItem task="Manage Emails" frequency="298/year" />
                    <TaskItem task="Manage Simple Projects" frequency="256/year" />
                  </div>

                  {/* Legal */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                      LEGAL
                    </h3>
                    <TaskItem task="Draft Legal Documents" frequency="197/year" />
                    <TaskItem task="File/E-File Court Cases" frequency="127/year" />
                    <TaskItem task="Draft Cover Letters" frequency="116/year" />
                    <TaskItem task="Draft Affidavits" frequency="94/year" />
                  </div>

                  {/* People Facing */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                      PEOPLE FACING
                    </h3>
                    <TaskItem task="Reception: Answer Inquiries" frequency="318/year" />
                    <TaskItem task="Request Documentation" frequency="309/year" />
                    <TaskItem task="Confirm Appointments With Clients" frequency="246/year" />
                    <TaskItem task="Intake: Qualify & Obtain" frequency="168/year" />
                  </div>

                  {/* Marketing */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                      MARKETING
                    </h3>
                    <TaskItem task="Manage Social Media" frequency="71/year" />
                    <TaskItem task="Create Graphic Material" frequency="51/year" />
                    <TaskItem task="Keep Website Up To Date" frequency="43/year" />
                    <TaskItem task="Reply to Messages On Social Media" frequency="43/year" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 3: Workload & Schedule
                </h2>
                <p className="text-gray-600 mb-8">
                  Define your staffing requirements
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Weekly Hours Needed
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none">
                      <option value="">Select hours</option>
                      <option value="10-20">10-20 hours/week</option>
                      <option value="20-30">20-30 hours/week</option>
                      <option value="30-40">30-40 hours/week</option>
                      <option value="40+">40+ hours/week</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Work Schedule Preference
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="schedule" className="w-4 h-4 text-[#1D7AFC]" />
                        <span className="text-gray-900">Full-time (Monday-Friday, 9am-5pm)</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="schedule" className="w-4 h-4 text-[#1D7AFC]" />
                        <span className="text-gray-900">Part-time (Flexible hours)</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="schedule" className="w-4 h-4 text-[#1D7AFC]" />
                        <span className="text-gray-900">Remote (Eastern Time)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 4: Software & Tools
                </h2>
                <p className="text-gray-600 mb-4">
                  Indicate the tools your team uses
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <p className="text-sm text-gray-700 font-medium">
                    Do you need specific software proficiency?
                  </p>
                  <p className="text-sm text-gray-600">
                    Select all software tools that your candidate should be proficient in
                  </p>
                </div>

                <div className="space-y-6">
                  <SoftwareCategory
                    title="Case Management (e.g., Clio, MyCase, Filevine)"
                    icon="⚖️"
                    options={['Clio', 'MyCase', 'Filevine']}
                  />
                  <SoftwareCategory
                    title="CRM (Client Relationship Management) (e.g., Lawmatics, HubSpot, Salesforce)"
                    icon="👥"
                    options={['Lawmatics', 'HubSpot', 'Salesforce']}
                  />
                  <SoftwareCategory
                    title="Communication & Collaboration (e.g., Outlook, Teams, Slack, Zoom)"
                    icon="💬"
                    options={['Outlook', 'Microsoft Teams', 'Slack', 'Zoom']}
                  />
                  <SoftwareCategory
                    title="Billing & Accounting (e.g., QuickBooks, TimeSolv, LeanLaw)"
                    icon="📊"
                    options={['QuickBooks', 'TimeSolv', 'LeanLaw']}
                  />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 5: Experience Requirements
                </h2>
                <p className="text-gray-600 mb-8">
                  Specify the level of experience you need
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Minimum Years of Experience
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none">
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (Entry level)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years (Senior level)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Previous Practice Area Experience Preferred
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Personal Injury', 'Corporate', 'Family Law', 'Criminal Defense', 'Real Estate', 'IP Law'].map((area) => (
                        <label key={area} className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 text-[#1D7AFC] rounded" />
                          <span className="text-gray-900">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Section 6: Cultural Fit
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose personality traits you value
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-4">
                      Personality Traits You Value Most
                    </p>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="personality" className="w-4 h-4 text-[#1D7AFC]" />
                        <span className="text-gray-900">Independent / Proactive - Self-starter who takes initiative</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="personality" className="w-4 h-4 text-[#1D7AFC]" />
                        <span className="text-gray-900">Structured / Process-Oriented - Follows established procedures closely</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Ready to find your match?</h3>
                    <p className="text-gray-700">
                      Click "Find Matches" to see candidates that best fit your firm's needs based on the assessment you've completed.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-[#FF7B5F] text-white font-semibold rounded-lg hover:bg-[#FF6B4F] transition-all hover:shadow-lg"
              >
                {currentStep === 6 ? 'Find Matches' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TaskItem({ task, frequency }: { task: string; frequency: string }) {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-900 mb-1">{task}</p>
      <p className="text-xs text-gray-500 mb-2">{frequency}</p>
      <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D7AFC] focus:border-transparent outline-none">
        <option value="0">0 - Not Specified</option>
        <option value="1">1 - Low</option>
        <option value="2">2 - Medium</option>
        <option value="3">3 - High</option>
      </select>
    </div>
  );
}

function SoftwareCategory({ title, icon, options }: { title: string; icon: string; options: string[] }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      </div>
      <div className="space-y-2 ml-8">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-[#1D7AFC] rounded" />
            <span className="text-gray-900">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
