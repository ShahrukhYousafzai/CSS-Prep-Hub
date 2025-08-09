
"use client";

import React, { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { pastPaperQuestions } from '@/lib/data';
import type { PastPaperQuestion } from '@/lib/types';

export function PastPapersClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const years = useMemo(() => ['all', ...Array.from(new Set(pastPaperQuestions.map((q) => q.year.toString()))).sort((a, b) => Number(b) - Number(a))], []);
  const subjects = useMemo(() => ['all', ...Array.from(new Set(pastPaperQuestions.map((q) => q.subject)))], []);

  const filteredQuestions = useMemo(() => {
    return pastPaperQuestions.filter((q) => {
      const yearMatch = selectedYear === 'all' || q.year.toString() === selectedYear;
      const subjectMatch = selectedSubject === 'all' || q.subject === selectedSubject;
      const searchTermMatch =
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.idealAnswer.toLowerCase().includes(searchTerm.toLowerCase());
      return yearMatch && subjectMatch && searchTermMatch;
    });
  }, [searchTerm, selectedYear, selectedSubject]);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Filter Past Papers</CardTitle>
          <CardDescription>
            Refine your search by year, subject, or keywords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Search questions or answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {filteredQuestions.length > 0 ? (
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredQuestions.map((q) => (
            <AccordionItem value={q.id} key={q.id} className="border-b-0 rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="p-4 hover:no-underline">
                <div className="text-left">
                  <p className="font-semibold">{q.questionText}</p>
                  <p className="text-sm text-muted-foreground">
                    {q.subject} - {q.year}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ideal Answer</h4>
                    <p className="text-muted-foreground text-sm">{q.idealAnswer}</p>
                  </div>
                  {/* You can add marking scheme here later */}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Card className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">No matching past papers found.</p>
        </Card>
      )}
    </div>
  );
}
