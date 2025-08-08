import React from "react";
import './ChatMessage.css';
import { Avatar } from "../../assets/avatar";

//user(user|chatgpt)
// message -  onde vai estar o prompt
export const ChatMessage = ({message }) => {
  return (
    <div className={`chat-message ${message.user==='gpt' && "chatgpt"}`}>
      <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}></div>
            {message.message==='gpt' && <Avatar/>}
      <div className="message">{message.message}</div>
    </div>
  );
};
