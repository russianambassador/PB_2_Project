import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import Profile from './pages/profile/Profile';
import Signup from './pages/SignupPage/Signup';

const Router = () => {
   
    let r = useRoutes([
        {
            element: <AuthLayout/>,
            children: [
                { path:"/login", element: <Login/>},
                { path:"/signup", element: <Signup/>}
            ]
        },
        {
            element: <MainLayout/>,
            children: [
                { path:"/", element: <Home/>},
                { path:"/mygarden", element: <Home/>},
                { path:"/campaigns", element: <Home/>},
                { path:"/settings", element: <Home/>},
                { path:"/profile", element: <Profile/>}
                
            ]
        }
    ])
  return r
}

export default Router