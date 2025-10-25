import React, { useState } from "react";
import { Avatar, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { messagesData } from "../data/data";

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(messagesData[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, { from: "me", text: newMessage }],
      lastMessage: newMessage,
    };
    setSelectedChat(updatedChat);
    setNewMessage("");
  };

  const filteredChat = messagesData.filter((chat) =>
    chat.user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="h-[90vh] bg-gray-50 flex justify-center py-6 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left sidebar */}
        <div className="lg:col-span-4 border-r border-gray-200 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            <SearchIcon className="text-gray-500" />
          </div>

          {/* search box */}
          <div className="p-3">
            <TextField
              placeholder="Search messages...."
              variant="outlined"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(e) => searchQuery(e.target.value)}
              inputProps={{
                style: { borderRadius: "9999px", backgroundColor: "#f9fafb" },
              }}
            />
          </div>

          {/* chat list */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {filteredChat.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`flex items-center space-x-3 p-4 cursor-pointer hover:bg-pink-50 transition-all ${
                  selectedChat.id === chat.id ? "bg-pink-100" : ""
                }`}
              >
                <Avatar src={chat.user.avatar} alt={chat.user.username} />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {chat.user.fullName}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right panel */}
        <div className="lg:col-span-8 flex flex-col">
          {selectedChat ? (
            <>
              {/* chat header  */}
              <div className="flex items-center space-x-3 p-4 border-b bg-gray-50">
                <Avatar
                  src={selectedChat.user.avatar}
                  alt={selectedChat.user.username}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {selectedChat.user.fullName}
                  </p>
                  <p className="text-xs text-gray-500">
                    @{selectedChat.user.username}
                  </p>
                </div>
              </div>

              {/* chat messages  */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                {selectedChat.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.from === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                        msg.from === "me"
                          ? "bg-linear-to-r from-pink-500 to-orange-400 text-white rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* message input */}
              <div className="border-t bg-gray-50 flex items-center p-3">
                <TextField
                  placeholder="Type a message..."
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={newMessage}
                  onChange={(e) => e.key === "Enter" && handleSend()}
                  InputProps={{
                    style: { borderRadius: "9999px", backgroundColor: "#fff" },
                  }}
                />
                <IconButton color="primary" onClick={handleSend}>
                  <SendIcon className="text-pink-500" />
                </IconButton>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
