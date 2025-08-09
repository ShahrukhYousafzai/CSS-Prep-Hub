"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", aiScore: 186, quizScore: 80 },
  { month: "February", aiScore: 305, quizScore: 200 },
  { month: "March", aiScore: 237, quizScore: 120 },
  { month: "April", aiScore: 73, quizScore: 190 },
  { month: "May", aiScore: 209, quizScore: 130 },
  { month: "June", aiScore: 214, quizScore: 140 },
]

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
