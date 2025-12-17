import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'} className={cn("text-xl font-extrabold text-logo-primary uppercase animate-pulse hover:cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:scale-105 hover:text-[#ffff] hoverEffect group font-logo-font", className)} >
      Flipside<span className='text-white'>IT</span>
    </Link>
  )
}

export default Logo
