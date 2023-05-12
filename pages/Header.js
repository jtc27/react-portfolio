import React from 'react'

import Link from 'next/link'

function Header() {
  return (
    <>
    <nav className='py-5 px-5 flex justify-between bg-white'>
    <h1 className='text-xl font-burtons'>welcome</h1>
    <ul className='flex items-center'>


      <li>
      <Link href='About' className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-orange-600 to-orange-700'>
          about
        </Link>
      </li>

      <li>
        <Link 
        href='/' className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-cyan-500 to-teal-400'>
          resume
        </Link>
      </li>


    </ul>
    </nav>
  </>

  )
}

export default Header