import { create } from "zustand";

interface UserState {
  user?: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    phone?: string;
    emailVeridied?: boolean;
  };
  isAuthenticated: boolean;
  login: (user: UserState["user"]) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {},
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: {}, isAuthenticated: false }),
}));

export default useUserStore;
