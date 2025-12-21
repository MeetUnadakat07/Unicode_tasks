import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-[calc(100vh-64px)]">
      {/* BACK BUTTON */}
      <div className="px-6 pt-3">
        <button
          onClick={() => navigate(-1)}
          className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center"
        >
          ←
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <div className="bg-white w-full max-w-5xl h-[82vh] rounded-lg shadow flex overflow-hidden">

          {/* IMAGE */}
          <div className="w-3/5 bg-black flex items-center justify-center">
            <img
              src={post.image}
              className="w-full h-full object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="w-2/5 flex flex-col">
            <div className="flex items-center px-4 py-3 border-b">
              <img
                src={post.user.avatar}
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-3 font-semibold">
                {post.user.username}
              </span>
            </div>

            <div className="px-4 py-3 border-b text-sm">
              <span className="font-semibold mr-1">
                {post.user.username}
              </span>
              {post.caption}
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
              {post.comments.map((c, i) => (
                <p key={i} className="text-sm">
                  <span className="font-semibold mr-1">
                    {c.username}
                  </span>
                  {c.text}
                </p>
              ))}
            </div>

            <div className="px-4 py-3 border-t text-xs text-gray-500">
              {post.createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
