import React from 'react'

function Header() {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
    <h1 className='text-xl font-burtons'>welcome</h1>
    <ul className='flex items-center'>

      <li>
        <a 
        href className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-orange-600 to-orange-700'>
          about
        </a>
      </li>

      <li>
        <a 
        href className='
        text-white px-4 py-2 rounded-md ml-8
        bg-gradient-to-r from-cyan-500 to-teal-400'>
          resume
        </a>
      </li>


    </ul>
  </nav>

  )
}

export default Header