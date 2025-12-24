import React from 'react'
import Container2 from './container'
import FooterTop from '@/components/ui/footerTop'
import Logo from '@/components/ui/logo'
import SocialMedia from '@/components/ui/socialMedia'

const Footer = () => {
  return (
    <footer className='w-11/12 mx-auto text-gray-600 mt-20 mb-10   rounded-lg shadow-lg'>
      <Container2 className=' mx-auto'> 
      <FooterTop />
      <div className='grid mt-2 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='px-6 '>
          <Logo />
        <div className='text-sm items-center  mt-4'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt deserunt voluptas ipsam dolores necessitatibus dolorem, voluptatem error dicta, officiis nam ipsum iure rem, quaerat voluptates. Odio dignissimos explicabo possimus?</p>
        </div>
        <div>
          <SocialMedia className='text-black'
          tooltipClassName='text-white bg-black font-semibold rounded-md shadow-lg p-2'
          />
        </div>
        </div>

        <div className='bg-red-400'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ratione possimus itaque quia? Harum, blanditiis suscipit! Facilis ullam sit vel error optio architecto sequi labore similique suscipit, cum ut perspiciatis?
        </div>

      <div className='bg-blue-700'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio voluptates ducimus beatae ipsa soluta minus et. Asperiores, laudantium sint!
      </div>

      <div className='bg-green-500'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem tempore, beatae placeat corporis modi repellendus enim asperiores cumque labore omnis, sed, minima nisi recusandae eius quod delectus. Est, molestias sunt.
      </div>
      </div>
      
       </Container2>
    </footer>
  )
}

export default Footer
