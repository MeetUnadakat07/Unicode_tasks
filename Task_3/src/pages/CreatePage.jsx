import React, { useState } from "react";

const CreatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-lg p-8 border border-gray-200">
        {/* Title  */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create a new post
        </h1>

        {/* Image upload  */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="w-64 h-64 border-2 border-dashed border-pink-400 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Image Preview
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-2 text-sm text-gray-600"
          />
        </div>

        {/* Caption fiels  */}
        <div className="mb-6">
          <textarea
            placeholder="Write a caption.."
            className="w-full border rounded-xl p-3 text-gray-700 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            rows={3}
          />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-gray-700">Tag people</span>
            <button className="text-pink-500 hover:text-pink-600 text-sm font-semibold">
              Add
            </button>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-gray-700">Add location</span>
            <button className="text-pink-500 hover:text-pink-600 text-sm font-semibold">
              Add
            </button>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-gray-700">Advanced settings</span>
            <button className="text-pink-500 hover:text-pink-600 text-sm font-semibold">
              View
            </button>
          </div>
        </div>

        {/* Submit button  */}
        <button className="w-full py-3 rounded-3xl bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-semibold hover:scale-105 transition-all">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
