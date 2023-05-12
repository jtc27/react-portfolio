import Head from 'next/head'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'

export default function Index() {
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
        <Home/>


      </section>

    </main>
  </div>
  )
}
