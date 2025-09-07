import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/authTypes";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => {
        set({ user: null });
        localStorage.removeItem("user-storage");
      },
    }),
    {
      name: "user-storage",
    }
  )
);
