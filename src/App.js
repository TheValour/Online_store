import React, { useState } from 'react'
import Login from './components/login/Login'
import Home from './components/Home/Home';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {!isLogin ?
        <Login setIsLogin={setIsLogin} /> : <Home />
      }
    </div>
  );
}
