import { cn } from '@/lib/utils';
import React from 'react'

const Container2 = ({children, className,}:{children: React.ReactNode, className?: string; }) => {
  return (
    <div className={cn("max-w-full mx-auto ", className)}>
      {children}
    </div>
  )
}

export default Container2
