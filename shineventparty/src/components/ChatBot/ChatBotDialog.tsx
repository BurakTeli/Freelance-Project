import React, { useState } from "react";
import "../../styles/components/ChatBot/ChatBotDialog.css";
import { QUESTION_DATA } from "../../data/questionData";
import ChatBotHeader from "./ChatBotHeader";

// Props type for closing the dialog
interface ChatBotDialogProps {
  onClose: () => void;
}

// Main ChatBotDialog component
const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ onClose }) => {
  // Stores the currently selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // Stores the index of the currently opened answer (for question/answer reveal)
  const [openedAnswerIndex, setOpenedAnswerIndex] = useState<number | null>(
    null
  );

  // Get unique categories from data
  const categories = Array.from(
    new Set(QUESTION_DATA.map((item) => item.category))
  );

  // Find all questions for the selected category, or empty array if none selected
  const questions = selectedCategory
    ? QUESTION_DATA.find((item) => item.category === selectedCategory)
        ?.questions || []
    : [];

  // Go back to category selection and reset opened answer
  const handleBack = () => {
    setSelectedCategory(null);
    setOpenedAnswerIndex(null);
  };

  return (
    // Overlay background, clicking it closes the chatbot
    <div className="chatbot-dialog-overlay" onClick={onClose}>
      {/* Main dialog box, stops propagation to prevent closing on click inside */}
      <div className="chatbot-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header with logo/title/close button */}
        <ChatBotHeader onClose={onClose} />

        {/* Main content area (categories, questions, answers) */}
        <div className="chatbot-messages-list">
          {/* Welcome message at the top */}
          <div className="chatbot-message">
            Merhaba, yardıma ihtiyacınız olursa ben buradayım! ✌️
          </div>

          {/* Category selection area */}
          {!selectedCategory && (
            <div className="chatbot-category-scroll">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="chatbot-message chatbot-category-message"
                  onClick={() => setSelectedCategory(cat)}
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}

          {/* Question/Answer area for the selected category */}
          {selectedCategory && (
            <>
              {/* Selected category title */}
              <div className="chatbot-message" style={{ fontWeight: 600 }}>
                {selectedCategory}
              </div>
              {/* Questions for the category */}
              <div className="chatbot-question-list">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className="chatbot-message chatbot-question-item"
                  >
                    {/* Clickable question text */}
                    <div
                      className="chatbot-question-text"
                      onClick={() =>
                        setOpenedAnswerIndex(openedAnswerIndex === i ? null : i)
                      }
                      style={{ cursor: "pointer" }}
                      tabIndex={0}
                    >
                      {q.question}
                    </div>
                    {/* Show answer if this question is opened */}
                    {openedAnswerIndex === i && (
                      <div className="chatbot-answer-text">{q.answer}</div>
                    )}
                  </div>
                ))}
              </div>
              {/* Back to category selection button */}
              <div
                className="chatbot-message chatbot-back-message"
                onClick={handleBack}
                style={{ cursor: "pointer", color: "#2777c3" }}
                tabIndex={0}
              >
                ← Kategoriye Geri Dön
              </div>
            </>
          )}
        </div>

        {/* Disabled input area for visual consistency */}
        <div className="chatbot-input-placeholder">
          <input type="text" disabled placeholder="Bir seçenek seç" />
          <button disabled>
            <svg width="22" height="22">
              <circle cx="11" cy="11" r="10" fill="#eee" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotDialog;
