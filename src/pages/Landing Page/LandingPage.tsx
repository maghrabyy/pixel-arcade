import { ImgContainer } from '../../util/ImgContainer';
import { TransparentContainer } from '../../util/TransparentContainer';
import arcade from '../../assets/images/objects/realarcade.png';
import pixelPC from '../../assets/images/objects/pixelpc.png';
import pixelPizza from '../../assets/images/objects/pixelpizza.png'
import spaceInvader from '../../assets/images/objects/spaceInvader.png';
import { Reveal } from '../../util/Reveal';
import { navHeight } from '../../components/navbar';
import { Carousel } from '../../util/Carousel';
import { useNavigate } from 'react-router-dom';

export const LandingPage = ()=>{
    const navigate = useNavigate();
    const selector = [
        {text:'Play Games', imgSrc:pixelPC, onClick:()=>{navigate('/console')}},
        {text:'Buy Items', imgSrc:pixelPizza, onClick:()=>{navigate('/items-shop')}},
        {text:'Show Items', imgSrc:spaceInvader, onClick:()=>{navigate('/my-items')}},
    ]
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
                <TransparentContainer>
                   <Reveal className='grid lg:grid-cols-4 grid-cols-1'>
                    <div className="text lg:text-start text-center flex flex-col gap-4 col-span-3">
                            <h1 className='sm:text-6xl text-5xl font-pixel text-white font-semibold'>Pixel Arcade</h1>
                            <p className='sm:text-lg font-pixel text-white '>Play classic arcade games to earn pixel coins so you can buy and collect pixelated items.</p>
                            <p className='sm:text-lg font-pixel text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam consequatur dolores veniam explicabo veritatis incidunt quibusdam cum, ut sit tempore distinctio odit officiis facere excepturi. Vero laudantium tempora atque!.</p>
                            <Carousel slides={selector} sliderTitle='main-selection' render={(item)=><ImgContainer onClick={item.onClick} text={item.text} imgSrc={item.imgSrc} />} slidesNum={{mobile:1,md:2,lg:3}} loop={false}/>
                        </div>
                        <div className="arcade-img order-first lg:order-last flex justify-center">
                            <img src={arcade} alt="pixel arcade" className=' hue-rotate-30 scale-x-[-1] opacity-75 lg:w-[280px] md:w-[240px] sm:w-[200px] w-[140px]'/>
                        </div>
                    </Reveal>
                </TransparentContainer>  
        </div>
}

