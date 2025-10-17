import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LandingPage/landingPage'

function App() {

  return (
      <div className='bg-gray-100 w-[100%] h-[100%] box-border '>
        <Navbar1/>
        <LandingPage/>
      </div>
  )
}

export default App
