
"use client";

import React, { useState, useTransition, useRef, useEffect } from 'react';
import { Bot, FileUp, Loader2, Camera, X, ScanText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { pastPaperQuestions } from '@/lib/data';
import type { PastPaperQuestion, AIFeedback } from '@/lib/types';
import { checkAnswerAction, ocrAction } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { FeedbackDisplay } from './feedback-display';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useUserProgress } from '@/hooks/use-user-progress';


export function AIAnswerCheckerClient() {
  const [selectedQuestion, setSelectedQuestion] =
    useState<PastPaperQuestion | null>(pastPaperQuestions[0]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isOcrPending, startOcrTransition] = useTransition();
  const { toast } = useToast();
  const { addKnowledgeScore } = useUserProgress();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isCameraOpen) {
      const getCameraPermission = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setHasCameraPermission(true);

          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
          setHasCameraPermission(false);
          toast({
            variant: 'destructive',
            title: 'Camera Access Denied',
            description:
              'Please enable camera permissions in your browser settings to use this app.',
          });
        }
      };

      getCameraPermission();
    } else {
      // Stop camera stream when dialog is closed
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [isCameraOpen, toast]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUri = canvas.toDataURL('image/jpeg');
        setCapturedImage(dataUri);
      }
    }
  };

  const handleOcrSubmit = () => {
    if (!capturedImage) return;

    startOcrTransition(async () => {
      const result = await ocrAction({ imageDataUri: capturedImage });
      if (result.success && result.data) {
        setUserAnswer((prev) => prev + (prev ? '\n' : '') + result.data);
        toast({
          title: 'Text Extracted!',
          description: 'The text from your image has been added to the answer.',
        });
      } else {
        toast({
          title: 'OCR Failed',
          description: result.error || 'Could not extract text from the image.',
          variant: 'destructive',
        });
      }
      setIsCameraOpen(false);
      setCapturedImage(null);
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedQuestion || !userAnswer.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Please select a question and write an answer.',
        variant: 'destructive',
      });
      return;
    }

    setFeedback(null);

    startTransition(async () => {
      const result = await checkAnswerAction({
        userAnswer,
        idealAnswer: selectedQuestion.idealAnswer,
      });

      if (result.success && result.data) {
        setFeedback(result.data);
        const points = Math.round(result.data.totalScore * 25); // Max 25 points
        addKnowledgeScore(points);
        toast({
          title: "Evaluation Complete!",
          description: `Your answer has been marked by the AI. You earned ${points} Knowledge Score!`,
        });
      } else {
        toast({
          title: 'Evaluation Failed',
          description: result.error || 'An unexpected error occurred.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <>
    <div className="grid h-[calc(100vh-5rem)] gap-4 md:grid-cols-[300px_1fr]">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Past Papers</CardTitle>
          <CardDescription>Select a question to practice.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <ScrollArea className="h-full">
            <div className="flex flex-col p-2">
              {pastPaperQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestion(q)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors',
                    selectedQuestion?.id === q.id && 'bg-muted'
                  )}
                >
                  <h3 className="font-semibold text-sm">{q.subject} ({q.year})</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {q.questionText}
                  </p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        {selectedQuestion ? (
          <>
            <Card className="flex-grow-[2] flex flex-col">
              <CardHeader>
                <CardTitle>{selectedQuestion.subject} ({selectedQuestion.year})</CardTitle>
                <CardDescription>{selectedQuestion.questionText}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <form onSubmit={handleSubmit} className="flex flex-col h-full gap-4">
                  <Textarea
                    placeholder="Write your answer here or upload an image..."
                    className="flex-grow resize-none text-base"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  <div className="flex items-center gap-2">
                    <Button type="submit" disabled={isPending || !userAnswer.trim()}>
                      {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Bot className="mr-2 h-4 w-4" />
                      )}
                      Submit for AI Check
                    </Button>
                    <Button variant="outline" type="button" disabled={isPending || isOcrPending} onClick={() => setIsCameraOpen(true)}>
                      <FileUp className="mr-2 h-4 w-4" />
                      Upload Image (OCR)
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="flex-grow-[3]">
              {(isPending || isOcrPending) && (
                <div className="flex items-center justify-center h-full rounded-lg border border-dashed">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-lg font-semibold">
                      {isOcrPending ? 'Extracting text from image...' : 'AI is marking your answer...'}
                    </p>
                    <p className="text-sm text-muted-foreground">This may take a moment. Please wait.</p>
                  </div>
                </div>
              )}
              {feedback && !isPending && !isOcrPending && <FeedbackDisplay feedback={feedback} />}
              {!isPending && !isOcrPending && !feedback && (
                 <div className="flex items-center justify-center h-full rounded-lg border border-dashed">
                    <div className="text-center text-muted-foreground">
                      <Bot className="mx-auto h-12 w-12" />
                      <p className="mt-4 text-lg font-semibold">Awaiting Submission</p>
                      <p className="text-sm">Your feedback will appear here after you submit an answer.</p>
                    </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <Card className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Select a question to begin.</p>
          </Card>
        )}
      </div>
    </div>
    
    <Dialog open={isCameraOpen} onOpenChange={setIsCameraOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Upload Answer via Camera</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="relative">
            <video ref={videoRef} className={cn("w-full aspect-video rounded-md", capturedImage && 'hidden')} autoPlay muted playsInline />
            {capturedImage && <img src={capturedImage} alt="Captured answer" className="w-full aspect-video rounded-md" />}
            {hasCameraPermission === false && (
              <Alert variant="destructive">
                <AlertTitle>Camera Access Required</AlertTitle>
                <AlertDescription>
                  Please allow camera access to use this feature.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {!capturedImage ? (
                <Button onClick={handleCapture} disabled={hasCameraPermission !== true}>
                  <Camera className="mr-2 h-4 w-4" />
                  Capture Image
                </Button>
            ) : (
              <>
                 <Button onClick={handleOcrSubmit} disabled={isOcrPending}>
                  {isOcrPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ScanText className="mr-2 h-4 w-4" />
                  )}
                  Extract Text & Use
                </Button>
                <Button variant="outline" onClick={() => setCapturedImage(null)} disabled={isOcrPending}>
                  <Camera className="mr-2 h-4 w-4" />
                  Retake Picture
                </Button>
              </>
            )}
          </div>
        </div>
        <canvas ref={canvasRef} className="hidden" />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setCapturedImage(null)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
