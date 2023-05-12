import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import Image from 'next/image'
import profile from '../public/profile.jpg'

function Home() {
  return (
    <>
      <div className='text-center p-5'>
      <h2 className='text-2xl text-teal-700 font-medium'>Jacob Cho</h2>
      <h3 className='text-xl py-2'>Developer</h3>
      <p className='text-md py-5 leading-8 text-gray-800'>
      Hi! I'm Jacob,
      Software Developer
      </p>
      </div>

    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
      <AiFillTwitterCircle/>
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>

    <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-20 mx-auto'>
      <Image src={profile}/>
    </div>
  </>
  )
}

export default Home