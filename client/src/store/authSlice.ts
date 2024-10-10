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
  user: AuthResponse | null;
  setUser: (user: AuthResponse) => void;
  clearUser: () => void;
}

/** ***********  ✨ Codeium Command ⭐  ************ */
/** ****  d55e8270-cc65-4192-86b5-4bab10f9b32c  ****** */ export const createAuthSlice: StateCreator<
  AuthState
> = (set) => ({
  user: null,
  setUser: (user: AuthResponse) => set({ user }),
  clearUser: () => set({ user: null }),
});
