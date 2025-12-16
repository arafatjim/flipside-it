import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'} className={cn("text-xl font-extrabold text-logo-primary uppercase hover:cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:scale-105 hover:text-logo-secondary hoverEffect group font-logo-font", className)} >
      Flipside<span className='text-logo-secondary'>IT</span>
    </Link>
  )
}

export default Logo
