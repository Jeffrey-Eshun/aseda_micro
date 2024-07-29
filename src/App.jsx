import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import './navbar.css';
import './index.css'
import './about.css'
import './contact.css'
import'./signup.css'
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
