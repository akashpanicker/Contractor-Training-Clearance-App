// filepath: src/app/pages/Chatbot.tsx
import React, { useState } from "react"; // Ensure React is imported
import { useBooking } from "../contexts/BookingContext";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function ChatbotPage() {
  const { addBooking, updateBooking, bookings } = useBooking();
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! How can I help you with training scheduling?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: messages.length + 1, text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    let botResponse = "";

    // Simple parsing for scheduling/rescheduling
    if (input.toLowerCase().includes("schedule")) {
      const scheduleRegex = /schedule.*on\s+(\w+\s+\d+).*at\s+(\d+\.\d+\s+\w+)/i;
      const match = input.match(scheduleRegex);
      if (match && user) {
        const dateStr = match[1];
        const time = match[2];
        const date = new Date(dateStr + " 2026");
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
        botResponse = "Training scheduled successfully!";
      } else {
        botResponse = "Sorry, I couldn't parse that. Try: 'schedule on May 15 at 10.00 AM'";
      }
    } else if (input.toLowerCase().includes("reschedule")) {
      const rescheduleRegex = /reschedule.*to\s+(\w+\s+\d+).*at\s+(\d+\.\d+\s+\w+)/i;
      const match = input.match(rescheduleRegex);
      if (match && bookings.length > 0) {
        const dateStr = match[1];
        const time = match[2];
        const date = new Date(dateStr + " 2026");
        const booking = bookings.find(b => b.status === "upcoming");
        if (booking) {
          updateBooking(booking.id, {
            date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            time,
            dateObject: date,
          });
          toast.success("Training rescheduled!");
          botResponse = "Training rescheduled successfully!";
        } else {
          botResponse = "No upcoming booking found.";
        }
      } else {
        botResponse = "Sorry, I couldn't parse that. Try: 'reschedule to June 20 at 2.00 PM'";
      }
    } else {
      botResponse = "I can help with scheduling or rescheduling training. Ask me something like 'schedule on May 15 at 10.00 AM'!";
    }

    const botMessage: Message = { id: messages.length + 2, text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className="page page--white">
      <div className="page-header">
        <h1 className="page-header__title">Chatbot</h1>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-message ${msg.sender === "user"
                  ? "chat-message--user"
                  : "chat-message--bot"
                }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="chat-input"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="btn btn--primary btn--icon px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}