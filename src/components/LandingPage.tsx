import { ImgContainer } from '../util/ImgContainer';
import { TransparentContainer } from '../util/TransparentContainer';
import arcade from '../assets/images/objects/realarcade.png';
import pixelPC from '../assets/images/objects/pixelpc.png';
import pixelPizza from '../assets/images/objects/pixelpizza.png'
import pixelJar from '../assets/images/objects/pixelnightjar.png'
import { Reveal } from '../util/Reveal';
import { navHeight } from './navbar';
import { Carousel } from '../util/Carousel';

export const LandingPage = ()=>{
    const selector = [
        {text:'Select Game', imgSrc:pixelPC},
        {text:'Select Pizza', imgSrc:pixelPizza},
        {text:'Select Jar', imgSrc:pixelJar},
    ]
    // console.log(navHeight)
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
                <TransparentContainer className='bg-[url(assets/images/header.jpg)] bg-cover bg-center'>
                   <Reveal className='grid lg:grid-cols-4 grid-cols-1'>
                    <div className="text lg:text-start text-center flex flex-col gap-4 col-span-3">
                            <h1 className='sm:text-6xl text-5xl font-pixel text-white font-semibold'>Arcade Games</h1>
                            <p className='text-lg  font-pixel text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ducimus maxime, officiis sapiente possimus accusantium, dolores nesciunt, voluptatem commodi nulla hic eaque quisquam. Dolorem earum nisi rerum atque porro optio. Exercitationem asperiores in cupiditate illo aliquam! Deleniti expedita provident iure.</p>
                            <Carousel slides={selector} sliderTitle='main-selection' render={(item)=><ImgContainer text={item.text} imgSrc={item.imgSrc} />} slidesNum={{mobile:1,md:2,lg:3}} loop={false}/>
                        </div>
                        <div className="arcade-img order-first lg:order-last flex justify-center">
                            <img src={arcade} alt="pixel arcade" className=' hue-rotate-30 scale-x-[-1] opacity-75 sm:w-[280px] w-[200px]'/>
                        </div>
                    </Reveal>
                </TransparentContainer>  
        </div>
}

