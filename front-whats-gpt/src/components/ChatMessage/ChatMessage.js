import React from "react";

import "./ChatMessage.css";

import Avatar from "../../assets/avatar";

// {
//   user: "gpt"
//   message: "crie um nome de cachorro"
// }

export const ChatMessage = ({ message }) => {
  <div className={`chat-message ${message.user === "gpt" && "chat-gpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user === "gpt" && "chat-gpt"}`}>
        ${message.user === "gpt" && <Avatar />}
      </div>
      <div className={`message ${message.user === "gpt" && "chat-gpt"}`}>
        {message.message}
      </div>
    </div>
  </div>;
};
