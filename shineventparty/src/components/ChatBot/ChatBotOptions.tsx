// src/components/ChatBot/ChatBotOptions.tsx
// Renders the main option buttons for the chatbot (static, no interaction)

import React from "react";

const options = [
  {
    label: "Satın almayı düşünüyorum",
    icon: "🚀",
  },
  {
    label: "Yardıma ihtiyacım var",
    icon: (
      <span>
        <span role="img" aria-label="alarm">
          🚨
        </span>
        <span className="sos-badge">SOS</span>
      </span>
    ),
  },
  {
    label: "Sadece dolaşıyorum",
    icon: "🌐",
  },
  {
    label: "Temmuz ayı kampanyaları hakkında bilgi almak istiyorum",
    icon: "⚡",
  },
];

const ChatBotOptions: React.FC = () => (
  <div className="chatbot-options">
    {options.map((opt, i) => (
      <button key={i} className="chatbot-option-btn" disabled>
        {opt.label}
        <span className="option-icon">
          {typeof opt.icon === "string" ? opt.icon : opt.icon}
        </span>
      </button>
    ))}
  </div>
);

export default ChatBotOptions;