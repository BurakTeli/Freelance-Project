import React from "react";
import "../../styles/components/ChatBot/ChatBotGreeting.css";

interface Props {
  onSelect: (option: string) => void;
}

// Türkçe ana buton seçenekleri
const options = [
  { key: "quote", label: "Teklif almak istiyorum" },
  { key: "question", label: "Sormak istediğim bir soru var" },
  { key: "support", label: "Destek ile iletişime geç" },
];

const ChatBotGreeting: React.FC<Props> = ({ onSelect }) => (
  <div className="chatbot-greeting-root">
    <div className="chatbot-greeting-message">
      Shine Event Party’ye hoş geldiniz! Size nasıl yardımcı olabiliriz?
    </div>
    <div className="chatbot-greeting-options">
      {options.map((opt) => (
        <button
          className="chatbot-greeting-btn"
          key={opt.key}
          onClick={() => onSelect(opt.key)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export default ChatBotGreeting;
