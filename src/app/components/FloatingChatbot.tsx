import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useBooking } from "../contexts/BookingContext";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function parseDate(dateStr: string): Date | null {
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 2) {
    const monthStr = parts[0];
    const dayStr = parts[1];
    const month = monthNames.findIndex(m => m.toLowerCase().startsWith(monthStr.toLowerCase()));
    const day = parseInt(dayStr);

    if (month !== -1 && !isNaN(day)) {
      return new Date(2026, month, day);
    }
  }
  return null;
}

export function FloatingChatbot() {
  const { addBooking, updateBooking, bookings, cancelBooking } = useBooking();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! How can I help you with training scheduling?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [pendingAction, setPendingAction] = useState<{ type: string; data?: any } | null>(null);

  const getNextUpcomingBooking = () => {
    return bookings.find(b => b.status === "upcoming");
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: messages.length + 1, text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    let botResponse = "";
    const lowerInput = input.toLowerCase();

    // Handle pending actions (e.g., confirmations)
    if (pendingAction) {
      if (lowerInput.includes("yes") || lowerInput.includes("confirm")) {
        if (pendingAction.type === "cancel") {
          cancelBooking(pendingAction.data.id);
          toast.success("Training canceled!");
          botResponse = "✅ Your training has been canceled. Anything else?";
        }
        setPendingAction(null);
      } else if (lowerInput.includes("no") || lowerInput.includes("cancel")) {
        botResponse = "Okay, no problem. What else can I help with?";
        setPendingAction(null);
      } else {
        botResponse = "Please reply 'yes' to confirm or 'no' to cancel.";
      }
    } else {
      // Main conversation logic
      if (lowerInput.includes("when") || lowerInput.includes("next") || lowerInput.includes("upcoming") || lowerInput.includes("what")) {
        const nextBooking = getNextUpcomingBooking();
        if (nextBooking) {
          botResponse = `📅 Your next training is on ${nextBooking.date} at ${nextBooking.time}.\n📍 Location: ${nextBooking.location}\n🏢 Company: ${nextBooking.company}\n\nNeed to reschedule or cancel?`;
        } else {
          botResponse = "You don't have any upcoming training. Want to schedule one? Try: 'schedule on May 15 at 10.00 AM'";
        }
      } else if (lowerInput.includes("schedule") || lowerInput.includes("book")) {
        const scheduleRegex = /(?:schedule|book).*on\s+([\w]+\s+\d+).*at\s+(\d+\.?\d*\s*(?:AM|PM|am|pm))/i;
        const match = input.match(scheduleRegex);

        if (match) {
          const dateStr = match[1];
          const time = match[2].toUpperCase();
          const date = parseDate(dateStr);

          if (date) {
            try {
              addBooking({
                date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                time,
                training: "Training XYZ",
                company: "Oxy",
                location: "Oxy Office",
                status: "upcoming",
                dateObject: date,
              });
              toast.success("Training scheduled!");
              botResponse = `✅ Training scheduled for ${dateStr} at ${time}! Is there anything else?`;
            } catch (error) {
              botResponse = "Oops, something went wrong. Try again.";
            }
          } else {
            botResponse = "I couldn't understand the date. Try: 'schedule on May 15 at 10.00 AM'";
          }
        } else {
          botResponse = "Sure, when and what time? For example: 'schedule on May 15 at 10.00 AM'";
        }
      } else if (lowerInput.includes("reschedule") || lowerInput.includes("change")) {
        const rescheduleRegex = /(?:reschedule|change).*to\s+([\w]+\s+\d+).*at\s+(\d+\.?\d*\s*(?:AM|PM|am|pm))/i;
        const match = input.match(rescheduleRegex);
        if (match && bookings.length > 0) {
          const dateStr = match[1];
          const time = match[2].toUpperCase();
          const date = parseDate(dateStr);

          if (date) {
            const booking = getNextUpcomingBooking();
            if (booking) {
              updateBooking(booking.id, {
                date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                time,
                dateObject: date,
              });
              toast.success("Training rescheduled!");
              botResponse = `✅ Rescheduled to ${dateStr} at ${time}! All set?`;
            } else {
              botResponse = "No upcoming booking to reschedule.";
            }
          } else {
            botResponse = "Couldn't parse the new date. Try: 'reschedule to June 20 at 2.00 PM'";
          }
        } else {
          botResponse = "What date and time? For example: 'reschedule to June 20 at 2.00 PM'";
        }
      } else if (lowerInput.includes("cancel") || lowerInput.includes("delete")) {
        const nextBooking = getNextUpcomingBooking();
        if (nextBooking) {
          setPendingAction({ type: "cancel", data: nextBooking });
          botResponse = `Are you sure you want to cancel training on ${nextBooking.date} at ${nextBooking.time}? Reply 'yes' to confirm.`;
        } else {
          botResponse = "No upcoming training to cancel.";
        }
      } else if (lowerInput.includes("help") || lowerInput.includes("what")) {
        botResponse = "I can help with:\n• 'When is my next training?'\n• 'Schedule on May 15 at 10.00 AM'\n• 'Reschedule to June 20 at 2.00 PM'\n• 'Cancel my training'\n\nWhat would you like?";
      } else {
        botResponse = "I'm not sure I understood. Try asking about your next training, scheduling, or canceling. Or say 'help'!";
      }
    }

    const botMessage: Message = { id: messages.length + 2, text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-fab"
        aria-label="Open chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-window__header">
            <h3 className="font-semibold">Training Assistant</h3>
          </div>

          {/* Messages */}
          <div className="chat-window__messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`chat-floating-message ${msg.sender === "user"
                      ? "chat-floating-message--user"
                      : "chat-floating-message--bot"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-window__input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about training..."
              className="chat-input chat-input--floating"
            />
            <button
              onClick={handleSend}
              className="btn btn--primary btn--icon"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}