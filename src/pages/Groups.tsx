import React from 'react';
import { Users, Plus, TrendingUp } from 'lucide-react';

export const Groups: React.FC = () => {
  const myGroups = [
    {
      name: 'Tech Enthusiasts',
      members: '12.5K',
      posts: '234',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discuss the latest in technology',
    },
    {
      name: 'Design Community',
      members: '8.3K',
      posts: '189',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Share and critique design work',
    },
    {
      name: 'Startup Founders',
      members: '6.7K',
      posts: '156',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Connect with fellow entrepreneurs',
    },
  ];

  const suggestedGroups = [
    {
      name: 'Photography Club',
      members: '15.2K',
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Share your best shots',
    },
    {
      name: 'Fitness & Health',
      members: '11.8K',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Stay fit and healthy together',
    },
    {
      name: 'Book Lovers',
      members: '9.4K',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discuss your favorite reads',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border-4 border-black neo-brutal-shadow p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8" />
            <h1 className="text-3xl font-bold">GROUPS</h1>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow hover:translate-x-1 hover:translate-y-1">
            <Plus className="w-5 h-5" />
            <span>CREATE GROUP</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">MY GROUPS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black neo-brutal-shadow cursor-pointer transition-all hover:translate-x-2 hover:translate-y-2"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-48 object-cover border-b-4 border-black"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="flex items-center justify-between pt-4 border-t-3 border-black">
                  <div>
                    <p className="text-sm text-gray-600">Members</p>
                    <p className="font-bold">{group.members}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Posts</p>
                    <p className="font-bold">{group.posts}</p>
                  </div>
                  <button className="px-4 py-2 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-6 h-6" />
          <h2 className="text-2xl font-bold">SUGGESTED GROUPS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black neo-brutal-shadow cursor-pointer transition-all hover:translate-x-2 hover:translate-y-2"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-48 object-cover border-b-4 border-black"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="flex items-center justify-between pt-4 border-t-3 border-black">
                  <div>
                    <p className="text-sm text-gray-600">Members</p>
                    <p className="font-bold">{group.members}</p>
                  </div>
                  <button className="px-4 py-2 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
                    JOIN
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
