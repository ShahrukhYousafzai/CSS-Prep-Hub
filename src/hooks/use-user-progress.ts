
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { User } from '@/lib/types';

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
}

const isYesterday = (date1: Date, date2: Date) => {
    const yesterday = new Date(date1);
    yesterday.setDate(yesterday.getDate() - 1);
    return isSameDay(yesterday, date2);
}


export function useUserProgress() {
  const [userProgress, setUserProgress] = useState<User>({
    name: 'Aspirant',
    email: 'user@example.com',
    streak: 0,
    xp: 0,
  });

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem('userProgress');
      if (storedProgress) {
        const parsedProgress = JSON.parse(storedProgress);

        const lastVisited = parsedProgress.lastVisited ? new Date(parsedProgress.lastVisited) : new Date();
        const now = new Date();

        if (!isSameDay(now, lastVisited)) {
            if (isYesterday(now, lastVisited)) {
                 // Increment streak
                parsedProgress.streak = (parsedProgress.streak || 0) + 1;
            } else {
                // Reset streak
                parsedProgress.streak = 1;
            }
        }
        
        parsedProgress.lastVisited = now.toISOString();

        setUserProgress(parsedProgress);
        localStorage.setItem('userProgress', JSON.stringify(parsedProgress));
      } else {
        // Initialize for new user
        const initialProgress = { ...userProgress, streak: 1, lastVisited: new Date().toISOString() };
        localStorage.setItem('userProgress', JSON.stringify(initialProgress));
        setUserProgress(initialProgress);
      }
    } catch (error) {
        console.error("Failed to access localStorage or parse user progress", error);
        // Fallback to default state if localStorage is blocked or fails
        const initialProgress = { ...userProgress, streak: 1, lastVisited: new Date().toISOString() };
        setUserProgress(initialProgress);
    }
  }, []);

  const addXp = useCallback((points: number) => {
    setUserProgress(currentProgress => {
      const newProgress = {
        ...currentProgress,
        xp: currentProgress.xp + points
      };
      try {
        localStorage.setItem('userProgress', JSON.stringify(newProgress));
      } catch (error) {
         console.error("Failed to save progress to localStorage", error);
      }
      return newProgress;
    });
  }, []);

  return { userProgress, addXp };
}
