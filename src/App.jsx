import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import './navbar.css';
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
