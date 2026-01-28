import React from 'react'
import Card from '../Card/card'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();
  }

  const desc = "Hey everyone! I'm excited to share that I've just launched my new blog where I'll be discussing the latest trends in web development, sharing tutorials, and providing insights into the tech industry. Check it out and let me know what you think!";
  return (
    <div>
      <Card padding={0}>
        <div className='flex gap-3 p-4'>
          <div className='w-12 h-12 rounded-4xl'>
            <img src="/public/user1.jpg" className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' />
          </div>
          <div>
            <div className='text-lg font-semibold'>Swamini Bhandare</div>
            <div className='text-xs text-gray-800'>@swaminibhandare</div>
          </div>
        </div>

        <div className='text-md p-4 my-3 whitespace-pre-line flex-grow'>
          {seeMore ? desc : `${desc.slice(0, 50)}...`}<span className='cursor-pointer text-blue-500' onClick={() => setSeeMore(!seeMore)}> {seeMore ? "See Less" : "See More"}</span>
        </div>
        <div className='w-[100%] h-[300px]'>
          <img src="/public/post1.png" className='w-full h-full object-cover' />
        </div>

        <div className='my-2 p-4 flex justify-between items-center'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <ThumbUpIcon sx={{ color: "blue", fontSize: 14 }} /><div className='text-sm text-gray-600'>1 Likes</div>
          </div>

          <div className='flex items-center gap-2 cursor-pointer'>
            <div className='text-sm text-gray-600'> Comments 2</div> <CommentOutlinedIcon sx={{ color: "blue", fontSize: 18 }} />
          </div>

        </div>

        <div className='flex p-1'>
          <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
            <ThumbUpIcon sx={{ color: "blue", fontSize: 18 }} /> <span> Like</span>
          </div>

          <div onClick={() => setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
            <CommentIcon sx={{ fontSize: 18 }} /> <span> Comment</span>
          </div>

          <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
            <SendIcon sx={{ fontSize: 18 }} /> <span> Share</span>
          </div>
        </div>

        {/*  Comments Section */}
        {comment && (
          <div className='p-4 m-full'>
            <div className='flex gap-2 item-center'>
              <img src="/public/user1.jpg" className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' />

              <form className='w-full flex gap-2' onSubmit={handleSendComment}>
                <input type="text" placeholder='Write a comment...' className='w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100' />
                <button type='submit' className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3'>Send</button>
              </form>
            </div>

            {/* others commands section */}
            <div className='w-full mt-4'>

              <div className='flex gap-3 p-4'>
                <div className='w-12 h-12 rounded-4xl'>
                  <img src="/public/user1.jpg" className='rounded-4xl w-9 h-9 border-2 border-white cursor-pointer' />
                </div>
                <div>
                  <div className='text-lg font-semibold'>Swamini Bhandare</div>
                  <div className='text-xs text-gray-800'>@swaminibhandare</div>
                </div>
              </div>
              <div className='px-11  '> This is a great post! Looking forward to more content from you.</div>

            </div>
            <div>

            </div>
          </div>
        )}
      </Card>

    </div>
  )
}

export default Post