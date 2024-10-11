import { StateCreator } from 'zustand';

// Define the authentication state and actions
export interface AuthResponse {
  _id: string;
  token: string;
  firstName: string;
  gender: string;
  lastName: string;
  userEmail: string;
  profilePic: string;
}

export type User = Omit<AuthResponse, '_id' | 'token'>;

export interface AuthState {
  user: Partial<AuthResponse> | null;
  isProfileDraft: boolean;
  setProfileDraft: (draft: boolean) => void;
  setUser: (user: Partial<AuthResponse>) => void;
  clearUser: () => void;
}

export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  user: null,
  isProfileDraft: false,
  setProfileDraft: (draft: boolean) =>
    set((state) => ({ ...state, isProfileDraft: draft })),
  setUser: (user: Partial<AuthResponse>) =>
    set((state) => ({ ...state, user: { ...state.user, ...user } })),
  clearUser: () => set({ user: null }),
});
