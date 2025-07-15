// src/components/ChatBot/ChatBotCloseButton.tsx
import React from "react";

interface ChatBotCloseButtonProps {
  onClick: () => void;
}

const ChatBotCloseButton: React.FC<ChatBotCloseButtonProps> = ({ onClick }) => (
  <button
    className="chatbot-close-btn"
    onClick={onClick}
    aria-label="Close"
    type="button"
  >
    ×
  </button>
);

export default ChatBotCloseButton;
