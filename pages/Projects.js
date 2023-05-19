import Head from 'next/head'

import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'

import {BsPersonVcardFill} from 'react-icons/bs'

import Image from 'next/image'
import shopazon from '../public/shop-preview.png'
import Link from 'next/link'

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

        <div className='grid grid-rows-8 grid-flow-col gap-4 text-center p-5 '>
          <div class="row-span-5 ... py-5"><Image src={shopazon} className='border-2' /></div>
            <div class="col-span-2 ...">
              <p className='text-2xl text-teal-700 font-medium justify-center'>Shopazon</p> 
              <p className='text-xl text-gray-500 font-medium justify-center'>Online Shopping Site</p>
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

                  <Link 
                  href='/' className='
                  text-white px-4 py-2 rounded-md ml-8
                  bg-gradient-to-r from-rose-500 to-rose-600'>
                    github
                  </Link>
              </div>

            </div>


          </div>

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
