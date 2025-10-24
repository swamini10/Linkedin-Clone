import React from 'react'
import Card from '../Card/card'

function ProfileCard() {
    return (
        <Card padding={0}>
            <div className="relative h-25">
                <div className="relative w-full h-22 rounded-full">
                    <img src='/public/background1.png' className="rounded-t-md h-full w-full" />
                </div>
                <div className='absolute top-14 left-6 z-10 '>
                    <img src='/public/user1.jpg' className="rounded-full h-16 w-16 border-white cursor-pointer" />
                </div>
            </div>
            <div className='p-5 '>
                <div className='text-xl'>Swamini Bhandare</div>
                <div className='text-sm my-1'>Java Developer</div>
                <div className='text-sm my-1'>Pandharpur, Maharashtra</div>
                <div className='text-sm my-1'>swamini@gmail.com</div>

            </div>
        </Card>
    )
}

export default ProfileCard
