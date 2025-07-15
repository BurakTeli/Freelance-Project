// src/components/ChatBot/ChatBotQuestions.tsx
import React from "react";
import "../../styles/components/ChatBot/ChatBotQuestions.css";

interface ChatBotQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

const ChatBotQuestions: React.FC<ChatBotQuestionsProps> = ({
  questions,
  onQuestionClick,
}) => (
  <div className="chatbot-questions">
    {questions.map((q, idx) => (
      <button
        key={idx}
        className="chatbot-question-btn"
        onClick={() => onQuestionClick(q)}
      >
        {q}
      </button>
    ))}
  </div>
);

export default ChatBotQuestions;
