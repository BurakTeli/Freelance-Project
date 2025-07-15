// src/components/ChatBot/ChatBotHeader.tsx
import React from "react";
import ChatBotCloseButton from "./ChatBotCloseButton";

interface ChatBotHeaderProps {
  onClose: () => void;
}

const ChatBotHeader: React.FC<ChatBotHeaderProps> = ({ onClose }) => (
  <div className="chatbot-header">
    <img
      src="/images/components/Mezuniyet/m2.jpg"
      alt="ChatBot Logo"
      className="chatbot-logo"
    />
    <span className="chatbot-title">ikas Destek</span>
    <ChatBotCloseButton onClick={onClose} />
  </div>
);

export default ChatBotHeader;
