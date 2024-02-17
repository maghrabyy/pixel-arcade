import { useEffect, useRef, useContext, useState } from 'react';
import pixelHeart from '../assets/images/objects/pixelheart.png';
import pixelCoin from '../assets/images/objects/pixelcoin.png';
import rainbowSkull from '../assets/images/objects/pixelrainbowskull.png';
import HealthContext from '../Context/HealthContext';
import CoinsContext from '../Context/CoinsContext';
import { RxHamburgerMenu } from "react-icons/rx";
import NavContext from '../Context/NavContext';
import { FaShoppingBasket } from "react-icons/fa";
import CartContext from '../Context/CartContext';

export let navHeight: number | undefined;

export const Navbar = ()=>{
    const { userHealth } = useContext(HealthContext);
    const { userCoins } = useContext(CoinsContext);
    const { setShowNav } = useContext(NavContext);
    const { userCart,setShowCart } = useContext(CartContext);
    const [ coinsEffects, setCoinsEffect ] = useState(false);
    const [ heartsEffect, setHeartsEffect ] = useState(false);
    const [ navbarColor,setNavbarColor ] = useState('bg-transparent');
    const navRef = useRef<HTMLDivElement>(null);   
    useEffect(()=>{
        navHeight = navRef.current?.clientHeight
    },[]);
    useEffect(()=>{
        setCoinsEffect(true);
        setTimeout(()=>{
            setCoinsEffect(false);
        },500);
    },[userCoins])
    useEffect(()=>{
        setHeartsEffect(true);
        setTimeout(()=>{
            setHeartsEffect(false);
        },300);
    },[userHealth])
    const navbarColorChangeHandler = ()=>{
        if(window.scrollY >= navHeight!){
            setNavbarColor('bg-[#10021d] bg-opacity-75 backdrop-blur-sm shadow-md')
        }else{
            setNavbarColor('bg-transparent')
        }
    }
    window.addEventListener('scroll',navbarColorChangeHandler);
    return <div ref={navRef} className={`nav-bar select-none z-20 fixed w-full py-4 xl:px-10 lg:px-6 md:px-4 px-2 flex justify-between items-center ${navbarColor}`}>
        <RxHamburgerMenu onClick={()=>setShowNav(true)} className='text-2xl block md:hidden text-white hover:text-gray-400 cursor-pointer' />
        <div className="health-bar flex gap-2">
            {userHealth > 0? Array.from(Array(userHealth), (_, i) => <img key={i} src={pixelHeart} width={heartsEffect? 45 : 40} alt="pixel heart" />):
            <img src={rainbowSkull} width={30} alt="rainbow skull" />}
        </div>
        <div className="md:flex hidden nav-menu gap-3">
            <div className="nav-item">Home</div>
            <div className="nav-item">Arcade</div>
            <div className="nav-item">Items Shop</div>
            <div className="nav-item">My Items</div>
            <div className="nav-item">About</div>
        </div>
        <div className="account-menu">
            <div className="use-coin flex gap-2 items-center">
                <div className={`coins font-pixel text-white text-lg ${coinsEffects &&  `text-xl text-green-700`}`}>{userCoins}</div>
                <img src={pixelCoin} width={30} alt="pixel coin" />
                <div onClick={()=>setShowCart(true)} className="shopping-cart relative p-2 cursor-pointer rounded-lg hover:bg-gray-700 hover:bg-opacity-35">
                    <div className="cart-badge absolute rounded-full px-2 py-[0.15rem] bg-red-600 shadow-md text-center text-white text-xs top-[-0.4rem] right-[-0.2rem]">{userCart.length}</div>
                    <FaShoppingBasket className='text-white text-xl'/>
                </div>
            </div>
        </div>
 
    </div>
}
