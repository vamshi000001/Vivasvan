import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessage } from '../services/chatService';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: 'Hello! 👋 I\'m the Vivasvan AI Assistant. I can answer questions about our team members, projects, technical skills, and achievements. How can I help you today?'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');

        // Add user message to chat
        const newMessages = [...messages, { role: 'user', text: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            // Get AI response
            const response = await sendMessage(userMessage, messages);

            // Add bot response to chat
            setMessages([...newMessages, { role: 'bot', text: response }]);
        } catch (error) {
            // Add error message
            setMessages([
                ...newMessages,
                { role: 'bot', text: 'Sorry, I encountered an error. Please try again.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center group pointer-events-none">
                    <style>{`
                        @keyframes ripple {
                            0% { transform: scale(1); opacity: 0.8; }
                            100% { transform: scale(2.5); opacity: 0; }
                        }
                        .animate-ripple {
                            animation: ripple 2s linear infinite;
                        }
                    `}</style>

                    {/* Ring 1 */}
                    <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/50 rounded-full animate-ripple"></div>
                    {/* Ring 2 */}
                    <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/50 rounded-full animate-ripple [animation-delay:0.6s]"></div>
                    {/* Ring 3 */}
                    <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-pink-500/50 rounded-full animate-ripple [animation-delay:1.2s]"></div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative pointer-events-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-10"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                            !
                        </span>
                    </button>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] sm:h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-slide-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Vivasvan AI</h3>
                                <p className="text-xs text-white/80">Ask me anything about our team!</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white text-slate-800 border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Ask about our team, projects, skills..."
                                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputMessage.trim()}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Send message"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot;
