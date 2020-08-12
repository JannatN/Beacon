
import './Message.css';
import React, { useState, useEffect } from 'react';
import ReactEmoji from 'react-emoji';
import Avatar from '@material-ui/core/Avatar';

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;

  if (message.name == name) { //the current user is name, message.name the other person
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">

          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite"> {message.message} </p>
          </div>
          <Avatar className="mt ml" alt="Remy Sharp" src='' />
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <Avatar className="mt mr" alt="Remy Sharp" src='' />
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{message.message}</p>
          </div>
          <p className="sentText pl-10 ">{message.name}</p>
        </div>
      )
  );
}

export default Message;