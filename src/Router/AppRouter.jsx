import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/HomePage';
import About from '../Pages/AboutPage';
import Contact from '../Pages/Contact';
import Join from '../Pages/Join';
import Signup from "../Pages/Signup"
import Login from '../Pages/Login';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
         {
            path: '/',
            element: <Home/>,
            index: true,
         },
         
         {
            path: '/about',
            element: <About />,
         },
         
         {
            path: '/contact',
            element: <Contact />,
         },
         
         {
            path: '/join',
            element: <Join />,
         },
         {
            path: 'login',
            element: <Login />,
         },

         {
            path: 'signup',
            element: <Signup />,
         },
         
        ],
    },
]);

export default AppRouter;