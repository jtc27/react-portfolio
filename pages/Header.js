import React from 'react'

import Link from 'next/link'

function Header() {
  return (
    <>
    <nav className='py-5 px-20 flex justify-between bg-white'>
    <Link href='/' className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-blue-600 to-blue-700'>
          home
        </Link>
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
        href='Projects' className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-yellow-500 to-yellow-400'>
          projects
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