import React, { useState } from 'react';
import { Image, Video, Smile, Send } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { usePostStore } from '@/store/postStore';

export const CreatePost: React.FC = () => {
  const { user } = useAuthStore();
  const { addPost } = usePostStore();
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <div className="bg-white border-4 border-black neo-brutal-shadow mb-6">
      <div className="p-4">
        <div className="flex items-start space-x-3 mb-4">
          <img
            src={user?.avatar}
            alt={user?.displayName}
            className="w-12 h-12 border-3 border-black"
          />
          <form onSubmit={handleSubmit} className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full p-3 border-3 border-black focus:outline-none focus:ring-0 resize-none font-mono"
              rows={3}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="p-2 border-3 border-black bg-white hover:bg-primary transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1"
                >
                  <Image className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 border-3 border-black bg-white hover:bg-primary transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1"
                >
                  <Video className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 border-3 border-black bg-white hover:bg-primary transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                disabled={!content.trim()}
                className="flex items-center space-x-2 px-6 py-2 border-3 border-black bg-primary hover:bg-yellow-400 transition-all neo-brutal-shadow hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                <span className="font-bold">POST</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
