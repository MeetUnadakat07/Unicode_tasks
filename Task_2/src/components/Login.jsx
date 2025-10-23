import React, { useState } from 'react'
import "../App.css";

const Login = ({toggleForm}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const [emailValid, setEmailValid] = useState(null)
    const [passwordValid, setPasswordValid] = useState(null)

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*/?.-_+=]).{8,}$/;

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

    return (
    <>
        <div className=''>
            <div className="h-screen w-screen bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center">
                <div className='bg-white w-xl h-auto max-h-96 m-auto rounded-3xl p-8'>
                    <h1 className='font-bold text-2xl text-center mb-8'>Welcome Back 👋</h1>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <input 
                            type="text" 
                            placeholder='Email address' 
                            onChange={handleEmailChange}
                            className={`w-84 h-8 border rounded-2xl p-4 my-3 ${emailValid === null ? "" : emailValid ? "border-green-500" : "border-red-500"}`}
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            onChange={handlePasswordChange}
                            className= {`w-84 h-8 border rounded-2xl p-4 my-3 ${passwordValid === null ? "" : passwordValid ? "border-green-700" : "border-red-700"}`} 
                        />
                        <button className='bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl'>
                            Login
                        </button>
                        <div className='flex gap-8'>
                            <img src="https://cdn-icons-png.freepik.com/512/720/720255.png" alt="google image" className='w-12' />
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/042/127/218/small_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png" alt="facebook image" className='w-12' />
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="facebook image" className='w-12' />
                        </div>
                        <p>Don't have an account? <span onClick={toggleForm} className='text-purple-700 font-bold cursor-pointer'>Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
