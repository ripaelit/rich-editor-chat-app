import React from 'react';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='user pr-10'>{trimmedName}</p>
      <div className='messageBox backgroundGreen'>
        <div
          className='messageText colorWhite'
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <div className='messageBox backgroundLight'>
        <div
          className='messageText colorDark'
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
      <p className='user pl-10 '>{user}</p>
    </div>
  );
};

export default Message;
