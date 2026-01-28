import React from 'react'

const Footer = () => {
    return (
        <div className='w-[100%] bg-gray-200 flex justify-center '>
            <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
                <div className="flex gap-0 items-center cursor-pointer">
                <h3 className='text-purple-800 font-bold text-2xl'>Linkedin</h3>
                <img src="/public/logo2.png" alt="LinkedinLogo" className="w-8 h-8 " />
            </div>
            <div className='text-sm'>@Copyright 2025 Linkedin. All rights reserved.</div>
        </div>
       </div>
    )
}

export default Footer
