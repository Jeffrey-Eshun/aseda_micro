import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/HomePage';
import About from '../Pages/AboutPage';
import Contact from '../Pages/Contact';
import Join from '../Pages/Join';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
         {
            path: '/',
            element: <HomePage />,
            index: true,
         },
         
         {
            path: '/about',
            element: <AboutPage />,
         },
         
         {
            path: '/contact',
            element: <Contact />,
         },
         
         {
            path: '/join',
            element: <Join />,
         },
         
        ],
    },
]);

export default AppRouter;