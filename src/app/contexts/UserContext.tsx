import { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vendor: string;
  isn: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    // Fallback for cases where provider is not available
    return { user: null, setUser: () => {}, clearUser: () => {} };
  }
  return context;
}
