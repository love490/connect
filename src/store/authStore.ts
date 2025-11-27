import { create } from 'zustand';

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  isFollowing?: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email: string, password: string) => {
    const mockUser: User = {
      id: '1',
      username: 'johndoe',
      displayName: 'John Doe',
      email: email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Digital creator | Tech enthusiast | Coffee lover ☕',
      followers: 1234,
      following: 567,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  signup: (username: string, email: string, password: string) => {
    const mockUser: User = {
      id: '1',
      username: username,
      displayName: username,
      email: email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'New to CONNECT!',
      followers: 0,
      following: 0,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
