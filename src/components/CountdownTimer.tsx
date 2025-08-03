"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const kickoff = new Date("2026-06-11T00:00:00Z").getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now()); // Set now only after mount (client-side)
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (now === null) {
    // Don't render anything until mounted on client
    return null;
  }

  const diff = kickoff - now;
  if (diff <= 0) return <span className="text-green-600 font-bold">Kickoff has started!</span>;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <span className="font-mono text-lg text-white animate-pulse">
      {days}d {hours}h {minutes}m {seconds}s
    </span>
  );
}