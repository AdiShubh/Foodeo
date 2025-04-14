import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isSignedIn: false,
  isLoaded: false,
  setAuth: (user, isSignedIn, isLoaded) =>
    set({ user, isSignedIn, isLoaded }),
  resetAuth: () =>
    set({ user: null, isSignedIn: false, isLoaded: false }),
}));
