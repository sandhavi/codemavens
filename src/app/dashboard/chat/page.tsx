'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ user: string; bot: string; timestamp: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    // Load messages from localStorage on component mount
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        // Append user message to chat history with timestamp
        const userMessage = { user: input, bot: '', timestamp: new Date().toLocaleTimeString() };
        setMessages((prev) => [...prev, userMessage]);
        
        setInput('');
        setIsTyping(true); // Show typing indicator

        try {
            const response = await fetch('http://localhost:8000/get', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ msg: input }),
            });

            const data = await response.json();

            const botMessage = { user: '', bot: data.answer, timestamp: new Date().toLocaleTimeString() };
            setMessages((prev) => [...prev, botMessage]);
            

            setIsTyping(false); 
        } catch (error) {
            console.error('Error communicating with chatbot:', error);
            setIsTyping(false); // Hide typing indicator on error
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-screen bg-white">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center p-4 bg-gray-100">Chat with BabyGuard</h1>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                        {msg.user ? (
                            <>
                                <p className="text-xs text-gray-500">{msg.timestamp}</p>
                                <div className={`inline-block rounded-lg px-4 py-2 ${msg.user ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'} max-w-[70%]`}>
                                    <p>{msg.user}</p>
                                </div>
                                <img src="/newOne.jpg" alt="User" className="w-8 h-8 rounded-full ml-2" />
                            </>
                        ) : (
                            <>
                                <img src="/images/bot-icon.png" alt="Bot" className="w-8 h-8 rounded-full mr-2" />
                                <div className={`inline-block rounded-lg px-4 py-2 ${msg.user ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'} max-w-[70%]`}>
                                    <p>{msg.bot}</p>
                                </div>
                                <p className="text-xs text-gray-500">{msg.timestamp}</p>
                            </>
                        )}
                    </div>
                ))}
                {isTyping && <p className="text-gray-500 italic">Bot is thinking...</p>}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-100 border-t border-gray-300">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-1" />
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;
