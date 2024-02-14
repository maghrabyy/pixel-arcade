type ImgContainerProps = {
    imgSrc:string,
    text:string,
    className?:string,
    onClick?:()=>any
}

export const ImgContainer = ({className,imgSrc,text,onClick}:ImgContainerProps)=>{
    const transparentBackground = 'bg-black bg-opacity-40 ';
    const techBlocksBackground = ' bg-[url(assets/images/techblocksBackground.png)] bg-cover bg-center bg-opacity-25';

 return <div className={`img-container cursor-pointer select-none hover:scale-105 duration-500 ease-out ${techBlocksBackground}`}>
    <div onClick={onClick} className={`shadow-md py-2 rounded-md flex flex-col items-center h-full ${transparentBackground}  ${className}`}>
        <img src={imgSrc} width={180} alt="pixel pc" />
        <h1 className='text-white font-semibold font-pixel text-4xl text-center'>{text}</h1>
    </div> 
 </div> 
}