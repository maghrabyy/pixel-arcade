import { TransparentContainer } from '../util/TransparentContainer';
import { Reveal } from '../util/Reveal';
import { SectionTitle } from '../util/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button } from '../util/Button';

import bubbleCat from '../assets/images/objects/pixelbubblecat.png';
import cryingCat from '../assets/images/objects/pixelcryingcat.png';
import sleepyCat from '../assets/images/objects/pixelsleepycat.png';
import nyanCat from '../assets/images/objects/pixelnyancat.png';
import staticCoin from '../assets/images/objects/staticcoin.png';
import chonkyRabit from '../assets/images/objects/pixelrabit.png';
import pizzaImg from '../assets/images/objects/pixelpizza.png';
import cherryImg from '../assets/images/objects/pixelcherry.png';
import nightJar from '../assets/images/objects/pixelnightjar.png';

import * as item from '../interfaces/Item.interface';
import { FaShoppingBasket } from "react-icons/fa";
import CartContext from '../Context/CartContext';
import { useContext } from 'react';

export const Content = ()=>{
    const animalItems: item.IItem[] = [
        {img:sleepyCat,category:item.ItemCategory.animals,title:'Sleepy Cat', desc:"Lazy sleepy cat that snores loudly.", price:1400},
        {img:cryingCat,category:item.ItemCategory.animals,title:'Crying Cat', desc:"Weeping cat that's so sensitive.", price:1600},
        {img:bubbleCat,category:item.ItemCategory.animals,title:'Bubble Cat', desc:"An introvert cat who's usually hidden inside their bubble.", price:2000},
        {img:nyanCat,category:item.ItemCategory.animals,title:'Nyan Cat', desc:"Nyan cat is a space traveller cat that's fueled by rainbows.", price:4000},
        {img:chonkyRabit,category:item.ItemCategory.animals,title:'Chonky Rabit', desc:"Chonky rabit will probably eat your food.", price:2400},
    ]
    const foodItems = [
        {img:pizzaImg,category:item.ItemCategory.food,title:'Pizza Slice', desc:"Pizza slice for extra health.", price:450},
        {img:cherryImg,category:item.ItemCategory.food,title:'Cherries', desc:"Cherries will make you invalnurable.", price:600},
        {img:nightJar,category:item.ItemCategory.food,title:'Midnight Jar', desc:"Jar full of honey and magic substance.", price:800},
    ]
    const swiperOptions = {
        1024:{slidesPerView:4,spaceBetween:30},
        768:{slidesPerView:3,spaceBetween:20},
    }
    const mainSwiper = {slidesPerView:2,spaceBetween:15}
    return <div className="text-white font-pixel text-lg min-h-screen py-4">
        <TransparentContainer>
            <Reveal>
                <SectionTitle className='text-gray-300' title='Items Shop' />
                <Swiper className='my-4' slidesPerView={mainSwiper.slidesPerView} spaceBetween={mainSwiper.spaceBetween} breakpoints={swiperOptions}>
                    {animalItems.map((item=>{
                        return <SwiperSlide key={item.img}> <ItemCard item={item} /></SwiperSlide>
                    }))}
                </Swiper>
            </Reveal>
            <Reveal>
                <Swiper className='my-4' slidesPerView={mainSwiper.slidesPerView} spaceBetween={mainSwiper.spaceBetween} breakpoints={swiperOptions}>
                    {foodItems.map((item=>{
                        return <SwiperSlide key={item.img}> <ItemCard item={item} /></SwiperSlide>
                    }))}
                </Swiper>
            </Reveal>           
        </TransparentContainer>
    </div>
}

type ItemCardProps = {
    item:item.IItem
}
const ItemCard = ({item}:ItemCardProps)=>{
    const { addItemToCart } = useContext(CartContext);

    const AddToCartHandler = ()=>{
            addItemToCart(item);
    }
    return <div className="item-card relative overflow-hidden bg-black select-none bg-opacity-60 min-h-[400px] flex flex-col justify-end px-4 rounded-md py-2">
        <div className="img border-b-2 h-[250px] flex justify-center items-end">
            <img src={item.img} className='pb-2 max-w-[240px] min-w-[160px]' alt={item.title} />
        </div>
        <div className="title-desc">
            <h1 className='text-2xl pt-1'>{item.title}</h1>
            <p className='text-gray-400 text-sm'>{item.desc}</p>
        </div>
        <div className="item-price flex justify-center items-center">
            <p>{item.price}</p> <img src={staticCoin} width={25} alt="static pixel coin" />
        </div>
        <div className="add-to-cart absolute top-3 left-1/2 -translate-x-1/2">
                <Button onClick={AddToCartHandler} width={170}>
                    <span>Add To Cart</span>
                    <FaShoppingBasket />
                </Button>
        </div>
    </div>
}