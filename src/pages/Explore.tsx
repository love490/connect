import React, { useState } from 'react';
import { Search, TrendingUp, Hash } from 'lucide-react';
import { PostCard } from '@/components/Post/PostCard';
import { usePostStore } from '@/store/postStore';

export const Explore: React.FC = () => {
  const { posts } = usePostStore();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Technology', count: '45.2K', color: 'bg-primary' },
    { name: 'Design', count: '32.8K', color: 'bg-white' },
    { name: 'Business', count: '28.5K', color: 'bg-primary' },
    { name: 'Entertainment', count: '56.3K', color: 'bg-white' },
    { name: 'Sports', count: '41.7K', color: 'bg-primary' },
    { name: 'Science', count: '23.9K', color: 'bg-white' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="bg-white border-4 border-black neo-brutal-shadow p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Search className="w-8 h-8" />
            <h1 className="text-3xl font-bold">EXPLORE</h1>
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts, users, groups..."
              className="w-full p-4 border-3 border-black focus:outline-none focus:ring-0 font-mono text-lg"
            />
            <button className="absolute right-2 top-2 px-6 py-2 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-white border-4 border-black neo-brutal-shadow p-6 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-2xl font-bold">TRENDING NOW</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`p-4 border-3 border-black ${category.color} cursor-pointer transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Hash className="w-5 h-5" />
                    <p className="font-bold text-lg">{category.name}</p>
                  </div>
                  <p className="text-sm text-gray-600">{category.count} posts</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">POPULAR POSTS</h2>
            {posts.slice(0, 5).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white border-4 border-black neo-brutal-shadow p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">TOP CREATORS</h2>
            <div className="space-y-3">
              {[
                {
                  name: 'Tech Guru',
                  username: 'techguru',
                  avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
                  followers: '125K',
                },
                {
                  name: 'Design Pro',
                  username: 'designpro',
                  avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
                  followers: '98K',
                },
                {
                  name: 'Code Wizard',
                  username: 'codewizard',
                  avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
                  followers: '87K',
                },
              ].map((creator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-3 border-black"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-12 h-12 border-3 border-black"
                    />
                    <div>
                      <p className="font-bold">{creator.name}</p>
                      <p className="text-sm text-gray-600">@{creator.username}</p>
                      <p className="text-xs text-gray-500">{creator.followers} followers</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
                    FOLLOW
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
