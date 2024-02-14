type SectionTitleProps = {
    title:string
    className?:string
}

export const SectionTitle = ({title,className}:SectionTitleProps)=>{
    return <h1 className={`text-2xl font-semibold font-pixel border-b-2 border-white inline-block pb-1 pe-28 ${className}`}>{title}</h1>
}