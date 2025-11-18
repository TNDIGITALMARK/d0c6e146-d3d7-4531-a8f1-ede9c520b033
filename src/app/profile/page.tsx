'use client';

import { Header } from '@/components/brand/header';
import { Footer } from '@/components/brand/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Building, Calendar, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

// Mock user data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@lawmatch.com',
  username: 'johndoe',
  organization: 'Legal Associates Inc.',
  professionalTitle: 'Senior Legal Analyst',
  joinDate: 'January 2024',
  avatar: '',
};

// Mock assessment history
const mockHistory = [
  {
    id: 1,
    title: 'Legal Assessment Series',
    completedDate: '2024-11-15',
    score: 85,
    percentile: 92,
    status: 'Excellent',
  },
  {
    id: 2,
    title: 'Personality Evaluation Suite',
    completedDate: '2024-11-10',
    score: 78,
    percentile: 85,
    status: 'Good',
  },
  {
    id: 3,
    title: 'Technical Skills Battery',
    completedDate: '2024-11-05',
    score: 92,
    percentile: 96,
    status: 'Outstanding',
  },
];

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-700';
    if (score >= 75) return 'bg-blue-100 text-blue-700';
    return 'bg-orange-100 text-orange-700';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">Profile & Results</h1>
            <p className="text-lg text-gray-600">
              Manage your profile and view your assessment performance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="border-border shadow sticky top-8">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-[hsl(var(--blue-accent))] text-white text-2xl font-semibold">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[hsl(var(--navy-primary))]">
                    {user.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {user.professionalTitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{user.organization}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Joined {user.joinDate}</span>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[hsl(var(--navy-primary))]">{mockHistory.length}</div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[hsl(var(--blue-accent))]">
                          {Math.round(mockHistory.reduce((sum, h) => sum + h.score, 0) / mockHistory.length)}
                        </div>
                        <div className="text-xs text-gray-600">Avg Score</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="results" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="results">Assessment Results</TabsTrigger>
                  <TabsTrigger value="edit">Edit Profile</TabsTrigger>
                </TabsList>

                {/* Results Tab */}
                <TabsContent value="results" className="mt-6 space-y-4">
                  {mockHistory.map((result) => (
                    <Card key={result.id} className="border-border shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl font-semibold text-[hsl(var(--navy-primary))] flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              {result.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 mt-1">
                              Completed on {new Date(result.completedDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </CardDescription>
                          </div>
                          <Badge className={`${getScoreBadgeColor(result.score)}`}>
                            {result.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-[hsl(var(--navy-primary))]">{result.score}%</div>
                            <div className="text-sm text-gray-600 mt-1">Score</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-[hsl(var(--blue-accent))]">{result.percentile}th</div>
                            <div className="text-sm text-gray-600 mt-1">Percentile</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Award className="w-8 h-8 text-yellow-500 mx-auto" />
                            <div className="text-sm text-gray-600 mt-1">Performance</div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="w-full">
                            View Detailed Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Edit Profile Tab */}
                <TabsContent value="edit" className="mt-6">
                  <Card className="border-border shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[hsl(var(--navy-primary))]">
                        Edit Profile Information
                      </CardTitle>
                      <CardDescription>
                        Update your personal and professional details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          <Input
                            id="title"
                            value={user.professionalTitle}
                            onChange={(e) => setUser({ ...user, professionalTitle: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          value={user.organization}
                          onChange={(e) => setUser({ ...user, organization: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="flex gap-4 pt-4">
                        {!isEditing ? (
                          <Button
                            onClick={() => setIsEditing(true)}
                            className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(217,91%,50%)]"
                          >
                            Edit Profile
                          </Button>
                        ) : (
                          <>
                            <Button
                              onClick={handleSave}
                              className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(217,91%,50%)]"
                            >
                              Save Changes
                            </Button>
                            <Button
                              onClick={() => setIsEditing(false)}
                              variant="outline"
                            >
                              Cancel
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
