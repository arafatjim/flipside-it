import { cn } from "@/lib/utils"


const Title= ({children,className}:{children:React.ReactNode, className?:string})=>{
    return(
        <p className={cn('text-xl  md:text-2xl font-extrabold inset-shadow-shadow-lg whitespace-nowrap  tracking-wide text-[#0e6b8e] uppercase mb-3 lg:text-3xl',className)}>
            {children}
        </p>
    )
}
export {Title};