import React from "react";
import { useNavigate } from "react-router-dom";
import { storiesData } from "../data/storiesData";
import { posts } from "../data/posts";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto py-6 space-y-6">

      {/* STORIES */}
      <div className="flex gap-4 overflow-x-auto px-2 pb-2 scrollbar-hide">
        {storiesData.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center cursor-pointer min-w-16"
          >
            <div className="h-16 w-16 rounded-full p-0.5 bg-linear-to-tr from-pink-500 to-yellow-400">
              <img
                src={story.image}
                alt={story.username}
                className="h-full w-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs mt-1 truncate w-16 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* POSTS */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow"
        >
          {/* POST HEADER */}
          <div className="flex items-center p-3">
            <img
              src={post.user.avatar}
              alt={post.user.username}
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-3 font-semibold">
              {post.user.username}
            </span>
          </div>

          {/* POST IMAGE */}
          <img
            src={post.image}
            alt="Post"
            className="w-full cursor-pointer"
            onClick={() => navigate(`/post/${post.id}`)}
          />

          {/* POST CAPTION */}
          <div className="p-3 text-sm">
            <span className="font-semibold mr-1">
              {post.user.username}
            </span>
            {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
