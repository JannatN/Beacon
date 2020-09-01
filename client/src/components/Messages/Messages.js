import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message'
import React from 'react'
const Messages = ({ name, messages, country }) => (
    <ScrollToBottom className="scroller">
        {messages.map((messageloop) =>  <Message message={messageloop} name={name} country={country}/>)}
    </ScrollToBottom>
)

export default Messages
