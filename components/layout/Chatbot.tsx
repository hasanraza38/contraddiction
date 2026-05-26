'use client';
// import aiApi from '@/services/aiApi';
import { useState, useEffect, useRef } from 'react';
import { Armchair, Sparkles } from 'lucide-react';
import React from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Contradiction-related FAQs
    const faqs = [
        "What makes Contradiction unique?",
        "Can you tell me about the materials used?",
        "How can I inquire about a piece?",
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (messageContent = input) => {
        const content = messageContent.trim();
        if (!content || isLoading) return;

        // Add user's message
        const newMessage = { role: 'user', content };
        
        // Prepare history for API (mapping any local roles if necessary, though we use 'user' and 'assistant')
        const historyForApi = messages.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        }));

        setMessages(prev => [...prev, newMessage]);

        // Clear input only if it's from the input field
        if (messageContent === input) setInput('');

        setIsLoading(true);

        try {
            const res = await fetch('http://127.0.0.1:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: content,
                    history: historyForApi
                })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            // Add bot's reply
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.reply
            }]);
        } catch (err) {
            console.error('Chat error:', err);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again later.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle FAQ click
    const handleFAQClick = (faq:string) => {
        sendMessage(faq);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-brand-primary hover:bg-brand-hover text-white w-16 h-16 shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
                <div className="relative flex items-center justify-center">
                    <Armchair size={28} strokeWidth={1.5} />
                    <Sparkles size={14} className="absolute -top-1 -right-2 text-white" strokeWidth={2} />
                </div>
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div className="fixed bottom-24 right-5 w-80 h-[420px] bg-white shadow-2xl flex flex-col z-50 overflow-hidden border border-border-light">
                    <div className="bg-brand-primary text-white p-4 font-medium flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="relative flex items-center justify-center">
                                <Armchair size={20} strokeWidth={1.5} />
                                <Sparkles size={10} className="absolute -top-1 -right-2 text-white" strokeWidth={2} />
                            </div>
                            <span className="text-sm font-serif border-l border-white/30 pl-2 ml-1">Concierge</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto bg-surface space-y-7">
                        {messages.length === 0 ? (
                            <div className="h-full flex flex-col">
                                <div className="flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-xl font-serif text-brand-primary">Welcome to Contradiction</h3>
                                    <p className="text-gray-600 text-sm mt-1 mb-4">Ask me anything about our collections or philosophy.</p>
                                </div>

                                {/* FAQ Suggestions */}
                                <div className="mt-auto ">
                                    <h4 className="text-xs font-semibold text-gray-500 mb-2  px-2">TRY ASKING:</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {faqs.map((faq, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleFAQClick(faq)}
                                                className="text-left text-xs bg-white border border-border-light hover:bg-surface hover:text-brand-primary p-3 transition-colors cursor-pointer"
                                            >
                                                {faq}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`p-3 max-w-[85%] text-sm ${msg.role === 'user'
                                            ? 'bg-brand-primary text-white'
                                            : 'bg-white border border-border-light'
                                            }`}
                                    >
                                        {/* <div className={`font-medium text-xs mb-1 ${msg.role === 'user' ? 'text-white/80' : 'text-brand-primary'}`}>
                                            {msg.role === 'user' ? 'You' : 'Concierge'}
                                        </div> */}
                                        <div className={msg.role === 'user' ? 'text-white' : 'text-text-primary'}>{msg.content}</div>
                                    </div>
                                </div>
                            ))
                        )}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="p-3 bg-white border border-border-light text-sm">
                                    <div className="font-medium text-xs mb-1 text-brand-primary">
                                        Concierge
                                    </div>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-brand-primary/60 animate-bounce"></div>
                                        <div className="w-2 h-2 bg-brand-primary/60 animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-brand-primary/60 animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-border-light bg-white flex gap-2 shrink-0">
                        <input
                            type="text"
                            className="flex-1 w-full border border-border-light px-4 py-3 text-sm focus:outline-none focus:border-brand-primary disabled:bg-gray-100"
                            placeholder="Message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
                            disabled={isLoading}
                        />
                        <button
                            onClick={() => sendMessage()}
                            disabled={isLoading}
                            className="bg-brand-primary hover:bg-brand-hover font-serif italic text-white px-4 py-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot