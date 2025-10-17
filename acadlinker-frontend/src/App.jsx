import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-200 text-center p-4 text-2xl font-bold'>
        Welcome to AcadLinker!
      </div>
    </>
  )
}

export default App
