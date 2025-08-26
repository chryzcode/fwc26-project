"use client";
import { useEffect, useState } from 'react';
import { crispUtils } from './CrispChatWidget';

// Extend the Window interface to include Crisp types
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    crisp: any;
  }
}

export default function HybridChatWidget() {
  const [isCrispLoaded, setIsCrispLoaded] = useState(false);

  useEffect(() => {
    // Wait for Crisp to load
    const checkCrispLoaded = () => {
      if (window.$crisp && window.crisp) {
        setIsCrispLoaded(true);
        setupCrispIntegration();
      } else {
        setTimeout(checkCrispLoaded, 100);
      }
    };

    checkCrispLoaded();
  }, []);

  const setupCrispIntegration = () => {
    if (!window.$crisp) return;

    // Set up Crisp with FIFA 2026 business context
    window.$crisp.push(['set', 'user:nickname', 'FIFA 2026 Business Enquiry']);
    window.$crisp.push(['set', 'session:segments', ['fifa-2026', 'business-consulting']]);
    window.$crisp.push(['set', 'chat:color', '#2563eb']);
    window.$crisp.push(['set', 'chat:position', 'bottom-right']);

    // Set up event listeners for AI integration
    window.$crisp.push(['on', 'message:received', (message: any) => {
      console.log('Message received in Crisp:', message);
      
      // Check if the message is from a user (not from an operator)
      if (message.from === 'user' && message.content && message.content.text) {
        handleUserMessage(message.content.text);
      }
    }]);

    // Set up welcome message
    window.$crisp.push(['on', 'chat:opened', () => {
      // Send welcome message with AI response
      setTimeout(() => {
        sendAIResponse('Hello! I\'m here to help you with FIFA 2026 business opportunities. How can I assist you today?');
      }, 1000);
    }]);
  };

  const handleUserMessage = async (messageText: string) => {
    try {
      // Call your existing OpenAI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          context: 'FIFA 2026 business opportunities, consulting services, Toronto, Vancouver',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Send AI response back through Crisp
        sendAIResponse(data.response);
      } else {
        sendAIResponse('Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.');
      }
    } catch (error) {
      console.error('AI Chat error:', error);
      sendAIResponse('Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.');
    }
  };

  const sendAIResponse = (responseText: string) => {
    if (window.$crisp) {
      // Send message as if it's from the AI assistant
      window.$crisp.push(['do', 'message:send', ['text', responseText]]);
    }
  };

  // Function to programmatically open the hybrid chat
  const openHybridChat = () => {
    crispUtils.openChat();
  };

  // Expose function globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).openHybridChat = openHybridChat;
    }
  }, []);

  return null; // This component doesn't render anything visible
}

// Export utility functions
export const hybridChatUtils = {
  openChat: () => {
    crispUtils.openChat();
  },
  
  setUserData: (data: { email?: string; nickname?: string; phone?: string }) => {
    crispUtils.setUserData(data);
  },
  
  sendMessage: (message: string) => {
    crispUtils.sendMessage(message);
  }
};
