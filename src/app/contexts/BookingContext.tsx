import { createContext, useContext, useState, ReactNode } from "react";

export interface Booking {
  id: string;
  date: string; // e.g., "May 22, 2026"
  time: string; // e.g., "10.00 AM"
  training: string;
  company: string;
  location: string;
  status: "upcoming" | "cancelled" | "rescheduled";
  dateObject: Date; // For easier date manipulation
}

interface TimeSlotAvailability {
  [dateKey: string]: {
    [time: string]: {
      available: number;
      total: number;
    };
  };
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id">) => void;
  updateBooking: (bookingId: string, updates: Partial<Booking>) => void;
  cancelBooking: (id: string) => void;
  getAvailableSeats: (date: Date, time: string) => { available: number; total: number };
  decrementSeats: (date: Date, time: string) => void;
  incrementSeats: (date: Date, time: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  // Initialize seat availability for different dates and times
  const [seatAvailability, setSeatAvailability] = useState<TimeSlotAvailability>({});

  const getDateKey = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const getAvailableSeats = (date: Date, time: string) => {
    const dateKey = getDateKey(date);
    const defaultSeats = { available: 50, total: 50 };
    
    if (!seatAvailability[dateKey]) {
      return defaultSeats;
    }
    
    return seatAvailability[dateKey][time] || defaultSeats;
  };

  const decrementSeats = (date: Date, time: string) => {
    const dateKey = getDateKey(date);
    setSeatAvailability(prev => {
      const current = prev[dateKey]?.[time] || { available: 50, total: 50 };
      return {
        ...prev,
        [dateKey]: {
          ...prev[dateKey],
          [time]: {
            ...current,
            available: Math.max(0, current.available - 1),
          },
        },
      };
    });
  };

  const incrementSeats = (date: Date, time: string) => {
    const dateKey = getDateKey(date);
    setSeatAvailability(prev => {
      const current = prev[dateKey]?.[time] || { available: 50, total: 50 };
      return {
        ...prev,
        [dateKey]: {
          ...prev[dateKey],
          [time]: {
            ...current,
            available: Math.min(current.total, current.available + 1),
          },
        },
      };
    });
  };

  const addBooking = (booking: Omit<Booking, "id">) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(), // Generate unique ID
    };
    setBookings(prev => [...prev, newBooking]);
    decrementSeats(booking.dateObject, booking.time);
  };

  const updateBooking = (bookingId: string, updates: Partial<Booking>) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === bookingId
          ? { ...booking, ...updates }
          : booking
      )
    );
  };

  const cancelBooking = (id: string) => {
    const booking = bookings.find(b => b.id === id);
    if (booking) {
      incrementSeats(booking.dateObject, booking.time);
      setBookings(prev => prev.filter(b => b.id !== id));
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBooking,
        cancelBooking,
        getAvailableSeats,
        decrementSeats,
        incrementSeats,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
