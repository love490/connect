import React from 'react';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';
import { Post } from '@/store/postStore';
import { usePostStore } from '@/store/postStore';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { likePost } = usePostStore();

  return (
    <div className="bg-white border-4 border-black neo-brutal-shadow mb-6">
      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.displayName}
              className="w-12 h-12 border-3 border-black"
            />
            <div>
              <h3 className="font-bold text-lg">{post.author.displayName}</h3>
              <p className="text-sm text-gray-600">@{post.author.username}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {formatDistanceToNow(post.timestamp, { addSuffix: true })}
            </span>
            <button className="p-2 hover:bg-gray-100 border-2 border-black">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-base mb-4 leading-relaxed">{post.content}</p>

        {post.media && post.media.length > 0 && (
          <div className="mb-4">
            {post.media.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt="Post media"
                className="w-full border-3 border-black"
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t-3 border-black">
          <button
            onClick={() => likePost(post.id)}
            className={`flex items-center space-x-2 px-4 py-2 border-3 border-black transition-all ${
              post.isLiked
                ? 'bg-primary neo-brutal-shadow-sm translate-x-1 translate-y-1'
                : 'bg-white hover:bg-primary hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1'
            }`}
          >
            <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
            <span className="font-bold">{post.likes}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 border-3 border-black bg-white hover:bg-primary transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold">{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 border-3 border-black bg-white hover:bg-primary transition-all hover:neo-brutal-shadow-sm hover:translate-x-1 hover:translate-y-1">
            <Share2 className="w-5 h-5" />
            <span className="font-bold">{post.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
