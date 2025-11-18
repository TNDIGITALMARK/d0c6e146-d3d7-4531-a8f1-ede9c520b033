'use client';

import { Header } from '@/components/brand/header';
import { Footer } from '@/components/brand/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock assessment questions
const mockQuestions = [
  {
    id: 1,
    question: 'What is the primary purpose of contract law?',
    options: [
      'To regulate criminal behavior',
      'To enforce agreements between parties',
      'To establish government policies',
      'To determine property ownership',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'Which of the following is NOT a required element of a valid contract?',
    options: [
      'Mutual consent',
      'Written documentation',
      'Consideration',
      'Legal capacity',
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'What does "due diligence" mean in a legal context?',
    options: [
      'Following court procedures',
      'Investigating facts before entering an agreement',
      'Paying legal fees on time',
      'Filing documents correctly',
    ],
    correctAnswer: 1,
  },
];

export default function AssessmentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      router.push('/profile');
    }, 1000);
  };

  const progress = ((Object.keys(answers).length) / mockQuestions.length) * 100;
  const currentQ = mockQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Assessment Header */}
          <Card className="border-border shadow mb-6">
            <CardContent className="py-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-[hsl(var(--navy-primary))]">
                    Legal Assessment Series
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Question {currentQuestion + 1} of {mockQuestions.length}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[hsl(var(--blue-accent))]">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-semibold">{formatTime(timeRemaining)}</span>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card className="border-border shadow mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[hsl(var(--navy-primary))]">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={answers[currentQ.id]?.toString()}
                onValueChange={(value) => handleAnswer(currentQ.id, parseInt(value))}
              >
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-[hsl(var(--blue-accent))] hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              size="lg"
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {mockQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index === currentQuestion
                      ? 'bg-[hsl(var(--blue-accent))] text-white'
                      : answers[mockQuestions[index].id] !== undefined
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === mockQuestions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || Object.keys(answers).length < mockQuestions.length}
                className="bg-green-600 hover:bg-green-700"
                size="lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(217,91%,50%)]"
                size="lg"
              >
                Next
              </Button>
            )}
          </div>

          {/* Progress Info */}
          <Card className="border-border shadow mt-6">
            <CardContent className="py-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>
                    Answered: {Object.keys(answers).length} / {mockQuestions.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span>
                    Remaining: {mockQuestions.length - Object.keys(answers).length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
