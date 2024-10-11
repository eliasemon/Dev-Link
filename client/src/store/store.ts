import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createAuthSlice, AuthState } from './authSlice';
import { createLinksSlice, LinksState } from './LinkSlice';

// Define the root store type which can include multiple slices
type StoreState = AuthState & LinksState; // If you add more slices, combine types here

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createLinksSlice(...a),
    }),
    {
      name: 'store-storage', // Key to persist the store in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    },
  ),
);
