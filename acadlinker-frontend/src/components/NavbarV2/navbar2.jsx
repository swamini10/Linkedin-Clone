import React, { useState } from 'react';
import './navbar2.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import { useLocation,Link } from 'react-router-dom';


const Navbar2 = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();


  console.log(location.pathname);
  return (
    <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000'>
      <div className='flex gap-2 items-center'>
        <div>
          <img className='w-12 h-12' src="/public/logo2.png" alt='logo' />
        </div>
        <div className='relative'>
          <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search...' />

          {
            dropdown && <div className='absolute w-88 left-0 bg-gray-200'>
              <div className='flex gap-2 mb-1 item-center cursor-pointer'>
                <div><img className='w-10 h-10  rounded-full' src='/public/user1.jpg' />
                  <div>Swamini</div>
                </div>
              </div>
            </div>

          }
        </div>
      </div>

      <div className="hidden gap-10 md:flex">
        <Link to={'/feeds'} className='flex flex-col items-center cursor-pointer'>
          <HomeIcon sx={{ color: location.pathname === '/feeds' ? 'black' : 'gray' }} />
          <div className={'text-sm text-gray-500' + (location.pathname === '/feeds' ? ' border-b-3' : ' ')}>Home</div>
        </Link>

        <Link to={'/mynetwork'} className='flex flex-col items-center cursor-pointer'>
          <PeopleIcon sx={{ color: location.pathname === '/mynetwork' ? 'black' : 'gray' }} />
          <div className={'text-sm text-gray-500' + (location.pathname === '/mynetwork' ? ' border-b-3' : ' ')}>My Network</div>
        </Link>

        <div className='flex flex-col items-center cursor-pointer'>
          <WorkIcon sx={{ color: location.pathname === '/resume' ? 'black' : 'gray' }} />
          <div className={'text-sm text-gray-500' + (location.pathname === '/resume' ? ' border-b-3' : ' ')}>Resume</div>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <ChatOutlinedIcon sx={{ color: location.pathname === '/messages' ? 'black' : 'gray' }} />
          <div className={'text-sm text-gray-500' + (location.pathname === '/messages' ? ' border-b-3' : ' ')}>Messages</div>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <div><AddAlertOutlinedIcon sx={{ color: location.pathname === '/notifications' ? 'black' : 'gray' }} /><span className='p-1 rounded-full text-sm bg-red-700 text-white' >1</span> </div>
          <div className={'text-sm text-gray-500' + (location.pathname === '/notifications' ? ' border-b-3' : ' ')}>Notifications</div>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <div><img className='w-8 h-8  rounded-full' src='/public/user1.jpg' />
            <div className='text-sm text-gray-500'> Me</div>
          </div>


        </div>
      </div>
    </div>
  )
};

export default Navbar2;