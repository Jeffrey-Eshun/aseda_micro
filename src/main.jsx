import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './Router/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
)
