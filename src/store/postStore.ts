import { create } from 'zustand';

export interface Post {
  id: string;
  author: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
  };
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  timestamp: Date;
}

interface PostState {
  posts: Post[];
  addPost: (content: string, media?: Post['media']) => void;
  likePost: (postId: string) => void;
  deletePost: (postId: string) => void;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '2',
      username: 'sarahsmith',
      displayName: 'Sarah Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'Just launched my new project! Check it out and let me know what you think 🚀',
    media: [
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    likes: 234,
    comments: 45,
    shares: 12,
    isLiked: false,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: '2',
    author: {
      id: '3',
      username: 'mikejohnson',
      displayName: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'Beautiful sunset today! Nature never fails to amaze me 🌅',
    media: [
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    likes: 567,
    comments: 89,
    shares: 34,
    isLiked: true,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: '3',
    author: {
      id: '4',
      username: 'emilydavis',
      displayName: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'Working on something exciting! Can\'t wait to share more details soon 💡',
    likes: 123,
    comments: 23,
    shares: 8,
    isLiked: false,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: '4',
    author: {
      id: '5',
      username: 'alexwilson',
      displayName: 'Alex Wilson',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'Coffee and code - the perfect combination ☕💻',
    media: [
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    likes: 445,
    comments: 67,
    shares: 21,
    isLiked: true,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
  },
  {
    id: '5',
    author: {
      id: '6',
      username: 'lisabrown',
      displayName: 'Lisa Brown',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    content: 'Exploring new places and meeting amazing people! Travel is the best education 🌍✈️',
    media: [
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    likes: 789,
    comments: 134,
    shares: 56,
    isLiked: false,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

export const usePostStore = create<PostState>((set) => ({
  posts: mockPosts,
  addPost: (content: string, media?: Post['media']) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: '1',
        username: 'johndoe',
        displayName: 'John Doe',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
      content,
      media,
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      timestamp: new Date(),
    };
    set((state) => ({ posts: [newPost, ...state.posts] }));
  },
  likePost: (postId: string) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      ),
    }));
  },
  deletePost: (postId: string) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    }));
  },
}));
