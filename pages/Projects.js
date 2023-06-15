import Head from 'next/head'

import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'

import {BsPersonVcardFill} from 'react-icons/bs'

import Image from 'next/image'
import Link from 'next/link'

import shopazon from '../public/shop-preview.png'
import mybnb from '../public/mybnb-preview.png'

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
      <p className='text-2xl text-black-700 font-medium text-center'>My Projects</p> 

        {/* SHOPAZON */}
        <div className='grid grid-rows-8 grid-flow-col gap-4 text-center p-5 '>
          <div class="row-span-5 ... py-5"><Image src={shopazon} className='border-2' /></div>
            <div class="col-span-2 ...">
              <p className='text-2xl text-teal-700 font-medium'>Shopazon</p> 
              <p className='text-xl text-gray-500 font-medium'>Online Shopping Site</p>
            </div>
 
            <div class="row-span-1 col-span-2 ...">


              <p className='text-md leading-8 text-gray-800'>
              • Online retail site with shopping cart that is instantly updated
              </p>
              <p className='text-md leading-8 text-gray-800'>
              • Authentication with firebase • On screen notifications 
              </p>
              <p className='text-md leading-8 text-gray-800'>
              • Reducer that updates the cart: item addition and removal, total price
              </p>
              <p className='text-md leading-8 text-orange-700'>
              💻 Stack: React, React Router, Firebase, MUI
              </p>

              <div className='py-8'>
                  <Link 
                  href='Projects' className='
                  text-white px-4 py-2 rounded-md ml-8
                  bg-gradient-to-r from-violet-600 to-violet-500'>
                    project
                  </Link>

                  <a target="_blank"
                  href='https://github.com/jtc27/shopazon' className='
                  text-white px-4 py-2 rounded-md ml-8
                  bg-gradient-to-r from-rose-500 to-rose-600'>
                    github
                  </a>
              </div>

            </div>


          </div>

      {/* SHOPAZON */}
      <div className='grid grid-rows-8 grid-flow-col  text-center '>
            <div class="col-span-2 ...">
              <p className='text-2xl text-orange-700 font-medium'>Mybnb</p> 
              <p className='text-xl text-gray-500 font-medium'>Vacation Rental and Homestays</p>
            </div>
 
            <div class="row-span-1 col-span-2 ...">


              <p className='text-md leading-8 text-gray-800'>
              • Online retail site with shopping cart that is instantly updated
              </p>
              <p className='text-md leading-8 text-gray-800'>
              • Authentication with firebase • On screen notifications 
              </p>
              <p className='text-md leading-8 text-gray-800'>
              • Reducer that updates the cart: item addition and removal, total price
              </p>
              <p className='text-md leading-8 text-orange-700'>
              💻 Stack: React, React Router, Firebase, MUI
              </p>

              <div className='py-8'>
                  <Link 
                  href='Projects' className='
                  text-white px-4 py-2 rounded-md ml-8
                  bg-gradient-to-r from-violet-600 to-violet-500'>
                    project
                  </Link>

                  <a target="_blank"
                  href='https://github.com/jtc27/airbnb-clone-react' className='
                  text-white px-4 py-2 rounded-md ml-8
                  bg-gradient-to-r from-rose-500 to-rose-600'>
                    github
                  </a>
              </div>
            </div>
            <div class="row-span-5 ... px-5"><Image src={mybnb} className='border-2' /></div>

          </div>

        {/* SOCIAL MEDIA LINKS */}
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
        <Link href='https://github.com/jtc27' >
          <AiFillGithub/>
        </Link>
        <Link href='https://www.linkedin.com/in/jtc27' >
          <AiFillLinkedin />
        </Link>

          <BsPersonVcardFill/>
        </div>

      </section>

    </main>

    
  </div>
  )
}
