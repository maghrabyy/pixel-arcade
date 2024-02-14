import { ReactNode } from "react"
enum ColorVarient {
    primary = "primary",
    secondary = "secondary"
}
type ButtonProps={
    onClick:()=>any
    color?:keyof typeof ColorVarient
    className?:string
    width?:number
    children?:ReactNode
}
export const Button = ({onClick,color,width,className,children}:ButtonProps)=>{
    const btnColorVarient = {
        primary: "border-white hover:bg-white text-white hover:text-gray-700",
        secondary: "border-gray-900 hover:bg-slate-900 text-slate-900 hover:text-white"
    }
    const buttonStyles = "select-none cursor-pointer border-2 rounded-md p-2";
    const hoverStyles = "duration-300 ease-in"
    const varient = btnColorVarient[color!];
    const childrenStyles = "text-lg flex items-center justify-center gap-2";
    return <div onClick={onClick} style={{width:width}} className={`button ${buttonStyles} ${varient} ${childrenStyles} ${hoverStyles} ${className}`}>{children}</div>
} 

Button.defaultProps = {
    color:'primary'
}