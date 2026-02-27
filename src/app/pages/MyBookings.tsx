import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "../components/Button";
import { BottomNav } from "../components/BottomNav";
import { ConfirmModal } from "../components/ConfirmModal";
import { useBooking } from "../contexts/BookingContext";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";
import { FloatingChatbot } from "../components/FloatingChatbot";

export default function MyBookings() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { bookings, cancelBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<"upcoming" | "certificate">(
    "upcoming"
  );
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );

  // Redirect to create account if no user data
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Show loading state while redirecting
  if (!user) {
    return null;
  }

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
    <div className="page page--white page--with-bottom-nav">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-header__title">My Bookings</h1>
      </div>

      {/* Content */}
      <div className="flex-1 pt-4">

        {/* Tabs */}
        <div className="tabs">
          <div className="tabs__container">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`tabs__tab ${activeTab === "upcoming"
                  ? "tabs__tab--active"
                  : "tabs__tab--inactive"
                }`}
            >
              Upcoming
              {activeTab === "upcoming" && (
                <div className="tabs__indicator" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("certificate")}
              className={`tabs__tab ${activeTab === "certificate"
                  ? "tabs__tab--active"
                  : "tabs__tab--inactive"
                }`}
            >
              Completed / Certificate
              {activeTab === "certificate" && (
                <div className="tabs__indicator" />
              )}
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="p-6">
          {activeTab === "upcoming" && (
            <>
              {upcomingBookings.length > 0 ? (
                <div className="my-bookings__grid">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="booking-card">
                      {/* Date & Time */}
                      <p className="booking-card__date">
                        {booking.date} - {booking.time}
                      </p>

                      <div className="booking-card__divider" />

                      {/* Training Info */}
                      <div className="booking-card__info">
                        <h3>{booking.training}</h3>
                        <p>{booking.company}</p>
                        <div className="flex items-start gap-1">
                          <MapPin size={16} className="icon-color-subtle mt-0.5 flex-shrink-0" />
                          <p>{booking.location}</p>
                        </div>
                      </div>

                      <div className="booking-card__divider" />

                      {/* Action Buttons */}
                      <div className="booking-card__actions">
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
                <div className="empty-state">
                  <div className="empty-state__icon">
                    <Calendar size={32} />
                  </div>
                  <h3 className="empty-state__title">
                    No Upcoming Training
                  </h3>
                  <p className="empty-state__description">
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
            <div className="text-center py-12 text-muted">
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
        cancelText="No, Keep"
        confirmVariant="destructive"
      />

      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
}
