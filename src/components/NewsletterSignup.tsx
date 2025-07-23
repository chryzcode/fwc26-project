"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-2 w-full text-center"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className="flex-1 w-full p-3 rounded-xl text-lg bg-white text-blue-900 mb-2 sm:mb-0"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-primary text-primary bg-white font-semibold shadow-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
} 