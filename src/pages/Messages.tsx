import React, { useState } from 'react';
import { MessageSquare, Send, Search } from 'lucide-react';

export const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 0,
      user: {
        name: 'Sarah Smith',
        username: 'sarahsmith',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
      lastMessage: 'That sounds great! Let\'s do it.',
      timestamp: '2m ago',
      unread: 2,
    },
    {
      id: 1,
      user: {
        name: 'Mike Johnson',
        username: 'mikejohnson',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
      lastMessage: 'Thanks for the help!',
      timestamp: '1h ago',
      unread: 0,
    },
    {
      id: 2,
      user: {
        name: 'Emily Davis',
        username: 'emilydavis',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
      lastMessage: 'See you tomorrow!',
      timestamp: '3h ago',
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'other',
      text: 'Hey! How are you doing?',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'I\'m doing great! Just working on a new project.',
      timestamp: '10:32 AM',
    },
    {
      id: 3,
      sender: 'other',
      text: 'That sounds exciting! What kind of project?',
      timestamp: '10:33 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: 'A social networking app with a unique design approach.',
      timestamp: '10:35 AM',
    },
    {
      id: 5,
      sender: 'other',
      text: 'That sounds great! Let\'s do it.',
      timestamp: '10:36 AM',
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border-4 border-black neo-brutal-shadow">
        <div className="flex items-center space-x-3 p-6 border-b-4 border-black">
          <MessageSquare className="w-8 h-8" />
          <h1 className="text-3xl font-bold">MESSAGES</h1>
        </div>

        <div className="grid grid-cols-3 h-[calc(100vh-250px)]">
          <div className="border-r-4 border-black">
            <div className="p-4 border-b-3 border-black">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full p-3 border-3 border-black focus:outline-none focus:ring-0 font-mono"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="overflow-y-auto h-full">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b-3 border-black cursor-pointer transition-all ${
                    selectedChat === conv.id
                      ? 'bg-primary'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={conv.user.avatar}
                      alt={conv.user.name}
                      className="w-12 h-12 border-3 border-black"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold truncate">{conv.user.name}</p>
                        <span className="text-xs text-gray-600">{conv.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="px-2 py-1 bg-black text-white text-xs font-bold border-2 border-black">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            {selectedChat !== null && (
              <>
                <div className="p-4 border-b-4 border-black">
                  <div className="flex items-center space-x-3">
                    <img
                      src={conversations[selectedChat].user.avatar}
                      alt={conversations[selectedChat].user.name}
                      className="w-12 h-12 border-3 border-black"
                    />
                    <div>
                      <p className="font-bold text-lg">{conversations[selectedChat].user.name}</p>
                      <p className="text-sm text-gray-600">@{conversations[selectedChat].user.username}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md p-4 border-3 border-black ${
                          message.sender === 'me'
                            ? 'bg-primary neo-brutal-shadow-sm'
                            : 'bg-white neo-brutal-shadow-sm'
                        }`}
                      >
                        <p className="mb-1">{message.text}</p>
                        <p className="text-xs text-gray-600 text-right">{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t-4 border-black">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 p-3 border-3 border-black focus:outline-none focus:ring-0 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 border-3 border-black bg-primary hover:bg-yellow-400 font-bold transition-all neo-brutal-shadow hover:translate-x-1 hover:translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
