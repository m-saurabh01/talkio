import React, { useState, useEffect } from 'react';
import socket from '../services/socket';

const Chat = ({ onLogout }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
       
        socket.on('chat-message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        
        return () => {
            socket.off('chat-message');
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
           
            socket.emit('message', { content: message, username: 'User' });
            setMessage(''); 
        }
    };

    return (
        <div>
            <h2>Chat Room</h2>
            <button onClick={onLogout}>Logout</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.username}:</strong> {msg.content}
                    </li>
                ))}
            </ul>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type a message...'
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
