
"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useUserProgress } from "@/hooks/use-user-progress"
import { useMemo } from "react"
import { subMonths, format, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns'


const chartConfig = {
  aiScore: {
    label: "AI Answers",
    color: "hsl(var(--primary))",
  },
  quizScore: {
    label: "Quizzes",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig

export function ProgressChart() {
  const { userProgress } = useUserProgress();

  const chartData = useMemo(() => {
    const data: { month: string; aiScore: number; quizScore: number }[] = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const targetMonthDate = subMonths(now, i);
      const monthName = format(targetMonthDate, "MMMM");
      
      const monthStart = startOfMonth(targetMonthDate);
      const monthEnd = endOfMonth(targetMonthDate);

      const monthProgress = userProgress.progressHistory?.filter(record => 
        isWithinInterval(new Date(record.date), { start: monthStart, end: monthEnd })
      ) ?? [];

      const monthScores = {
        month: monthName,
        aiScore: 0,
        quizScore: 0,
      };

      monthProgress.forEach(record => {
        if (record.type === 'ai-answer-check') {
          monthScores.aiScore += record.score;
        } else if (record.type === 'quiz') {
          monthScores.quizScore += record.score;
        }
      });

      data.push(monthScores);
    }

    return data;
  }, [userProgress.progressHistory]);

  return (
    <div className="h-[350px] w-full">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="aiScore" fill="var(--color-aiScore)" radius={4} />
            <Bar dataKey="quizScore" fill="var(--color-quizScore)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
