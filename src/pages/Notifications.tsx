import React from 'react';
import { useNotificationStore } from '@/store/notificationStore';
import { Heart, MessageCircle, UserPlus, Share2, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export const Notifications: React.FC = () => {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-6 h-6" />;
      case 'comment':
        return <MessageCircle className="w-6 h-6" />;
      case 'follow':
        return <UserPlus className="w-6 h-6" />;
      case 'share':
        return <Share2 className="w-6 h-6" />;
      case 'group':
        return <Users className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white border-4 border-black neo-brutal-shadow mb-6 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">NOTIFICATIONS</h1>
          <button
            onClick={markAllAsRead}
            className="px-6 py-2 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1"
          >
            MARK ALL READ
          </button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`flex items-start space-x-4 p-4 border-3 border-black cursor-pointer transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 ${
                !notification.read ? 'bg-primary' : 'bg-white'
              }`}
            >
              <img
                src={notification.user.avatar}
                alt={notification.user.displayName}
                className="w-12 h-12 border-3 border-black"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">
                      {notification.user.displayName}{' '}
                      <span className="font-normal">{notification.content}</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                    </p>
                  </div>
                  <div className="p-2 border-2 border-black bg-white">
                    {getIcon(notification.type)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
