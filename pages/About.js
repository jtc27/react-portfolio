import React from 'react'
import Head from 'next/head'

import {
  AiFillLinkedin,
  AiFillIdcard,
  AiFillGithub,
} from 'react-icons/ai'
import Image from 'next/image'
import profile from '../public/profile.jpg'

function About() {
  return (
    <div>
    <Head>
      <title>Jacob Cho Portfolio</title>
      <meta />
      <link rel="stylesheet" href="" />
    </Head>

    <main className='bg-white px-10'>
      <section className='bg-white min-h-screen'>

        <div className='text-center p-5'>
 

        <div className='grid grid-rows-8 grid-flow-col gap-4'>

        <div class="row-span-3 ..."><Image src={profile} className='px-1'/></div>
        <div class="col-span-2 ...">
          <p className='text-2xl text-teal-700 font-medium justify-center'>Hi I'm Jacob!</p>
        </div>
        <div class="row-span-1 col-span-2 ...">
          <p className='text-md py-2 leading-8 text-gray-800 px-7'>
          I enjoy growing as a software developer.  I have many years of experience working as an educator, most recently teaching English at the university level.  My experiences have taught me the value of communication, attention to detail, teamwork and the commitment to problem-solving.  It is fulfilling to work with technology to develop solutions with people.
          </p>
        </div>
        <div class="row-span-1 col-span-2 ...">
          <p className='text-md py-2 leading-8 text-gray-800 px-7'>
          I have a wide range of professional and cultural experiences.  I spent time in the UK researching history and also taught education in South Korea.  My travels have deepened my understanding of various cultures and personalities.  I like to watch sports, play computer games and learn about history and technology.  
          </p>
        </div>

        </div>

        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
          <AiFillGithub/>
          <AiFillLinkedin />
          <AiFillIdcard/>
        </div>

      </section>

      <section className='bg-white min-h-screen'>sdafdfsa</section>

    </main>

    </div>
  )
}

export default About