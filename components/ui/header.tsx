import Container2 from '@/app/container'
import React, { Profiler } from 'react'
import Logo from './logo'
import HeaderMenue from './header-menu'


const Header = () => {
  return (
    <header className='bg-white  py-5 px-2 border-b border-b-gray-200 shadow-sm sticky max-w-full top-0 z-50 mx-auto'>
        <Container2  className='flex justify-between w-full mx-auto items-center'> 
        {/* logo  */}
            <Logo />
        {/* nav-menu-center */}
            <HeaderMenue />
            

        {/* nav-menu-right */}
            <h1>right-end</h1>
        </Container2>
    </header>
  )
}

export default Header
