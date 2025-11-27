import React from 'react';
import { CreatePost } from '@/components/Post/CreatePost';
import { PostCard } from '@/components/Post/PostCard';
import { usePostStore } from '@/store/postStore';
import { TrendingUp, Users } from 'lucide-react';

export const Home: React.FC = () => {
  const { posts } = usePostStore();

  const trendingTopics = [
    { tag: '#TechNews', posts: '12.5K' },
    { tag: '#WebDev', posts: '8.3K' },
    { tag: '#Design', posts: '6.7K' },
    { tag: '#AI', posts: '15.2K' },
    { tag: '#Startup', posts: '4.9K' },
  ];

  const suggestedUsers = [
    {
      username: 'techguru',
      displayName: 'Tech Guru',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '45.2K',
    },
    {
      username: 'designpro',
      displayName: 'Design Pro',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '32.8K',
    },
    {
      username: 'codewizard',
      displayName: 'Code Wizard',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '28.5K',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CreatePost />
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-4 border-black neo-brutal-shadow p-4">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-xl font-bold">TRENDING</h2>
            </div>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="p-3 border-3 border-black hover:bg-primary transition-all cursor-pointer"
                >
                  <p className="font-bold text-lg">{topic.tag}</p>
                  <p className="text-sm text-gray-600">{topic.posts} posts</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-4 border-black neo-brutal-shadow p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-6 h-6" />
              <h2 className="text-xl font-bold">SUGGESTED</h2>
            </div>
            <div className="space-y-3">
              {suggestedUsers.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-3 border-black"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.displayName}
                      className="w-10 h-10 border-3 border-black"
                    />
                    <div>
                      <p className="font-bold">{user.displayName}</p>
                      <p className="text-sm text-gray-600">@{user.username}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border-3 border-black bg-primary hover:bg-yellow-400 transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 font-bold text-sm">
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
