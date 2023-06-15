import React from 'react'
import Head from 'next/head'

import {
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

import {BsPersonVcardFill} from 'react-icons/bs'

import Image from 'next/image'
import about from '../public/about3.png'

function About() {
  return (
    <div className='bg-white'>
    <Head>
      <title>Jacob Cho Portfolio</title>
      <meta />
      <link rel="stylesheet" href="" />
    </Head>

    <main className='px-10'>
      <section className='min-h-screen mx-20'>

        <div className='grid grid-rows-8 grid-flow-col gap-4 text-center p-5'>
          <div class="row-span-5 ..."><Image src={about}  /></div>
            <div class="col-span-2 ...">
              <p className='text-2xl text-teal-700 font-medium justify-center'>Hi I'm Jacob!</p> 
            </div>
            <div class="row-span-1 col-span-2 ...">
              <p className='text-md py-2 leading-8 text-gray-800 px-7'>
              I have many years of experience working as an educator, most recently teaching English at the university level.  My experiences have taught me the value of communication, attention to detail, teamwork and the commitment to problem-solving.  It is fulfilling to work with technology to develop solutions with people.
              </p>
            </div>
            <div class="row-span-1 col-span-2 ...">
              <p className='text-md py-2 leading-8 text-gray-800 px-7'>
              I have a wide range of professional and cultural experiences.  I spent time in the UK researching history and also taught education in South Korea.  My travels have deepened my understanding of various cultures and personalities.  I like to watch sports, play computer games and learn about history and technology.  
              </p>
            </div>
          </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
        <a target="_blank"
        title="Github"
        href='https://github.com/jtc27' >
          <AiFillGithub/>
        </a>
        <a target="_blank"
        href='https://www.linkedin.com/in/jtc27' >
          <AiFillLinkedin />
        </a>
          <BsPersonVcardFill/>
        </div>

      </section>

    </main>

    </div>
  )
}

export default About