"use client";
import { useState } from "react";
import Image from "next/image";

export default function SimpleChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can we help you with FIFA 2026 business strategy?" },
  ]);
  const [input, setInput] = useState("");
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-t-2xl">
            <span className="text-white font-semibold">Chat with us</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl font-bold">×</button>
          </div>
          <div className="flex-1 p-4 space-y-2 max-h-60 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "bot" ? "text-blue-900" : "text-right text-accent"}>
                <span className="inline-block bg-blue-50 rounded px-3 py-1 mb-1 max-w-[90%]">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form
            className="flex border-t border-blue-100"
            onSubmit={e => {
              e.preventDefault();
              if (!input.trim()) return;
              setMessages([...messages, { from: "user", text: input }]);
              setInput("");
              setTimeout(() => setMessages(msgs => [...msgs, { from: "bot", text: "Thanks! We'll get back to you soon." }]), 800);
            }}
          >
            <input
              className="flex-1 p-2 rounded-bl-2xl outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit" className="px-4 py-2 text-primary font-bold">Send</button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200"
        >
          <Image src="/file.svg" alt="Chat" width={24} height={24} /> <span className="text-blue-900">Chat</span>
        </button>
      )}
    </div>
  );
} 