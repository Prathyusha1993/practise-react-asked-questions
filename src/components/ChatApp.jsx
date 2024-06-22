import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

const ChatApp = () => {
    const [message, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // socket.on('message', (message) => {
        //     setMessage(prevMessage => [...prevMessage, message])
        // })
    },[]);

    const sendMessage = () => {
        // socket.emit('message', newMessage);
        // setNewMessage('');
    }
  return (
    <div>
        <h3>ChatApp</h3>
        <ul>
            {message.map((msg, index) => {
                <li key={index}>{msg}</li>
            })}
        </ul>
        <input style={{width:'250px'}} type='text' value={newMessage} onChange={e =>  setNewMessage(e.target.value)} placeholder='Type a Message' />
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatApp;