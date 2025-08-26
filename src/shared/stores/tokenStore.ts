import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TokenState {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      accessToken: "",
      setAccessToken: (accessToken) => set({ accessToken }),
      refreshToken: "",
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
    }),
    {
      name: "token-storage",
    }
  )
);
