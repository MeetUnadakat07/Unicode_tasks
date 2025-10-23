import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*/?.-_+=]).{8,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 chars, include upper, lower, number & special char"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (emailError || passwordError || !email || !password) return;
    navigate("/home");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white w-xl h-auto max-h-96 m-auto rounded-3xl p-8">
        <h1 className="font-bold text-2xl text-center mb-8">Welcome Back 👋</h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-84">
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className="w-full h-8 border rounded-2xl p-4 my-2"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="w-84">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full h-8 border rounded-2xl p-4 my-2"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-700 font-bold cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
