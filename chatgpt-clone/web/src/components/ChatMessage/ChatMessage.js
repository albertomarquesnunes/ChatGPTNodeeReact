import React from "react";
import './ChatMessage.css';
import  Avatar  from "../../assets/avatar";

//user(user|chatgpt)
// message -  onde vai estar o prompt
const ChatMessage = ({message}) => {
  console.log("Response from OpenAI:", message)
  return (
    <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
       <div className='chat-message-center'>
            <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
                  {message.message === 'gpt' && <Avatar/>}</div>
            <div className='message'>{message.message}</div>
       </div>
    </div>
  );
};
export default ChatMessage;