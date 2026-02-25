import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, Bot, User as UserIcon } from "lucide-react";
import { useBooking } from "../contexts/BookingContext";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";
import {
  generateResponse,
  type PendingAction,
  type AssistantContext,
} from "../services/assistantEngine";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function FloatingChatbot() {
  const { addBooking, updateBooking, bookings, cancelBooking, getAvailableSeats, incrementSeats } = useBooking();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello. I am your training assistant. I can help you schedule, reschedule, or cancel training sessions, check your clearance status, view seat availability, and more.\n\nType 'help' to see everything I can do.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMsg: Message = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    return newMsg;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    addMessage(userInput, "user");
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate a brief processing delay for realism
    setTimeout(() => {
      const context: AssistantContext = {
        user: user || null,
        bookings,
        pendingAction,
        getAvailableSeats,
      };

      const response = generateResponse(userInput, context);

      // Execute action if any
      if (response.action) {
        switch (response.action.type) {
          case "book": {
            const payload = response.action.payload;
            addBooking({
              date: payload.date,
              time: payload.time,
              training: payload.training || "Training XYZ",
              company: payload.company || "Oxy",
              location: payload.location || "Oxy Office",
              status: "upcoming",
              dateObject: payload.dateObject,
            });
            toast.success("Training scheduled successfully");
            break;
          }
          case "cancel": {
            const { bookingId } = response.action.payload;
            cancelBooking(bookingId);
            toast.success("Training cancelled successfully");
            break;
          }
          case "reschedule": {
            const p = response.action.payload;
            // Cancel old and book new
            cancelBooking(p.bookingId);
            addBooking({
              date: p.newDate,
              time: p.newTime,
              training: p.training || "Training XYZ",
              company: p.company || "Oxy",
              location: p.location || "Oxy Office",
              status: "upcoming",
              dateObject: p.newDateObject,
            });
            toast.success("Training rescheduled successfully");
            break;
          }
        }
      }

      // Update pending action state
      setPendingAction(response.newPendingAction);

      // Add bot response
      setIsTyping(false);
      addMessage(response.text, "bot");
    }, 400 + Math.random() * 400); // 400-800ms delay
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatMessageText = (text: string) => {
    // Split into lines and render with proper formatting
    return text.split("\n").map((line, idx) => {
      const trimmedLine = line.trim();

      // Empty line = spacer
      if (trimmedLine === "") {
        return <div key={idx} className="chat-line-spacer" />;
      }

      // Lines starting with a number and period are list items
      if (/^\d+\.\s/.test(trimmedLine)) {
        return (
          <div key={idx} className="chat-line chat-line--list">
            {trimmedLine}
          </div>
        );
      }

      // Lines starting with "- " are bullet items
      if (trimmedLine.startsWith("- ")) {
        return (
          <div key={idx} className="chat-line chat-line--bullet">
            {trimmedLine}
          </div>
        );
      }

      // Lines with ": " are key-value pairs
      if (/^[A-Z][A-Za-z\s]+:/.test(trimmedLine) && !trimmedLine.startsWith("Example")) {
        const colonIdx = trimmedLine.indexOf(":");
        const label = trimmedLine.substring(0, colonIdx);
        const value = trimmedLine.substring(colonIdx + 1).trim();
        return (
          <div key={idx} className="chat-line chat-line--kv">
            <span className="chat-line__label">{label}:</span> {value}
          </div>
        );
      }

      // Indented lines (details under list items)
      if (line.startsWith("   ")) {
        return (
          <div key={idx} className="chat-line chat-line--detail">
            {trimmedLine}
          </div>
        );
      }

      // Default line
      return (
        <div key={idx} className="chat-line">
          {trimmedLine}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chat-fab ${isOpen ? "chat-fab--active" : ""}`}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        id="chat-fab-toggle"
      >
        <div className={`chat-fab__icon ${isOpen ? "chat-fab__icon--rotate" : ""}`}>
          {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </div>
        {!isOpen && pendingAction && (
          <span className="chat-fab__badge" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chat-window ${isOpen ? "chat-window--open" : ""}`} id="chat-window">
          {/* Header */}
          <div className="chat-window__header">
            <div className="chat-window__header-content">
              <div className="chat-window__header-avatar">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="chat-window__header-title">Training Assistant</h3>
                <span className="chat-window__header-status">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-window__close-btn"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="chat-window__messages" id="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-msg-row ${msg.sender === "user" ? "chat-msg-row--right" : "chat-msg-row--left"}`}
              >
                {msg.sender === "bot" && (
                  <div className="chat-msg__avatar chat-msg__avatar--bot">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`chat-msg ${msg.sender === "user" ? "chat-msg--user" : "chat-msg--bot"
                    }`}
                >
                  <div className="chat-msg__content">
                    {formatMessageText(msg.text)}
                  </div>
                  <span className="chat-msg__time">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                {msg.sender === "user" && (
                  <div className="chat-msg__avatar chat-msg__avatar--user">
                    <UserIcon size={14} />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-msg-row chat-msg-row--left">
                <div className="chat-msg__avatar chat-msg__avatar--bot">
                  <Bot size={14} />
                </div>
                <div className="chat-msg chat-msg--bot chat-msg--typing">
                  <div className="typing-indicator">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Pending Action Indicator */}
          {pendingAction && (
            <div className="chat-window__pending">
              Awaiting your confirmation (yes/no)
            </div>
          )}

          {/* Input Area */}
          <div className="chat-window__input-area">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={pendingAction ? "Type yes or no..." : "Ask me anything..."}
              className="chat-input chat-input--floating"
              id="chat-input"
              autoComplete="off"
            />
            <button
              onClick={handleSend}
              className={`chat-send-btn ${input.trim() ? "chat-send-btn--active" : ""}`}
              disabled={!input.trim()}
              aria-label="Send message"
              id="chat-send-btn"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}