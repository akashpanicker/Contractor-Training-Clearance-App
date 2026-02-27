import { createContext, useContext, useState, ReactNode } from "react";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vendor: string;
  isnNumber: string;
}

interface UserContextType {
  user: UserData | null;
  users: UserData[];
  setUser: (user: UserData) => void;
  clearUser: () => void;
  loginByEmail: (email: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setCurrentUser] = useState<UserData | null>(null);
  const [users, setUsers] = useState<UserData[]>([]);

  const setUser = (nextUser: UserData) => {
    setUsers((prev) => {
      const currentEmail = user?.email.toLowerCase();
      if (currentEmail) {
        const currentUserIndex = prev.findIndex(
          (item) => item.email.toLowerCase() === currentEmail
        );
        if (currentUserIndex >= 0) {
          const updated = [...prev];
          updated[currentUserIndex] = nextUser;
          return updated;
        }
      }

      const existingIndex = prev.findIndex(
        (item) => item.email.toLowerCase() === nextUser.email.toLowerCase()
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = nextUser;
        return updated;
      }

      return [...prev, nextUser];
    });

    setCurrentUser(nextUser);
  };

  const clearUser = () => {
    setCurrentUser(null);
  };

  const loginByEmail = (email: string): boolean => {
    const matchedUser = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (!matchedUser) {
      return false;
    }

    setCurrentUser(matchedUser);
    return true;
  };

  return (
    <UserContext.Provider value={{ user, users, setUser, clearUser, loginByEmail }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    // Fallback for cases where provider is not available
    return { user: null, users: [], setUser: () => {}, clearUser: () => {}, loginByEmail: () => false };
  }
  return context;
}
