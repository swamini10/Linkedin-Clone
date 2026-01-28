import React from "react"

import { Link } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
            <Link to="/" className="flex justify-between">
                <div className="flex gap-0 items-center cursor-pointer">
                    {<h1 className="text-purple-800 font-bold text-3xl">LINKEDIN</h1>}
                    <img src="/public/logo2.png" alt="LinkedinLogo" className="w-11 h-10 " />
                </div>
            </Link>
            <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
                <Link to="/signup" className="md:px-4 md:py-2 box-border text-black rounded-3xl text-x1 hover:bg-gray-200 cursor-pointer">Join now</Link>
                <Link to="/login" className="px-4 py-2 box-border border-1 text-purple-800 border-purple-800 rounded-3xl text-x1 hover:bg-purple-200 cursor-pointer">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar1
