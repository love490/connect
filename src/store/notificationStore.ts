import { create } from 'zustand';

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'share' | 'group';
  user: {
    username: string;
    displayName: string;
    avatar: string;
  };
  content: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: {
      username: 'sarahsmith',
      displayName: 'Sarah Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'liked your post',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    read: false,
  },
  {
    id: '2',
    type: 'follow',
    user: {
      username: 'mikejohnson',
      displayName: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'started following you',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    read: false,
  },
  {
    id: '3',
    type: 'comment',
    user: {
      username: 'emilydavis',
      displayName: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'commented on your post',
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    read: false,
  },
  {
    id: '4',
    type: 'share',
    user: {
      username: 'alexwilson',
      displayName: 'Alex Wilson',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'shared your post',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: '5',
    type: 'group',
    user: {
      username: 'lisabrown',
      displayName: 'Lisa Brown',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'invited you to join "Tech Enthusiasts"',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    read: true,
  },
];

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: mockNotifications,
  unreadCount: mockNotifications.filter((n) => !n.read).length,
  markAsRead: (id: string) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
      unreadCount: state.notifications.filter((n) => !n.read && n.id !== id).length,
    }));
  },
  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    }));
  },
}));
