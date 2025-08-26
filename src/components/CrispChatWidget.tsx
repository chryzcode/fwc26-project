"use client";
import { useEffect } from 'react';

// Extend the Window interface to include Crisp types
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    crisp: any;
  }
}

export default function CrispChatWidget() {
  useEffect(() => {
    // Initialize Crisp if not already loaded
    if (typeof window !== 'undefined' && !window.crisp) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || "26631aca-283a-47db-876b-5d803e778082";
      
      // Load Crisp script if not already loaded
      if (!document.querySelector('script[src*="crisp.chat"]')) {
        const script = document.createElement('script');
        script.src = 'https://client.crisp.chat/l.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }

    // Configure Crisp settings for FIFA 2026 business context
    if (window.$crisp) {
      // Set custom data for better context
      window.$crisp.push(['set', 'user:nickname', 'FIFA 2026 Business Enquiry']);
      window.$crisp.push(['set', 'session:segments', ['fifa-2026', 'business-consulting']]);
      
      // Set up custom welcome message
      window.$crisp.push(['set', 'message:text', 'Hello! I\'m here to help you with FIFA 2026 business opportunities. How can I assist you today?']);
      
      // Configure chat appearance
      window.$crisp.push(['set', 'chat:color', '#2563eb']); // Blue color matching your brand
      window.$crisp.push(['set', 'chat:position', 'bottom-right']);
      
      // Set up event listeners for better integration
      window.$crisp.push(['on', 'chat:opened', () => {
        console.log('Crisp chat opened');
      }]);
      
      window.$crisp.push(['on', 'chat:closed', () => {
        console.log('Crisp chat closed');
      }]);
    }
  }, []);

  // Function to programmatically open Crisp chat
  const openCrispChat = () => {
    if (window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
  };

  // Function to send a message to Crisp chat
  const sendCrispMessage = (message: string) => {
    if (window.$crisp) {
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    }
  };

  // Function to set user data in Crisp
  const setCrispUserData = (data: { email?: string; nickname?: string; phone?: string }) => {
    if (window.$crisp) {
      if (data.email) window.$crisp.push(['set', 'user:email', data.email]);
      if (data.nickname) window.$crisp.push(['set', 'user:nickname', data.nickname]);
      if (data.phone) window.$crisp.push(['set', 'user:phone', data.phone]);
    }
  };

  // Expose functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).openCrispChat = openCrispChat;
      (window as any).sendCrispMessage = sendCrispMessage;
      (window as any).setCrispUserData = setCrispUserData;
    }
  }, []);

  return null; // This component doesn't render anything visible
}

// Export utility functions for use in other components
export const crispUtils = {
  openChat: () => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
  },
  
  sendMessage: (message: string) => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    }
  },
  
  setUserData: (data: { email?: string; nickname?: string; phone?: string }) => {
    if (typeof window !== 'undefined' && window.$crisp) {
      if (data.email) window.$crisp.push(['set', 'user:email', data.email]);
      if (data.nickname) window.$crisp.push(['set', 'user:nickname', data.nickname]);
      if (data.phone) window.$crisp.push(['set', 'user:phone', data.phone]);
    }
  },
  
  hideChat: () => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:hide']);
    }
  },
  
  showChat: () => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:show']);
    }
  }
};
