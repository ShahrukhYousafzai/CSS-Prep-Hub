
"use client";

import Link from 'next/link';
import {
  Bot,
  FileText,
  GanttChartSquare,
  LayoutDashboard,
  MessageSquareQuote,
  PanelLeft,
  Search,
  BrainCircuit,
  Flame,
  Star,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { UserNav } from '@/components/user-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { ProgressChart } from '@/components/progress-chart';
import { Icons } from '@/components/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { useUserProgress } from '@/hooks/use-user-progress';

const featureCards = [
  {
    title: 'Past Papers',
    description: 'Review previous years papers with ideal answers.',
    icon: FileText,
    href: '/past-papers',
    color: 'text-sky-500',
  },
  {
    title: 'AI Answer Check',
    description: 'Get your answers marked by our advanced AI.',
    icon: Bot,
    href: '/ai-answer-check',
    color: 'text-blue-500',
  },
  {
    title: 'Quizzes',
    description: 'Test your knowledge with subject-based quizzes.',
    icon: GanttChartSquare,
    href: '/quizzes',
    color: 'text-amber-500',
  },
  {
    title: 'Interview Prep',
    description: 'Prepare with our extensive Q&A bank.',
    icon: MessageSquareQuote,
    href: '/interview-prep',
    color: 'text-purple-500',
  },
  {
    title: 'Psychological Tests',
    description: 'Simulate and practice for the psychological assessment.',
    icon: BrainCircuit,
    href: '/psychological-tests',
    color: 'text-rose-500',
  },
];

export default function DashboardPage() {
  const { userProgress } = useUserProgress();
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-card sm:flex">
        <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Icons.logo className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">CSS Prep Hub</span>
            </Link>
          </div>
        <nav className="flex flex-col gap-2 w-full px-4">
          <Button variant="secondary" className="justify-start gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Button>
          <Link href="/past-papers">
            <Button variant="ghost" className="justify-start gap-2 w-full">
              <FileText className="h-4 w-4" />
              Past Papers
            </Button>
          </Link>
          <Link href="/ai-answer-check">
            <Button variant="ghost" className="justify-start gap-2 w-full">
              <Bot className="h-4 w-4" />AI Answer Check
            </Button>
          </Link>
           <Link href="/quizzes">
            <Button variant="ghost" className="justify-start gap-2 w-full">
              <GanttChartSquare className="h-4 w-4" />
              Quizzes
            </Button>
          </Link>
          <Link href="/interview-prep">
            <Button variant="ghost" className="justify-start gap-2 w-full">
              <MessageSquareQuote className="h-4 w-4" />
              Interview Prep
            </Button>
          </Link>
          <Link href="/psychological-tests">
            <Button variant="ghost" className="justify-start gap-2 w-full">
              <BrainCircuit className="h-4 w-4" />
              Psychological Tests
            </Button>
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs bg-card">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Icons.logo className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">CSS Prep Hub</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 px-2.5 text-foreground">
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="/past-papers" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <FileText className="h-5 w-5" />
                  Past Papers
                </Link>
                <Link href="/ai-answer-check" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <Bot className="h-5 w-5" />
                  AI Answer Check
                </Link>
                <Link href="/quizzes" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <GanttChartSquare className="h-5 w-5" />
                  Quizzes
                </Link>
                <Link href="/interview-prep" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <MessageSquareQuote className="h-5 w-5" />
                    Interview Prep
                </Link>
                <Link href="/psychological-tests" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <BrainCircuit className="h-5 w-5" />
                    Psychological Tests
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <ThemeToggle />
          <UserNav />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Streak</CardTitle>
                <Flame className="h-5 w-5 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userProgress.streak} Days</div>
                <p className="text-xs text-muted-foreground">Keep it up to build your momentum!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Knowledge Score</CardTitle>
                <Star className="h-5 w-5 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userProgress.knowledgeScore}</div>
                <p className="text-xs text-muted-foreground">Earned from quizzes and practice.</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                       <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                       <feature.icon className={`h-8 w-8 p-1.5 rounded-md bg-muted ${feature.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>
                  Your performance in quizzes and AI-marked answers over the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressChart />
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="text-center p-4 text-sm text-muted-foreground">
          Developed by Shahrukh Yousafzai
        </footer>
      </div>
    </div>
  );
}
