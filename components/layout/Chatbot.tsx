'use client';
// import aiApi from '@/services/aiApi';
import { useState, useEffect, useRef } from 'react';
import { Armchair, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React from 'react';
import { sendChatMessage } from '@/app/actions/chat';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
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

        const payloadMessages = [...historyForApi, newMessage];

        setMessages(payloadMessages);

        // Clear input only if it's from the input field
        if (messageContent === input) setInput('');

        setIsLoading(true);

        try {
            const result = await sendChatMessage(payloadMessages);

            if (!result.success) {
                throw new Error(result.error);
            }

            // Add bot's reply
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: result.reply || ''
            }]);
        } catch (err: any) {
            console.error('Chat error:', err);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: err.message || 'Sorry, I encountered an error. Please try again later.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle FAQ click
    const handleFAQClick = (faq:string) => {
        sendMessage(faq);
    };

    const handleToggleFullScreen = () => {
        setIsTransitioning(true);
        setIsFullScreen(!isFullScreen);
        setTimeout(() => setIsTransitioning(false), 450); // Matches transition duration
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-brand-primary hover:bg-brand-hover text-white w-16 h-16 shadow-lg flex items-center justify-center z-[110] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
                <div className="relative flex items-center justify-center">
                    <Armchair size={28} strokeWidth={1.5} />
                    <Sparkles size={14} className="absolute -top-1 -right-2 text-white" strokeWidth={2} />
                </div>
            </button>

            {/* Backdrop Overlay for Expanded State */}
            <AnimatePresence>
                {isOpen && isFullScreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsFullScreen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[100] transition-colors"
                    />
                )}
            </AnimatePresence>

            {/* Chat Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30, 
                            mass: 1,
                            opacity: { duration: 0.2 } 
                        }}
                        className={`fixed bg-white shadow-2xl flex flex-col z-[110] overflow-hidden border border-border-light antialiased ${
                            isFullScreen 
                            ? 'top-4 left-4 right-4 bottom-4 md:top-10 md:left-10 md:right-10 md:bottom-10 w-auto h-auto' 
                            : 'bottom-24 right-5 w-[calc(100vw-40px)] md:w-80 h-[500px] md:h-[420px]'
                        }`}
                    >
                        <motion.div layout="position" transition={{ duration: 0 }} className="bg-brand-primary text-white p-4 font-medium flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="relative flex items-center justify-center">
                                    <Armchair size={20} strokeWidth={1.5} />
                                    <Sparkles size={10} className="absolute -top-1 -right-2 text-white" strokeWidth={2} />
                                </div>
                                <span className="text-sm font-serif border-l border-white/30 pl-2 ml-1">Concierge</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleToggleFullScreen}
                                    className="text-white/80 hover:text-white transition-colors cursor-pointer"
                                    aria-label={isFullScreen ? "Minimize" : "Maximize"}
                                >
                                    {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                                </button>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsFullScreen(false);
                                        setIsTransitioning(false);
                                    }}
                                    className="text-white/80 hover:text-white transition-colors cursor-pointer"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>

                        <motion.div layout transition={{ duration: 0 }} className="flex-1 p-3 overflow-y-auto bg-surface flex flex-col">
                            <div className={`flex-1 space-y-7 ${isTransitioning ? 'opacity-0 blur-sm invisible' : 'opacity-100 blur-0 visible'} transition-none`}>
                                {messages.length === 0 ? (
                                    <div className="h-full flex flex-col">
                                        <div className="flex flex-col items-center justify-center text-center p-4 transition-none mt-10">
                                            <h3 className={`font-serif text-brand-primary transition-none ${isFullScreen ? 'text-4xl mb-4' : 'text-xl'}`}>Welcome to Contradiction</h3>
                                            <p className={`text-gray-600 transition-none ${isFullScreen ? 'text-lg max-w-lg' : 'text-sm mt-1 mb-4'}`}>Ask me anything about our collections or philosophy.</p>
                                        </div>

                                        {/* FAQ Suggestions */}
                                        <div className="mt-auto pb-4">
                                            <h4 className="text-[10px] font-semibold text-gray-500 mb-3 px-2 uppercase tracking-widest">Suggested Queries</h4>
                                            <div className={`grid gap-2 ${isFullScreen ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
                                                {faqs.map((faq, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleFAQClick(faq)}
                                                        className="text-left text-xs bg-white border border-border-light hover:bg-surface hover:text-brand-primary p-4 transition-all duration-200 cursor-pointer h-full flex items-center justify-between group"
                                                    >
                                                        <span>{faq}</span>
                                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">→</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    messages.map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-7 last:mb-0 transition-none`}
                                        >
                                            <div
                                                className={`p-3 max-w-[85%] text-sm ${msg.role === 'user'
                                                    ? 'bg-brand-primary text-white'
                                                    : 'bg-white border border-border-light'
                                                    }`}
                                            >
                                                <div className={msg.role === 'user' ? 'text-white' : 'text-text-primary'}>
                                                    <ReactMarkdown 
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{
                                                            a: ({node, ...props}) => <a {...props} className="underline text-brand-primary decoration-brand-primary/50 hover:text-brand-primary transition-colors font-medium" target="_blank" rel="noopener noreferrer" />,
                                                            p: ({node, ...props}) => <p {...props} className="mb-2 last:mb-0" />,
                                                            ul: ({node, ...props}) => <ul {...props} className="list-disc ml-4 mb-2" />,
                                                            ol: ({node, ...props}) => <ol {...props} className="list-decimal ml-4 mb-2" />,
                                                            li: ({node, ...props}) => <li {...props} className="mb-1" />,
                                                            strong: ({node, ...props}) => <strong {...props} className="font-bold text-brand-primary" />
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                {isLoading && (
                                    <div className="flex justify-start mt-7 transition-none">
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
                        </motion.div>

                        <motion.div layout="position" transition={{ duration: 0 }} className="p-3 border-t border-border-light bg-white flex gap-2 shrink-0">
                            <input
                                type="text"
                                className="flex-1 w-full border border-border-light px-4 py-3 text-sm focus:outline-none focus:border-brand-primary disabled:bg-gray-100 placeholder:text-gray-400"
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
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Chatbot