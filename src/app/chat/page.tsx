'use client';
import { useState, useEffect } from 'react';
import NavBar from '@/app/dashboard/components/navbar';
import Image from 'next/image';

const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);


    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    interface Message {
        user: string;
        bot: string;
        timestamp: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { user: input, bot: '', timestamp: new Date().toLocaleTimeString() };
        setMessages((prev: Message[]) => [...prev, userMessage]);


        setInput('');
        setIsTyping(true);

        try {
            const response: Response = await fetch('http://localhost:8000/get', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ msg: input }),
            });

            const data: { answer: string } = await response.json();
            const botMessage: Message = { user: '', bot: data.answer, timestamp: new Date().toLocaleTimeString() };
            setMessages((prev: Message[]) => [...prev, botMessage]);
            setIsTyping(false);
        } catch (error) {
            console.error('Error:', error);
            setIsTyping(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar />

            <div className="flex-1 overflow-auto pb-24 max-w-4xl mx-auto pt-20 px-4" id='/chat'>
                <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-slate-50 p-6 border-b border-pink-200">
                        <h1 className="text-2xl font-semibold text-pink-800 text-center">
                            Chat with BabyGuard
                        </h1>
                        <p className="text-pink-600 text-center mt-2 text-sm">
                            Your personal pregnancy care assistant
                        </p>
                    </div>

                    {/* Messages Area */}
                    <div className="p-6 bg-slate-50 flex-1 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-6 flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                                {msg.user ? (
                                    <div className="flex items-end space-x-2">
                                        <div className="flex flex-col items-end">
                                            <div className="bg-pink-600 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-md">
                                                <p className="text-sm">{msg.user}</p>
                                            </div>
                                            <span className="text-xs text-pink-400 mt-1">{msg.timestamp}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                                            <Image src="/dp.png" width={32} height={32} alt="Avatar" className='rounded-full' />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-end space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                            <Image src="/favicon.jpg" width={20} height={10} alt="Avatar" className='rounded-full' />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="bg-white border border-pink-200 px-4 py-2 rounded-2xl rounded-bl-none max-w-md shadow-sm">
                                                <p className="text-sm text-pink-800">{msg.bot}</p>
                                            </div>
                                            <span className="text-xs text-pink-400 mt-1">{msg.timestamp}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center space-x-2 text-pink-600">
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Input Area - Fixed at Bottom */}
            <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg z-50">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-800 placeholder-pink-300"
                            placeholder="Type your message..."
                        />
                        <button
                            type="submit"
                            className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;