import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*/?.-_+=]).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!usernameRegex.test(value)) {
      setUsernameError("Username must be 3-15 characters (letters/numbers/_)");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be 8+ chars, include upper, lower, number & symbol"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      emailError ||
      usernameError ||
      passwordError ||
      confirmPasswordError ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    )
      return;

    navigate("/home");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white w-xl h-auto m-auto rounded-3xl p-8">
        <h1 className="font-bold text-2xl text-center mb-8">
          Create an account
        </h1>

        <form
          onSubmit={handleSignup}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-84">
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full h-8 border rounded-2xl p-4 my-2"
            />
            {usernameError && (
              <p className="text-red-500 text-sm mt-1">{usernameError}</p>
            )}
          </div>

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

          <div className="w-84">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full h-8 border rounded-2xl p-4 my-2"
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                {confirmPasswordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-700 font-bold cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
