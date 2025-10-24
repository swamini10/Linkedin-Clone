
import React from 'react'
import Card from '../../components/Card/card'
import ProfileCard from '../../components/ProfileCard/profileCard'

function Feeds() {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      {/* left side  */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard />
        </div>
        <div className='w-full mt-5 '>
          <Card padding={1}>
            <div className='w-full flex justify-between'>
              <div>Profile Viewers </div>
              <div className='text-blue-900'>23</div>
            </div>
            <div className='w-full flex justify-between'>
              <div>Post Impressions </div>
              <div className='text-blue-900'>90</div>
            </div>
          </Card>

        </div>


      </div>
      {/* middle side  */}
      <div >

      </div>
      {/* right side  */}
      <div>


      </div>

    </div>
  )
}

export default Feeds;
