import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

type breakPoints = {
    lg?:number
    md?:number
    mobile?:number
}

type ICarousel = {
    slides:Array<any>
    loop?:boolean
    sliderTitle:string
    render:(item:any)=>JSX.Element
    slidesNum?:breakPoints
}



export const Carousel = ({
    slides,
    loop = true,
    sliderTitle,
    render,
    slidesNum = {lg:4,md:3,mobile:2}
    }:ICarousel)=>{
    const swiperOptions = {
        1024:{slidesPerView:slidesNum!.lg,spaceBetween:25},
        768:{slidesPerView:slidesNum!.md,spaceBetween:20},
    }
    const mainSwiper = {slidesPerView:slidesNum!.mobile,spaceBetween:15}
    return <div className="swiper-main relative my-4">
    <i className={`icon-arrow-long-left ${sliderTitle}-swiper-button-prev z-10 hidden md:block absolute text-5xl top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-400`}><FaChevronLeft /></i>
    <div className="swiper-container md:px-14">
        <Swiper 
            slidesPerView={mainSwiper.slidesPerView} 
            spaceBetween={mainSwiper.spaceBetween} 
            breakpoints={swiperOptions}
            pagination={{
                el: `.${sliderTitle}-pagination-div`,
                clickable: true,
              }}
            loop={loop}
            navigation={{
                nextEl: `.${sliderTitle}-swiper-button-next`,
                prevEl: `.${sliderTitle}-swiper-button-prev`,
            }}
            modules={[ Pagination,Navigation]}>
                {slides.map(((item,index)=>{
                    return <SwiperSlide key={index}> {render(item)}</SwiperSlide>
                }))}
        </Swiper>
    </div>
    <i className={`icon-arrow-long-right ${sliderTitle}-swiper-button-next z-10 hidden md:block absolute text-5xl right-0 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-400`}><FaChevronRight/></i>
    <div className={`${sliderTitle}-pagination-div text-center mt-2`} />
</div>
}

