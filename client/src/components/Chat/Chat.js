import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'https://rich-editor-chat.herokuapp.com/';

let socket;

const Chat = () => {
  const location = useLocation();
  const [name_s, setName] = useState('');
  const [room_s, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [sidebarShow, sidebarToggle] = useState(true);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const sidebarToggleHandler = () => {
    sidebarToggle(!sidebarShow);
    console.log('clicked');
  };

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Sidebar room={room_s} users={users} sidebarShow={sidebarShow} />
        <div className='chat_container'>
          <InfoBar sidebarToggle={sidebarToggleHandler} />
          <Messages messages={messages} name={name_s} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
