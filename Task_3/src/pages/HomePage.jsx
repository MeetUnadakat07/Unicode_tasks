import React from "react";
import Stories from "../components/Stories";
import PostCard from "../components/PostCard";
import SuggestedUsers from "../components/SuggestedUsers";
import { storiesData } from "../data/storiesData";
import { postsData } from "../data/postsData";
import { suggestedUsersData } from "../data/suggestedUsersData";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center pt-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
        <div className="lg:col-span-8">
            {/* Stories  */}
          <div className="space-y-6">
            <Stories stories={storiesData} />
            {/* Posts  */}
            <div className="space-y-6">
              {postsData.map((item) => (
                <PostCard key={item.id} id={item.id} user={item.user} post={item.post} />
              ))}
            </div>
          </div>
        </div>

        {/* Suggested users  */}
        <div className="hidden lg:block lg:col-span-4">
          <SuggestedUsers users={suggestedUsersData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
