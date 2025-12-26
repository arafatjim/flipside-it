import React from 'react'
import Container2 from './container'
import FooterTop from '@/components/ui/footerTop'
import Logo from '@/components/ui/logo'
import SocialMedia from '@/components/ui/socialMedia'
import { cn } from '@/lib/utils'
import { SubText, SubTitle } from '@/components/ui/title'
import { categoriesData, quickLinksData } from '@/components/constants/data'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='w-11/12 mx-auto text-gray-400 mt-20 mb-10   rounded-lg shadow-lg'>
      <Container2 className=' mx-auto'> 
      <FooterTop />
      <div className='grid mt-2 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='space-y-4'>
          <Logo className='pl-6' />
        
          <SubText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt deserunt voluptas ipsam dolores necessitatibus dolorem, voluptatem error dicta, officiis nam ipsum iure rem, quaerat voluptates. Odio dignissimos explicabo possimus?
          </SubText>
        
        <div className='pl-6'>
          <SocialMedia className='text-black'
          tooltipClassName='text-white bg-black font-semibold rounded-md shadow-lg p-2'
          />
        </div>
        </div>

        <SubText>
          <span className='text-lg font-semibold'>Quick Links</span>
          <ul>
            {quickLinksData?.map((link, index) => (
              <li key={index} className={cn('hover:text-gray-400 text-sm font-normal cursor-pointer my-1')
              }>
                <a href={link.href}>{link.title}</a>
              </li>
            ))
              }
          </ul>
        </SubText>

      <SubText >
        <span className='text-lg font-semibold'>Categories</span>
          <ul>
            {
              categoriesData?.map((link, index)=>(
                <li key={index} className={cn('hover:text-gray-400 text-sm font-normal cursor-pointer my-1')}>
                  <a href={link.href}>{link.title}</a>
                </li>  
              ))
            }
          </ul>
      </SubText>

      <SubText className=''>
        <SubTitle className='pl-1'>Newsletter</SubTitle>
        <div className='p-1'>
          Subscribe to our newsletter to get the latest updates and offers.
        </div>
        <form action="#" className='grid mt-4 gap-3.5 space-x-2'>
          <input className='border-2 border-black rounded-md' placeholder='Enter your email' />
        <Button className='w-2/3'>Subscribe</Button>
        </form>
      </SubText>
      </div>
       </Container2>
    </footer>
  )
}

export default Footer
