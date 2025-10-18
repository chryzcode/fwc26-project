"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  onComplete?: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
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

  useEffect(() => {
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
  }, [finalTargetDate]);

  if (isExpired) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg">
          🎉 Program Launched!
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Program Launch Countdown</h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-lg">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-sm opacity-90">Days</div>
        </div>
        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-lg">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm opacity-90">Hours</div>
        </div>
        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-lg">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm opacity-90">Minutes</div>
        </div>
        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-lg">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm opacity-90">Seconds</div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-3">
        Until FWC26 Small Business Initiative Program Launch
      </p>
    </div>
  );
}