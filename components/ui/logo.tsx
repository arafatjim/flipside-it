import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'} className={cn("text-xl inline-flex font-extrabold text-[#71fbbd] uppercase  hover:cursor-pointer  hover:text-shadow-logo-secondary  group font-logo-font", className)} >
      Infovio<span className='text-[#e84393] text-xl group-hover:text-logo-primary'>IT</span>
    </Link>
  )
}

export default Logo
