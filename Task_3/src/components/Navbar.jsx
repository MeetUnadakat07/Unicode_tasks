import React from "react";
import { Link, useLocation } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: <HomeIcon />, label: "Home" },
    { path: "/discover", icon: <SearchIcon />, label: "Discover" },
    { path: "/create", icon: <AddBoxIcon />, label: "Create" },
    { path: "/notifications", icon: <FavoriteIcon />, label: "Notifications" },
    { path: "/messages", icon: <ChatOutlinedIcon />, label: "Messages" },
  ];

  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-8 shadow-sm">
      <Link
        to="/home" 
        className="flex items-center space-x-2 cursor-pointer"
      >
        <InstagramIcon fontSize="large" className="text-pink-500" />
        <h1 className="text-xl font-semibold bg-linear-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
          InstaClone
        </h1>
      </Link>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search users, posts..."
          className="w-full rounded-full bg-gray-100 py-2 pl-4 pr-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="flex items-center space-x-6">
        {navItems.map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            title={label}
            className={`transition-transform hover:scale-110 ${
              location.pathname === path
                ? "text-pink-600"
                : "text-gray-600 hover:text-pink-500"
            }`}
          >
            {icon}
          </Link>
        ))}

        <Link to="/profile">
          <img
            src="https://i.pinimg.com/736x/cd/e7/73/cde773e113620c91851ff948f76ad7dd.jpg"
            alt="User Avatar"
            className="h-8 w-8 rounded-full border-2 border-transparent hover:border-pink-500 transition-all"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
