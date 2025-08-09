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
import { subjectWiseQuestions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import type { SubjectWiseQuestion } from '@/lib/types';

const groups = ['all', 'Compulsory', 'Group I', 'Group II', 'Group III', 'Group IV', 'Group V', 'Group VI', 'Group VII'];

export function SubjectWisePracticeClient() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const subjects = useMemo(() => {
    let filteredSubjects = subjectWiseQuestions;
    if (selectedGroup !== 'all') {
      filteredSubjects = subjectWiseQuestions.filter(q => q.group === selectedGroup);
    }
    return ['all', ...Array.from(new Set(filteredSubjects.map((q) => q.subject)))]
  }, [selectedGroup]);
  
  const topics = useMemo(() => {
    let filteredTopics = subjectWiseQuestions;
     if (selectedSubject !== 'all') {
      filteredTopics = subjectWiseQuestions.filter(q => q.subject === selectedSubject);
    } else if (selectedGroup !== 'all') {
      filteredTopics = subjectWiseQuestions.filter(q => q.group === selectedGroup);
    }
    return ['all', ...Array.from(new Set(filteredTopics.map((q) => q.topic)))];
  }, [selectedGroup, selectedSubject]);

  const difficulties: Array<'all' | 'Easy' | 'Medium' | 'Hard'> = ['all', 'Easy', 'Medium', 'Hard'];

  const filteredQuestions = useMemo(() => {
    return subjectWiseQuestions.filter((q) => {
      const groupMatch = selectedGroup === 'all' || q.group === selectedGroup;
      const subjectMatch = selectedSubject === 'all' || q.subject === selectedSubject;
      const topicMatch = selectedTopic === 'all' || q.topic === selectedTopic;
      const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      return groupMatch && subjectMatch && topicMatch && difficultyMatch;
    });
  }, [selectedGroup, selectedSubject, selectedTopic, selectedDifficulty]);

  // Reset subject/topic filters when group changes
  React.useEffect(() => {
    setSelectedSubject('all');
    setSelectedTopic('all');
  }, [selectedGroup]);

  // Reset topic filter when subject changes
  React.useEffect(() => {
    setSelectedTopic('all');
  }, [selectedSubject]);


  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Filter Questions</CardTitle>
          <CardDescription>
            Refine your practice session by subject, topic, and difficulty.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
             <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger>
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group === 'all' ? 'All Groups' : group}
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
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic === 'all' ? 'All Topics' : topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Difficulty" />
                </SelectTrigger>
                <SelectContent>
                    {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                            {difficulty === 'all' ? 'All Difficulties' : difficulty}
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
                <div className="flex-1 text-left">
                  <p className="font-semibold">{q.questionText}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <Badge variant="outline">{q.group}</Badge>
                    <Badge variant="secondary">{q.subject}</Badge>
                    <Badge variant="outline">{q.topic}</Badge>
                     <Badge 
                        variant={
                            q.difficulty === 'Easy' ? 'default' :
                            q.difficulty === 'Medium' ? 'secondary' :
                            'destructive'
                        }
                        className={
                            q.difficulty === 'Easy' ? 'bg-emerald-500 hover:bg-emerald-600' :
                            q.difficulty === 'Medium' ? 'bg-amber-500 hover:bg-amber-600' :
                            'bg-red-500 hover:bg-red-600'
                        }
                     >
                        {q.difficulty}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ideal Answer</h4>
                    <p className="text-muted-foreground text-sm">{q.idealAnswer}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Card className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">No matching questions found.</p>
        </Card>
      )}
    </div>
  );
}
