import React from 'react'
import { Title } from './title'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1, buy_logo, shopping_logo } from '../Products'


const HomeBanner = async() => {
  return (
    <div className='bg-[#f1e2dd] rounded-md grid grid-cols-1 text-center items-center justify-between md:grid-cols-2 ' >
      <div className='items-start p-8 text-left'>
      <Title className='mb-4'>
        Grab Up to 50% Off on
        <br />
         Selected Products!
      </Title>
        <Link href={'/shop'} className='inline-block mt-4'>
        <button className='bg-[#0984e3] text-white px-4 py-1.5 rounded-md hover:bg-btn-primary-hover transition-all duration-300'>
          Buy Now
          <Image src={buy_logo} alt='arrow right'  className='inline-block ml-2 w-6' />
        </button>
        </Link>
    </div>
      <div className='inline-flex justify-center px-4 '>
        <Image src={banner_1} alt='banner image' />
      </div>

      </div>
    
  )
}

export default HomeBanner
