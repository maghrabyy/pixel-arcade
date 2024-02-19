import { ReactNode } from "react"
type TransparentContainerProps = {
    children:ReactNode,
    className?:string,
    expanded?:boolean
}
export const TransparentContainer = ({children,className,expanded = true}:TransparentContainerProps)=>{
    return <div className={`xl:px-10 lg:px-6 md:px-4 px-2 ${expanded && 'w-full'}`}>
            <div className={`py-4 px-4 lg:px-8 md:px-14 bg-opacity-50 rounded-md shadow-md bg-black overflow-hidden ${className}`}>
                {children}
            </div>
    </div>
}