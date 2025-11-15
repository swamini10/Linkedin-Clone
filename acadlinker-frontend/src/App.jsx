import { useState } from 'react'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LandingPage/landingPage'
import Footer from './Footer/footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/signUp'
import Login from './pages/Login/login'
import Navbar2 from './components/NavbarV2/navbar2'
import Feeds from './pages/Feeds/feeds'
import MyNetwork from './pages/MyNetwork/myNetwork'
import Resume from './pages/Resume/resume'
import Messages from './pages/Messages/messages'


function App() {
  //create variable to hold login state
  const isLoggedIn = true;


  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border '>
      {isLoggedIn ? <Navbar2 /> : <Navbar1 />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds' element={<Feeds />} />
        <Route path='/mynetwork' element={<MyNetwork />} />
        <Route path='/resume' element={<Resume />} />
       <Route path='/messages' element={<Messages />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
