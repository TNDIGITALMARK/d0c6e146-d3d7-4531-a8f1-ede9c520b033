'use client';

import { Header } from '@/components/brand/header';
import { Footer } from '@/components/brand/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ClipboardList, Clock, Target, TrendingUp, User, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock assessment data
const mockAssessments = [
  {
    id: 'legal-1',
    title: 'Legal Assessment Series',
    description: 'Comprehensive legal knowledge evaluation',
    progress: 65,
    estimatedTime: '45 minutes',
    difficulty: 'Intermediate',
    category: 'Legal',
    status: 'in-progress'
  },
  {
    id: 'technical-1',
    title: 'Technical Skills Battery',
    description: 'Evaluate technical proficiency and problem-solving',
    progress: 0,
    estimatedTime: '60 minutes',
    difficulty: 'Advanced',
    category: 'Technical',
    status: 'not-started'
  },
  {
    id: 'personality-1',
    title: 'Personality Evaluation Suite',
    description: 'Understanding your professional personality traits',
    progress: 100,
    estimatedTime: '30 minutes',
    difficulty: 'Beginner',
    category: 'Personality',
    status: 'completed'
  },
];

export default function DashboardPage() {
  const [assessments] = useState(mockAssessments);

  const completedCount = assessments.filter(a => a.status === 'completed').length;
  const inProgressCount = assessments.filter(a => a.status === 'in-progress').length;
  const totalAssessments = assessments.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">Assessment Dashboard</h1>
            <p className="text-lg text-gray-600">
              Track your progress and continue your assessment journey
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="border-border shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-xs font-medium text-gray-600">Total Assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-[hsl(var(--navy-primary))]">{totalAssessments}</div>
                  <ClipboardList className="w-8 h-8 text-[hsl(var(--blue-accent))]" strokeWidth={1.5} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-xs font-medium text-gray-600">Completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-600">{completedCount}</div>
                  <CheckCircle2 className="w-8 h-8 text-green-600" strokeWidth={1.5} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-xs font-medium text-gray-600">In Progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-orange-600">{inProgressCount}</div>
                  <TrendingUp className="w-8 h-8 text-orange-600" strokeWidth={1.5} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-xs font-medium text-gray-600">Overall Progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-[hsl(var(--blue-accent))]">
                    {Math.round((completedCount / totalAssessments) * 100)}%
                  </div>
                  <Target className="w-8 h-8 text-[hsl(var(--blue-accent))]" strokeWidth={1.5} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assessments Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[hsl(var(--navy-primary))]">Your Assessments</h2>
              <Link href="/profile">
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  View Profile
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessments.map((assessment) => (
                <Card key={assessment.id} className="border-border shadow hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        assessment.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : assessment.status === 'in-progress'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {assessment.status === 'completed' ? 'Completed' : assessment.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{assessment.category}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-[hsl(var(--navy-primary))]">
                      {assessment.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-[hsl(var(--navy-primary))]">{assessment.progress}%</span>
                      </div>
                      <Progress value={assessment.progress} className="h-2" />
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{assessment.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{assessment.difficulty}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/assessment/${assessment.id}`}>
                      <Button
                        className="w-full bg-[hsl(var(--blue-accent))] hover:bg-[hsl(217,91%,50%)]"
                        disabled={assessment.status === 'completed'}
                      >
                        {assessment.status === 'completed'
                          ? 'View Results'
                          : assessment.status === 'in-progress'
                          ? 'Continue Assessment'
                          : 'Start Assessment'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
