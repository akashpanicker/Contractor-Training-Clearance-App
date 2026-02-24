import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "../components/Button";
import { BottomNav } from "../components/BottomNav";
import { ConfirmModal } from "../components/ConfirmModal";
import { useBooking } from "../contexts/BookingContext";
import { toast } from "sonner";
import { FloatingChatbot } from "../components/FloatingChatbot";

export default function MyBookings() {
  const navigate = useNavigate();
  const { bookings, cancelBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<"upcoming" | "certificate">(
    "upcoming"
  );
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );

  const handleCancelClick = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setCancelModalOpen(true);
  };

  const handleConfirmCancel = () => {
    if (selectedBookingId) {
      cancelBooking(selectedBookingId);
      toast.success("Training cancelled successfully");
      setCancelModalOpen(false);
      setSelectedBookingId(null);
    }
  };

  const handleReschedule = (booking: typeof bookings[0]) => {
    navigate("/book-appointment", {
      state: {
        bookingId: booking.id,
        oldDate: booking.dateObject,
        oldTime: booking.time,
      },
    });
  };

  const handleBookTraining = () => {
    navigate("/book-appointment");
  };

  const upcomingBookings = bookings.filter((b) => b.status === "upcoming");

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      {/* Header */}
      <div className="px-6 py-4 pt-11">
        <h1 className="text-xl font-semibold text-[#00539B]">Home</h1>
      </div>
  
      {/* Content */}
      <div className="flex-1">
        {/* My Bookings Title */}
        <div className="px-6 mb-4">
          <h2 className="text-lg font-semibold text-[#374151]">My Bookings</h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#E5E7EB]">
          <div className="flex px-6">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
                activeTab === "upcoming"
                  ? "text-[#00539B]"
                  : "text-[#6B7280]"
              }`}
            >
              Upcoming
              {activeTab === "upcoming" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00539B]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("certificate")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
                activeTab === "certificate"
                  ? "text-[#00539B]"
                  : "text-[#6B7280]"
              }`}
            >
              Certificate
              {activeTab === "certificate" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00539B]" />
              )}
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="p-6">
          {activeTab === "upcoming" && (
            <>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm"
                    >
                      {/* Date & Time */}
                      <p className="text-sm font-bold text-[#1F2937] mb-3">
                        {booking.date} - {booking.time}
                      </p>

                      <div className="h-px bg-[#E5E7EB] mb-3" />

                      {/* Training Info */}
                      <div className="space-y-2 mb-3">
                        <h3 className="font-bold text-[#1F2937]">
                          {booking.training}
                        </h3>
                        <p className="text-sm text-[#4B5563]">{booking.company}</p>
                        <div className="flex items-start gap-1">
                          <MapPin size={16} className="text-[#4B5563] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-[#4B5563]">
                            {booking.location}
                          </p>
                        </div>
                      </div>

                      <div className="h-px bg-[#E5E7EB] mb-3" />

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="secondary"
                          fullWidth
                          onClick={() => handleCancelClick(booking.id)}
                        >
                          Cancel
                        </Button>
                        <Button fullWidth onClick={() => handleReschedule(booking)}>
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-4">
                    <Calendar size={32} className="text-[#9CA3AF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                    No Upcoming Training
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-6">
                    You haven't scheduled any training sessions yet
                  </p>
                  <Button onClick={handleBookTraining}>
                    Book Training
                  </Button>
                </div>
              )}
            </>
          )}

          {activeTab === "certificate" && (
            <div className="text-center py-12 text-[#6B7280]">
              <p>No certificates available</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Cancel Confirmation Modal */}
      <ConfirmModal
        isOpen={cancelModalOpen}
        onClose={() => {
          setCancelModalOpen(false);
          setSelectedBookingId(null);
        }}
        onConfirm={handleConfirmCancel}
        title="Cancel Training?"
        message="Are you sure you want to cancel your scheduled training?"
        confirmText="Yes, Cancel"
        cancelText="No, Keep" // Shortened for consistency
        confirmVariant="destructive"
      />

      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
}