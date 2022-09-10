import React from "react";
import io from 'socket.io-client';
import {useEffect, useState } from "react";

const socket = io('http://localhost:4000');


const Chat = () => {
    const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

  
  	const handleSubmit = (e) => {
    	e.preventDefault();
    	socket.emit('message', message);
		
		const newMessage = {
      		body: message,
      		from: 'Yo'
    	};
   		setMessages([ newMessage, ...messages ]);
    	setMessage('');
  	};
  
	useEffect(() => {
		const receiveMessage = (message) => {
      		setMessages([message, ...messages]);   
    	};
    	socket.on('message', receiveMessage);
    	return () => {
      		socket.off('message', receiveMessage);       
  		};
	}, [messages]);



    return (
        <div> 
            <div>
                <form onSubmit={handleSubmit}>
                    <h3> Chat con websockets</h3>
                    <input 
                        type="text" 
                        onChange={e=>setMessage(e.target.value)} 
                        value={message}
                    />
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>
                                <p>{message.from}: {message.body}</p>
                            </li>
                        ))}	
                    </ul>	
                </form>
            </div>
        </div>
    );
}

export default Chat;
