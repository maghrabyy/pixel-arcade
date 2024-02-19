type SectionTitleProps = {
    title:string
    className?:string
    borderColor?:string
}

export const SectionTitle = ({title,className,borderColor = 'border-white'}:SectionTitleProps)=>{
    return <h1 className={`text-2xl font-semibold font-pixel border-b-2 ${borderColor} inline-block pb-1 pe-28 ${className}`}>{title}</h1>
}