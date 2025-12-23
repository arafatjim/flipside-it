import React from 'react'
import { Title } from './title'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '../Products'


const HomeBanner = async() => {
  return (
    <div className='py-16 flex mx-auto mt-4 md:py-0 rounded-lg bg-[#f5cdcd] px-10  justify-between  text-center lg:px-24'>
    <div className='w-full mx-auto space-y-5 items-start justify-start my-auto' >
      <Title className='mb-4'>
        Grab Up to 50% Off on
        <br />
         Selected Products!
      </Title>
        <Link href={'/shop'}>
        <button className='bg-[#0e6b8e] text-white  px-4 py-1.5 rounded-md hover:bg-btn-primary-hover transition-all duration-300'>
          Buy Now
        </button>
        </Link>
    </div>
      <div className='sm:hidden md:inline-flex w-6xl'>
        <Image src={banner_1} alt='banner image' />
      </div>

      </div>
    
  )
}

export default HomeBanner
