import * as React from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import { BottomNav } from "../components/BottomNav";
import { useBooking } from "../contexts/BookingContext";
import { toast } from "sonner";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const timeSlots = [
  "09.00 AM",
  "09.30 AM",
  "10.00 AM",
  "4.30 PM",
  "5.00 PM",
  "5.30 PM",
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

type CalendarDay = {
  day: number;
  date: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
};

export default function BookAppointment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addBooking, getAvailableSeats, updateBooking, cancelBooking } = useBooking();

  // Check if we're rescheduling
  const rescheduleData = location.state as { bookingId?: string; oldDate?: Date; oldTime?: string } | null;
  const isRescheduling = !!rescheduleData?.bookingId;

  const [currentMonth, setCurrentMonth] = React.useState(new Date(2026, 2, 1)); // March 2026
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: CalendarDay[] = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        isPast: true,
      });
    }

    // Current month days
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);
      const isPast = date < today;

      days.push({
        day,
        date,
        isCurrentMonth: true,
        isPast,
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        date: new Date(year, month + 1, day),
        isCurrentMonth: false,
        isPast: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (date: Date, isPast: boolean) => {
    if (isPast) return;
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  // Get seat availability for selected date and time
  const getSeatsInfo = () => {
    if (!selectedDate || !selectedTime) {
      return { available: 50, total: 50 };
    }
    return getAvailableSeats(selectedDate, selectedTime);
  };

  const seatsInfo = getSeatsInfo();

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time");
      return;
    }

    const dateString = selectedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    if (isRescheduling && rescheduleData) {
      // Release old booking's seat
      if (rescheduleData.oldDate && rescheduleData.oldTime && rescheduleData.bookingId) {
        cancelBooking(rescheduleData.bookingId);
      }

      // Create new booking
      addBooking({
        date: dateString,
        time: selectedTime,
        training: "Training XYZ",
        company: "Oxy",
        location: "Oxy Office",
        status: "upcoming",
        dateObject: selectedDate,
      });

      toast.success("Training rescheduled successfully");
    } else {
      // New booking
      addBooking({
        date: dateString,
        time: selectedTime,
        training: "Training XYZ",
        company: "Oxy",
        location: "Oxy Office",
        status: "upcoming",
        dateObject: selectedDate,
      });

      toast.success("Training booked successfully");
    }

    navigate("/my-bookings");
  };

  const isConfirmDisabled = !selectedDate || !selectedTime;

  // Helper to build calendar day class names
  const getCalendarDayClass = (isSelected: boolean, isDisabled: boolean, isCurrentMonth: boolean) => {
    const classes = ["calendar-day"];
    if (isSelected) classes.push("calendar-day--selected");
    if (isDisabled && !isSelected) classes.push("calendar-day--disabled");
    if (!isDisabled && !isSelected && isCurrentMonth) classes.push("calendar-day--current-month");
    if (!isDisabled && !isSelected && !isCurrentMonth) classes.push("calendar-day--other-month");
    return classes.join(" ");
  };

  // Helper to build time slot class names
  const getTimeSlotClass = (isSelected: boolean, isDisabled: boolean) => {
    if (isSelected) return "time-slot time-slot--selected";
    if (isDisabled) return "time-slot time-slot--disabled";
    return "time-slot time-slot--available";
  };

  return (
    <div className="page page--white page--with-bottom-nav book-appointment-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-header__title">
          {isRescheduling ? "Reschedule Appointment" : "Book Appointment"}
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="content-section">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12 space-y-6 md:space-y-0">
          {/* Left column: Calendar */}
          <div className="book-appointment__calendar-column">
            <h2 className="heading-section">
              Select Date
            </h2>

            {/* Calendar Card */}
            <div className="calendar-card">
              {/* Month Header */}
              <div className="calendar-header">
                <h3 className="calendar-header__title">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="calendar-header__nav">
                  <button
                    onClick={handlePrevMonth}
                    className="calendar-header__nav-btn"
                  >
                    <ChevronLeft size={16} className="icon-color-muted" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="calendar-header__nav-btn"
                  >
                    <ChevronRight size={16} className="icon-color-primary" />
                  </button>
                </div>
              </div>

              {/* Days of Week */}
              <div className="calendar-weekdays">
                {daysOfWeek.map((day) => (
                  <div key={day} className="calendar-weekdays__day">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="calendar-days">
                {calendarDays.map((item, index) => {
                  const isSelected =
                    selectedDate &&
                    item.date.getTime() === selectedDate.getTime();
                  const isDisabled = item.isPast;
                  const isCurrentMonth = item.isCurrentMonth;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(item.date, isDisabled)}
                      disabled={isDisabled}
                      className={getCalendarDayClass(!!isSelected, isDisabled, isCurrentMonth)}
                    >
                      {item.day}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right column: Time, location, confirm */}
          <div className="md:flex-1 space-y-6">
            {/* Select Hour Section */}
            <div>
              <h2 className="heading-section">
                Select Hour
              </h2>

              {/* Time Slots */}
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => {
                  const isSelected = time === selectedTime;
                  const seats = selectedDate
                    ? getAvailableSeats(selectedDate, time)
                    : { available: 50, total: 50 };
                  const isFull = seats.available === 0;
                  const isDisabled = !selectedDate || isFull;

                  return (
                    <button
                      key={time}
                      onClick={() => !isDisabled && setSelectedTime(time)}
                      disabled={isDisabled}
                      className={getTimeSlotClass(isSelected, isDisabled)}
                    >
                      {time}
                      {isFull && <div className="text-xs mt-1">(Full)</div>}
                    </button>
                  );
                })}
              </div>

              {/* Available Seats */}
              {selectedDate && selectedTime && (
                <div className="seats-info">
                  <div>
                    <p className="seats-info__label">
                      Seats availability
                    </p>
                    <p className="seats-info__count">
                      {seatsInfo.available} of {seatsInfo.total} seats available
                    </p>
                  </div>
                  <div className="seats-info__bar-wrapper">
                    <div className="seats-info__bar-bg">
                      <div
                        className="seats-info__bar-fill"
                        style={{
                          width: `${seatsInfo.total
                              ? (seatsInfo.available / seatsInfo.total) * 100
                              : 0
                            }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Location Section */}
            <div>
              <label className="block text-sm font-semibold text-muted mb-2">
                Location
              </label>
              <input
                type="text"
                value="Oxy Office"
                readOnly
                className="input-readonly"
              />
            </div>

            {/* Confirm Button */}
            <div className="book-appointment__confirm-sticky">
              <Button
                fullWidth
                onClick={handleConfirm}
                disabled={isConfirmDisabled}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
