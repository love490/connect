import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, User, Users, MessageSquare, LogOut } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useNotificationStore } from '@/store/notificationStore';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const { unreadCount } = useNotificationStore();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Search, label: 'Explore' },
    { path: '/groups', icon: Users, label: 'Groups' },
    { path: '/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/notifications', icon: Bell, label: 'Notifications', badge: unreadCount },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary border-3 border-black neo-brutal-shadow-sm flex items-center justify-center">
              <span className="text-xl font-bold">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">CONNECT</span>
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 border-3 border-black transition-all ${
                    isActive
                      ? 'bg-primary neo-brutal-shadow-sm translate-x-1 translate-y-1'
                      : 'bg-white hover:bg-primary hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold px-2 py-1 border-2 border-black">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <button
              onClick={logout}
              className="px-4 py-2 border-3 border-black bg-white hover:bg-red-500 hover:text-white transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
