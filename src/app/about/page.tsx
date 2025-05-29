import AboutUs from '@/components/level_two_layout/about_us'
import OurTeam from '@/components/level_two_layout/our_team'
import TechStack from '@/components/level_two_layout/tech_stack'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#EDF2FF] min-h-screen'>
      <AboutUs/>
      <TechStack/>
      <OurTeam/>
    </div>
  )
}

export default page