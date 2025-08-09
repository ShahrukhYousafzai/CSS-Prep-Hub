"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { AIFeedback } from "@/lib/types"

interface FeedbackDisplayProps {
  feedback: AIFeedback
}

const ScoreBar = ({ title, value }: { title: string; value: number }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-baseline">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-lg font-bold text-primary">{(value * 100).toFixed(0)}%</p>
    </div>
    <Progress value={value * 100} className="h-2" />
  </div>
)

export function FeedbackDisplay({ feedback }: FeedbackDisplayProps) {
  return (
    <Card className="h-full overflow-hidden">
    <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>AI Feedback & Score</CardTitle>
                <CardDescription>Here's the breakdown of your performance.</CardDescription>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Score</p>
                <p className="text-4xl font-bold text-primary">{(feedback.totalScore * 100).toFixed(0)}%</p>
            </div>
        </div>
    </CardHeader>
    <CardContent className="h-[calc(100%-120px)] overflow-y-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScoreBar title="Content" value={feedback.scoreContent} />
            <ScoreBar title="Structure" value={feedback.scoreStructure} />
            <ScoreBar title="Grammar" value={feedback.scoreGrammar} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base text-emerald-600 dark:text-emerald-400">Strengths</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>{feedback.feedbackStrengths}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base text-destructive">Weaknesses</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>{feedback.feedbackWeaknesses}</p>
                </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                    <CardTitle className="text-base text-blue-600 dark:text-blue-400">Improvement Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>{feedback.improvementTips}</p>
                </CardContent>
            </Card>
        </div>
      </CardContent>
    </Card>
  )
}
