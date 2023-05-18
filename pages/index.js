import Head from 'next/head'

import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'

import {BsPersonVcardFill} from 'react-icons/bs'

import Image from 'next/image'
import profile from '../public/profile.jpg'

export default function Index() {
  return (
  <div className='bg-white'>
    <Head>
      <title>Jacob Cho Portfolio</title>
      <meta />
      <link rel="stylesheet" href="" />
    </Head>

    <main className='mx-20'>
      <section className='min-h-screen px-20'>

        <div className='grid grid-rows-8 grid-flow-col gap-4 text-center p-5 '>
          <div class="row-span-5 ... py-9"><Image src={profile}  /></div>
            <div class="col-span-2 ...">
              <p className='text-2xl text-teal-700 font-medium justify-center'>Jacob Cho</p> 
              <p className='text-xl text-gray-500 font-medium justify-center'>Software Developer</p>
            </div>
            <div class="row-span-1 col-span-2 ...">

            </div>
            <div class="row-span-1 col-span-2 ...">

              <p className='text-lg leading-8 text-blue-800'>
                Hi there!  I have experience with:
              </p>
              <p className='text-md leading-8 text-gray-800'>
                JavaScript (React, Node.js, Express, MongoDB, Jest), Typescript
              </p>
              <p className='text-md leading-8 text-gray-800'>
                Ruby (Rails, Sinatra, RSpec, Capybara)
              </p>
              <p className='text-md leading-8 text-gray-800'>
                 SQL (PostgreSQL, TablePlus) and Database management
              </p>
              <p className='text-md leading-8 text-gray-800'>
                  HTML, CSS (Bootstrap), Tailwind, DaisyUI
              </p>
              <p className='text-md leading-8 text-gray-800'>
                  Heroku, Git, Firebase, Vercel, Netlify, Twilio
              </p>

            </div>
          </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
          <AiFillGithub/>
          <AiFillLinkedin />
          <BsPersonVcardFill/>
        </div>

      </section>

    </main>

    
  </div>
  )
}
