
"use client";

import React, { useState, useTransition, useRef, useEffect } from 'react';
import { Bot, Loader2, Send, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { aiTutorAction } from '../actions';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function AITutorClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const result = await aiTutorAction({
        query: input,
        history: messages,
      });

      if (result.success && result.data) {
        const aiMessage: Message = { role: 'model', content: result.data };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'The AI tutor could not respond. Please try again.',
          variant: 'destructive',
        });
        // Remove the user's message if the AI fails to respond
        setMessages((prev) => prev.slice(0, prev.length - 1));
      }
    });
  };

  return (
    <Card className="h-[calc(100vh-8rem)] w-full max-w-4xl mx-auto flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Sparkles className="h-8 w-8 text-primary" />
        <div>
          <CardTitle>AI Tutor</CardTitle>
          <CardDescription>Your personal assistant for CSS exam preparation.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-6 pr-4">
            {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground pt-16">
                    <Icons.logo className="h-16 w-16 mb-4" />
                    <h3 className="text-xl font-semibold">Welcome to the AI Tutor!</h3>
                    <p className="max-w-md">Ask me anything about CSS past papers, exam strategies, or specific subjects. For example: "What topics are common in the International Relations paper?"</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-4',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'model' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                        <Bot />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-lg rounded-xl p-3 shadow-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                 {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isPending && (
                <div className="flex items-start gap-4 justify-start">
                  <Avatar className="h-8 w-8">
                     <AvatarFallback>
                        <Bot />
                    </AvatarFallback>
                  </Avatar>
                  <div className="max-w-lg rounded-xl p-3 shadow-sm bg-muted flex items-center space-x-2">
                     <Loader2 className="h-5 w-5 animate-spin" />
                     <p className="text-sm">Thinking...</p>
                  </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about past papers, subjects, or preparation strategies..."
            className="flex-1 resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
          <Button type="submit" disabled={!input.trim() || isPending}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
