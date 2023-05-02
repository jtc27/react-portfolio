import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import Image from 'next/image'
import profile from '../public/profile.jpg'

import Header from './Header'

export default function Home() {
  return (
  <div>
    <Head>
      <title>Jacob Cho Portfolio</title>
      <meta />
      <link rel="stylesheet" href="" />
    </Head>

    <main className='bg-white px-10'>

      {/* NAV */}
      <section className='bg-white min-h-screen'>
        <Header/>

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

      </section>

    </main>
  </div>
  )
}
