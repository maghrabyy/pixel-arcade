import { ReactNode } from "react"
type TransparentContainerProps = {
    children:ReactNode,
    className?:string
}
export const TransparentContainer = ({children,className}:TransparentContainerProps)=>{
    return <div className="xl:px-10 lg:px-6 md:px-4 px-2">
            <div className={`py-4 px-4 lg:px-8 md:px-14 bg-opacity-50 rounded-md shadow-md backdrop-blur-sm bg-black overflow-hidden ${className}`}>
                {children}
            </div>
    </div>
}