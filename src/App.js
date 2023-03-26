import './App.css';
import React, { useState } from 'react';
import Login from './component/Login'
import Router from './component/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
    {
   !isLogin?
   <Login setIsLogin={setIsLogin}/>
    :
    <Router />
  }
    </BrowserRouter>
    </>

  );
}

export default App;
