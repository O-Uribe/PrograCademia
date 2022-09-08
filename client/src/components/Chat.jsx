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
            <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
                    <h3 className='text-xl font-bold my-2'> Chat con websockets</h3>
                    <input 
                        type="text" 
                        onChange={e=>setMessage(e.target.value)} 
                        value={message}
                        className="border-2 border-zinc-500 p-2 text-black"	
                    />
                    <ul className='h-80 overflow-y-auto'>
                        {messages.map((message, index) => (
                            <li key={index} className={ `my-2 p-2 table text-sm rounded-md ${message.from === "Yo" ? "bg-sky-700 ml-auto": "bg-black"}`}>
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
