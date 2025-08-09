import Link from 'next/link';
import {
  Bot,
  FileText,
  GanttChartSquare,
  LayoutDashboard,
  PanelLeft,
  Search,
  MessageSquareQuote,
  BrainCircuit,
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';
import { QuizzesClient } from './components/quizzes-client';

export default function QuizzesPage() {
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
             <Link href="/">
              <Button variant="ghost" className="justify-start gap-2 w-full">
                <LayoutDashboard className="h-4 w-4" />Dashboard
              </Button>
            </Link>
            <Link href="/past-papers">
              <Button variant="ghost" className="justify-start gap-2 w-full">
                <FileText className="h-4 w-4" />
                Past Papers
              </Button>
            </Link>
            <Link href="/ai-answer-check">
              <Button variant="ghost" className="justify-start gap-2 w-full">
                <Bot className="h-4 w-4" />
                AI Answer Check
              </Button>
            </Link>
            <Button variant="secondary" className="justify-start gap-2">
              <GanttChartSquare className="h-4 w-4" />
              Quizzes
            </Button>
            <Link href="/interview-prep">
              <Button variant="ghost" className="justify-start gap-2 w-full">
                  <MessageSquareQuote className="h-4 w-4" />
                  Interview Prep
              </Button>
            </Link>
            <Button variant="ghost" className="justify-start gap-2">
                <BrainCircuit className="h-4 w-4" />
                Psychological Tests
            </Button>
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
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Icons.logo className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">CSS Prep Hub</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
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
                <Link href="/quizzes" className="flex items-center gap-4 px-2.5 text-foreground">
                  <GanttChartSquare className="h-5 w-5" />
                  Quizzes
                </Link>
                 <Link href="/interview-prep" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <MessageSquareQuote className="h-5 w-5" />
                    Interview Prep
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Quizzes</BreadcrumbPage>
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
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <QuizzesClient />
        </main>
         <footer className="text-center p-4 text-sm text-muted-foreground">
          Developed by Shahrukh Yousafzai
        </footer>
      </div>
    </div>
  );
}
