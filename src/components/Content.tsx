import { TransparentContainer } from '../util/TransparentContainer';
import { Reveal } from '../util/Reveal';
import { SectionTitle } from '../util/SectionTitle';
import { ItemsCarousel } from '../util/ItemsCarousel';

import bubbleCat from '../assets/images/objects/pixelbubblecat.png';
import cryingCat from '../assets/images/objects/pixelcryingcat.png';
import sleepyCat from '../assets/images/objects/pixelsleepycat.png';
import nyanCat from '../assets/images/objects/pixelnyancat.png';
import chonkyRabit from '../assets/images/objects/pixelrabit.png';
import pizzaImg from '../assets/images/objects/pixelpizza.png';
import cherryImg from '../assets/images/objects/pixelcherry.png';
import nightJar from '../assets/images/objects/pixelnightjar.png';

import * as item from '../interfaces/Item.interface';


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

    return <div className="text-white font-pixel text-lg min-h-screen py-4">
        <TransparentContainer>
            <Reveal>
                <SectionTitle className='text-gray-300' title='Items Shop' />
                <ItemsCarousel slides={animalItems} sliderTitle='animals' />
            </Reveal>
            <Reveal>
                <ItemsCarousel slides={foodItems} loop={false} sliderTitle='food' />
            </Reveal>           
        </TransparentContainer>
    </div>
}
