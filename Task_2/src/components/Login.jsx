import React, { useState } from 'react'
import "../App.css";

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }

    const handlePassword = (e) => {
        setpassword(e.target.value)
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
                            className='w-84 h-8 border rounded-2xl p-4 my-3' 
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='w-84 h-8 border rounded-2xl p-4 my-3' 
                        />
                        <button className='bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl'>
                            Login
                        </button>
                        <div className='flex gap-8'>
                            <img src="https://cdn-icons-png.freepik.com/512/720/720255.png" alt="google image" className='w-12' />
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/042/127/218/small_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png" alt="facebook image" className='w-12' />
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="facebook image" className='w-12' />
                        </div>
                        <p>Don't have an account? <a href="" className='text-purple-700 font-bold'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
