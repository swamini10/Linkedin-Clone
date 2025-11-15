import React from 'react'

const Conversation = () => {
  return (
       <div className='flex item-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200'>
                    <div className='shrink-0'>
                      <img src="/public/user2.jpg" className='w-12 h-12 rounded-[100%]  cursor-pointer' />
                    </div>
                    <div className='text-md'>Shree</div>
                    <div className='text-sm text-gray-500'>@shree</div>
                  </div>
  )
}

export default Conversation