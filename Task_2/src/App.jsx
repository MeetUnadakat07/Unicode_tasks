import { useState } from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/SignUp';

function App() {
  const [isLogin, setisLogin] = useState(false);

  const toggleForm = () => setisLogin(!isLogin)

  return (
    <>
      {isLogin ? (
        <Login toggleForm={() => setisLogin(false)} />
      ) : (
        <SignUp toggleForm={() => setisLogin(true)} />
      )}
    </>
  );
}

export default App;
