import React from "react";
import "../../styles/components/ChatBot/ChatBotLauncher.css";
import ChatBotDialog from "../../components/ChatBot/ChatBotDialog";

const ChatBotContainer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [pulse, setPulse] = React.useState(false);

  React.useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <>
      {!open && (
        <button
          className={`chatbot-launcher${pulse ? " pulse" : ""}`}
          onClick={() => setOpen(true)}
          aria-label="Chatbot"
        >
          <img
            src="/images/ChatLogo.png"
            alt="Chatbot Logo"
            className="chatbot-launcher-logo"
          />
        </button>
      )}
      {open && <ChatBotDialog onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatBotContainer;
