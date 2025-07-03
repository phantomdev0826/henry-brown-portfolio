'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ChatPanel = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hi! I am Henry Brown&apos;s AI assistant. Ask me anything about Henry!',
    },
  ]);
  const [input, setInput] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (data.message) {
        setMessages((msgs) => [...msgs, { sender: 'ai', text: data.message }]);
      } else {
        setMessages((msgs) => [...msgs, { sender: 'ai', text: 'Sorry, something went wrong.' }]);
      }
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'ai', text: 'Sorry, failed to connect to the AI.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-24 z-50">
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg text-2xl w-14 h-14 flex items-center justify-center"
          aria-label="Open chat"
          onClick={() => setOpen((v) => !v)}
        >
          💬
        </Button>
      </div>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-28 right-24 z-50 w-[340px] max-w-[90vw] h-[420px] flex flex-col rounded-xl shadow-2xl bg-gray-100 dark:bg-[#161D1F] border border-accentColor">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-accentColor bg-gray-50 dark:bg-[#1a2326] rounded-t-xl">
            <span className="font-semibold text-base dark:text-white">Henry's AI Chat</span>
            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold text-gray-500 hover:text-accentColor transition-colors"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>
          {/* Messages */}
          <div
            ref={panelRef}
            className="flex-1 px-4 py-3 overflow-y-auto bg-gray-100 dark:bg-[#161D1F]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-2xl text-sm max-w-[80%] break-words ${
                    msg.sender === 'user'
                      ? 'bg-accentColor text-white dark:bg-accentColor'
                      : 'bg-gray-200 text-gray-900 dark:bg-[#232c31] dark:text-gray-100'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div className="mb-3 flex justify-start">
                <span className="inline-block px-4 py-2 rounded-2xl text-sm max-w-[80%] break-words bg-gray-200 text-gray-900 dark:bg-[#232c31] dark:text-gray-100 animate-pulse">
                  Henry is typing...
                </span>
              </div>
            )}
            {error && (
              <div className="mb-3 flex justify-start">
                <span className="inline-block px-4 py-2 rounded-2xl text-sm max-w-[80%] break-words bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200">
                  {error}
                </span>
              </div>
            )}
          </div>
          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 px-4 py-3 border-t border-accentColor bg-gray-50 dark:bg-[#1a2326] rounded-b-xl"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Henry..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white text-gray-900 dark:bg-[#232c31] dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accentColor transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
              disabled={loading}
            />
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="px-4 py-2"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatPanel;
