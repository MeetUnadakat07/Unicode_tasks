import React from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Submitted', { email, password });
    };
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
                            className='w-84 h-8 border rounded-2xl p-4 my-3' 
                        />
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
                        <input 
                            type="password" 
                            placeholder='Confirm password' 
                            className='w-84 h-8 border rounded-2xl p-4 my-3' 
                        />
                        <button className='bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl'>
                            Sign Up
                        </button>
                        <p>Already have an account? <a href="" className='text-purple-700 font-bold'>Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp
