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

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      {/* Header */}
      <div className="px-6 py-4 pt-11">
        <h1 className="text-xl font-semibold text-[#00539B]">
          {isRescheduling ? "Reschedule Appointment" : "Book Appointment"}
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12 space-y-6 md:space-y-0">
          {/* Left column: Calendar */}
          <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-base md:text-lg font-semibold text-[#374151] mb-3">
              Select Date
            </h2>

            {/* Calendar Card */}
            <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-sm">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#111928]">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-[#E5E7EB] rounded transition-colors"
                  >
                    <ChevronLeft size={16} className="text-[#9CA3AF]" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-[#E5E7EB] rounded transition-colors"
                  >
                    <ChevronRight size={16} className="text-[#00539B]" />
                  </button>
                </div>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-semibold text-[#4B5563] py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
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
                      className={`
                        aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-all
                        ${isSelected ? "bg-[#00539B] text-white" : ""}
                        ${
                          isDisabled && !isSelected
                            ? "text-[#D1D5DB] opacity-50 cursor-not-allowed"
                            : ""
                        }
                        ${
                          !isDisabled && !isSelected && isCurrentMonth
                            ? "text-[#374151] hover:bg-[#E5E7EB]"
                            : ""
                        }
                        ${
                          !isDisabled && !isSelected && !isCurrentMonth
                            ? "text-[#6B7280]"
                            : ""
                        }
                      `}
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
              <h2 className="text-base md:text-lg font-semibold text-[#374151] mb-3">
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
                      className={`
                        py-3 px-4 rounded-xl text-sm font-semibold transition-all min-h-[48px]
                        ${
                          isSelected
                            ? "bg-[#00539B] text-white"
                            : isDisabled
                            ? "bg-[#F9FAFB] text-[#D1D5DB] cursor-not-allowed"
                            : "bg-[#F9FAFB] text-[#6B7280] hover:bg-[#E5E7EB]"
                        }
                      `}
                    >
                      {time}
                      {isFull && <div className="text-xs mt-1">(Full)</div>}
                    </button>
                  );
                })}
              </div>

              {/* Available Seats */}
              {selectedDate && selectedTime && (
                <div className="mt-3 p-3 rounded-xl bg-[#F3F4F6] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wide">
                      Seats availability
                    </p>
                    <p className="text-sm font-semibold text-[#111827]">
                      {seatsInfo.available} of {seatsInfo.total} seats available
                    </p>
                  </div>
                  <div className="ml-3 w-20">
                    <div className="h-2 rounded-full bg-[#E5E7EB] overflow-hidden">
                      <div
                        className="h-full bg-[#10B981]"
                        style={{
                          width: `${
                            seatsInfo.total
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
              <label className="block text-sm font-semibold text-[#6B7280] mb-2">
                Location
              </label>
              <input
                type="text"
                value="Oxy Office"
                readOnly
                className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] text-[#374151] bg-[#F9FAFB]"
              />
            </div>

            {/* Confirm Button */}
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

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}