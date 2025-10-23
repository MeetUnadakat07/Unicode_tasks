import React, { useState } from 'react';

const SignUp = ({toggleForm}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailValid, setEmailValid] = useState(null)
    const [passwordValid, setPasswordValid] = useState(null)
    const [usernameValid, setUsernameValid] = useState(null)
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(null)

    // Regex expressions 
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*/?.-_+=]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value)
        setEmailValid(emailRegex.test(value))
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)
        setPasswordValid(passwordRegex.test(value))
    }

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value)
        setUsernameValid(usernameRegex.test(value))
    }

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value)
        setConfirmPasswordValid(value === password && value.length > 0)
    }

    return (
    <>
        <div className=''>
            <div className="h-screen w-screen bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center">
                <div className='bg-white w-xl h-auto m-auto rounded-3xl p-8'>
                    <h1 className='font-bold text-2xl text-center mb-8'>Create an account ✨</h1>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <input 
                            type="text" 
                            placeholder='Full Name' 
                            onChange={handleUsernameChange}
                            className={`w-84 h-8 border rounded-2xl p-4 my-3 ${usernameValid === null ? "" : usernameValid ? "border-green-500" : "border-red-500"}`}
                        />
                        <input 
                            type="text" 
                            placeholder='Email address' 
                            onChange={handleEmailChange}
                            className= {`w-84 h-8 border rounded-2xl p-4 my-3 ${emailValid === null ? "" : emailValid ? "border-green-700" : "border-red-700"}`}
                        />
                        <input 
                            type = "password"
                            placeholder='Password' 
                            onChange={handlePasswordChange}
                            className= {`w-84 h-8 border rounded-2xl p-4 my-3 ${passwordValid === null ? "" : passwordValid ? "border-green-700" : "border-red-700"}`} 
                        />
                        <input 
                            type="password" 
                            placeholder='Confirm password' 
                            onChange={handleConfirmPasswordChange}
                            className= {`w-84 h-8 border rounded-2xl p-4 my-3 ${confirmPasswordValid === null ? "" : confirmPasswordValid ? "border-green-700" : "border-red-700"}`}
                        />
                        <button className='bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl'>
                            Sign Up
                        </button>
                        <p>
                        Already have an account?{" "}
                        <span 
                            onClick={toggleForm} 
                            className="text-purple-700 font-bold cursor-pointer"
                        >
                            Login
                        </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp
