import React, { useState } from "react";
import { Avatar, Chip } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

import { discoverCategories } from "../data/discoverCategories";
import { discoverUsersData } from "../data/discoverUsersData";
import { posts } from "../data/posts";

const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Trending = top liked posts
  const trendingPosts = posts
    .slice()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 9);

  const filteredCreators =
    selectedCategory === "All"
      ? discoverUsersData
      : discoverUsersData.filter(
          (user) => user.category === selectedCategory
        );

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "k";
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl space-y-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Discover
          </h1>
          <p className="text-gray-500 mt-2 sm:mt-0">
            Explore trending posts and popular creators
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3">
          {discoverCategories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            />
          ))}
        </div>

        {/* TRENDING POSTS */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Trending posts
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {trendingPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/post/${post.id}`)}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={post.image}
                  alt="Trending post"
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center space-x-6 text-white">
                  <div className="flex items-center space-x-1">
                    <FavoriteBorderIcon fontSize="small" />
                    <span>{formatNumber(post.likes)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CREATORS */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Creators you may like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCreators.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-all"
              >
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  sx={{ width: 72, height: 72 }}
                />

                <div className="mt-3">
                  <p className="font-semibold flex items-center justify-center gap-1 text-gray-800">
                    {user.fullName}
                    {user.isVerified && (
                      <VerifiedIcon fontSize="small" className="text-blue-500" />
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    @{user.username}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatNumber(user.followers)} followers
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-full">
                    {user.category}
                  </span>
                </div>

                <button className="mt-4 px-5 py-2 rounded-full text-sm font-semibold bg-linear-to-r from-pink-500 to-orange-400 text-white hover:scale-105 transition-transform">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiscoverPage;
