import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
const AddModel = () => {
    return (
        <div className=''>
            <div className='flex gap-4 item-center'>
                <div className='relative'>
                    <img src="/public/user1.jpg" className='w-15 h-13 rounded-full' />
                </div>
                <div className='text-2xl'>swaimini Bhandare</div>
            </div>

            <div >
                <textarea cols={50} rows={5} placeholder='Type your message here...' className='my-3 outline-0 text-xl  p-2'></textarea>
            </div>
            <div>
                <img src="/public/post1.png" className='w-20 h-20 rounded-xl' />
            </div>
            <div className='flex justify-between items-center'>
                <div className='my-6'>
                    <label className='cursor-pointer' htmlFor='inputFile'><ImageIcon /></label>
                    <input type="file" id='inputFile' className='hidden' />
                </div>
                <div className=' h-fit bg-blue-950 text-white px-3 py-1 cursor-pointer rounded-2xl'>Post</div>
            </div>
        </div>
    )
}

export default AddModel