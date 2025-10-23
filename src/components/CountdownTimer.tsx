"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  onComplete?: () => void;
  textColor?: string;
}

export default function CountdownTimer({ targetDate, onComplete, textColor = 'text-white' }: CountdownTimerProps) {
  // Create a stable default date to prevent re-renders
  const defaultDate = useMemo(() => new Date('2026-02-17T00:00:00'), []);
  const finalTargetDate = targetDate || defaultDate;
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = finalTargetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        onComplete?.();
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [finalTargetDate, isClient, onComplete]);

  // Show loading state during SSR to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="text-center">
        <div className={`flex items-center justify-center gap-2 text-sm ${textColor}`}>
          <span className="font-bold">--d</span>
          <span className="opacity-70">:</span>
          <span className="font-bold">--h</span>
          <span className="opacity-70">:</span>
          <span className="font-bold">--m</span>
          <span className="opacity-70">:</span>
          <span className="font-bold">--s</span>
        </div>
      </div>
    );
  }

  if (isExpired) {
    return (
      <div className="text-center">
        <div className={`text-sm font-bold ${textColor === 'text-white' ? 'text-green-200' : 'text-green-600'}`}>
          🎉 Program Launched!
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className={`flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${textColor}`}>
        <span className="font-bold">{timeLeft.days}d</span>
        <span className="opacity-70">:</span>
        <span className="font-bold">{timeLeft.hours}h</span>
        <span className="opacity-70">:</span>
        <span className="font-bold">{timeLeft.minutes}m</span>
        <span className="opacity-70">:</span>
        <span className="font-bold">{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}