import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const receiveMessage = (message) => {
            setMessages([message, ...messages]);
        };

        socket.on("message", receiveMessage);

        return () => {
            socket.off("message", receiveMessage);
        };
    }, [messages]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
        body: message,
        from: "Me",
        };
        setMessages([newMessage, ...messages]);
        socket.emit("message", newMessage.body);
    };

    return (
        <div className="w-96 bg-base-100 shadow-xl image-full object-left">
        <form onSubmit={handleSubmit}>
            <h2>Chat Progracademia</h2>
            <input
            name="message"
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-zinc-500 p-2 w-full text-black"
            value={message}
            autoFocus
            />

            <ul className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
                <li
                key={index}
                className={`my-2 p-2 table text-sm rounded-md ${
                    message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
                }`}
                >
                <b>{message.from}</b>:{message.body}
                </li>
            ))}
            </ul>
        </form>
        </div>
    );
}
