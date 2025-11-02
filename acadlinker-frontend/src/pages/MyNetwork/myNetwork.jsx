import React, { useState } from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard';

const MyNetwork = () => {
    const [text, setText] = useState("Catch Up With Friends");

    const handleFriends = async () => {
        setText("Catch Up With Friends");
    }

    const handlePending = async () => {
        setText("Pending Request");
    }

    return (
        <div className='px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
            <div className='py-4 px-10 border-1 border-gray-400 w-full flex justify-between my-5 text-xl bg=white rounded-xl'>
                <div>{text}</div>
                <div className='flex gap-3'>
                    <button onClick={handleFriends} className={`p-1 cursor-pointer border-1 rounded-lg border-gray-300 ${text === "Catch Up With Friends" ? "bg-blue-800 text-white" : ""}`}>Friends</button>
                    <button onClick={handlePending} className={`p-1 cursor-pointer border-1 rounded-lg border-gray-300 ${text === "Pending Request" ? "bg-blue-800 text-white" : ""}`}>Pending Request</button>
                </div>
            </div>
            <div className='flex h-[80vh] w-full gap-7 items-start justify-center'>
                <div className='w-[23%] h-[270px] sm:w-full'>
                    <ProfileCard/>
                    </div>
                </div>
            </div>
    )
}

export default MyNetwork