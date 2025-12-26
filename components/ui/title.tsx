import { cn } from "@/lib/utils"
  

const Title= ({children,className}:{children:React.ReactNode, className?:string})=>{
    return(
        <h2 className={cn('text-xl  md:text-2xl font-extrabold inset-shadow-shadow-lg whitespace-nowrap  tracking-wide text-[#0e6b8e] uppercase mb-3 lg:text-3xl',className)}>
            {children}
        </h2>
        
    )
}


const SubTitle= ({children,className}:{children:React.ReactNode, className?:string})=>{
    return(
        <h3 className={cn('text-lg font-semibold pl-6 ',className)}>
            {children}
        </h3>
        
    )
}

const SubText= ({
    children,className
}:{
    children:React.ReactNode, className?:string})=>{
  return <div className={cn('font-normal text-gray-500 mt-1 pl-6',className)} >{children}</div>
}
export {Title,SubTitle,SubText,};