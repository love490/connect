import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { Settings, MapPin, Calendar, Link as LinkIcon } from 'lucide-react';
import { PostCard } from '@/components/Post/PostCard';
import { usePostStore } from '@/store/postStore';

export const Profile: React.FC = () => {
  const { user } = useAuthStore();
  const { posts } = usePostStore();
  const userPosts = posts.filter((post) => post.author.id === user?.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white border-4 border-black neo-brutal-shadow mb-6">
        <div className="h-48 bg-primary border-b-4 border-black"></div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <img
                src={user?.avatar}
                alt={user?.displayName}
                className="w-32 h-32 border-4 border-black -mt-20 bg-white"
              />
              <div className="mt-4">
                <h1 className="text-3xl font-bold mb-1">{user?.displayName}</h1>
                <p className="text-lg text-gray-600 mb-3">@{user?.username}</p>
                <p className="text-base mb-4">{user?.bio}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined March 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="w-4 h-4" />
                    <a href="#" className="hover:underline">example.com</a>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 border-3 border-black bg-white hover:bg-primary transition-all neo-brutal-shadow hover:translate-x-1 hover:translate-y-1">
              <Settings className="w-5 h-5" />
              <span className="font-bold">EDIT</span>
            </button>
          </div>

          <div className="flex space-x-8 pt-4 border-t-3 border-black">
            <div>
              <p className="text-2xl font-bold">{user?.followers.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{user?.following.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{userPosts.length}</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-4 border-black bg-white mb-6">
        <div className="flex border-b-3 border-black">
          <button className="flex-1 py-4 font-bold bg-primary">POSTS</button>
          <button className="flex-1 py-4 font-bold border-l-3 border-black hover:bg-gray-100">MEDIA</button>
          <button className="flex-1 py-4 font-bold border-l-3 border-black hover:bg-gray-100">LIKES</button>
        </div>
      </div>

      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="bg-white border-4 border-black neo-brutal-shadow p-12 text-center">
            <p className="text-xl font-bold mb-2">No posts yet</p>
            <p className="text-gray-600">Start sharing your thoughts with the world!</p>
          </div>
        )}
      </div>
    </div>
  );
};
