import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message'
import React from 'react'

const Messages = ({ name, messages }) => (
    <ScrollToBottom>
        {messages.map((messageloop, i) => <div key={i}> <Message message={messageloop} name={name} /> </div>)}
    </ScrollToBottom>
)



export default Messages