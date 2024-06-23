import React from 'react'
import Navbar from './Navbar'
import ContactButton from './ContactButton'

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto py-6'>
        <header className='flex'>
            <h1 className='w-fit text-2xl font-bold cursor-pointer text-yellow-400'>{"{"}<span className='text-white'>leo.c</span>{"}"}</h1>
            <Navbar />
            <ContactButton />
        </header>
    </div>
  )
}

export default Header