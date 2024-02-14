import { FaShoppingBasket } from "react-icons/fa";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import CoinsContext from "../Context/CoinsContext";
import staticCoin from '../assets/images/objects/staticcoin.png';
import { Button } from "../util/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const ShopppingCart = ()=>{
    const mountedStyle = { animation: "inShoppingCartAnimation 300ms ease-in" };
    const unmountedStyle = {
    animation: "outShoppingCartAnimation 340ms ease-out",
    animationFillMode: "forwards"
    };
    const { userCart, showCart,setShowCart, removeItemFromCart } = useContext(CartContext);
    const { userCoins } = useContext(CoinsContext);
    const totalCartAmount = userCart.reduce((a,b)=>a+b.price,0);
    const checkoutHandler = ()=>{
            if(userCoins >=  totalCartAmount){

            }
    }
    useEffect(() => {
        if(showCart){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
     }, [showCart]);
    return showCart ? <div className="shopping-cart">
        <div onClick={()=>setShowCart(false)} className="overlay fixed z-30 h-full w-full bg-gray-400 opacity-35 cursor-pointer"></div>
        <div style={showCart? mountedStyle : unmountedStyle} className="fixed top-0 right-0 w-5/6 sm:w-4/6 md:w-1/2 h-full z-40 bg-black opacity-95 px-4 py-2 flex flex-col justifys-between">
            <div className="cart-title flex items-center gap-2 text-white text-4xl font-pixel pt-2 pb-4">
                <span>Shopping Cart</span>
                <FaShoppingBasket/>
            </div>
            <div className="cart-items py-2 overflow-auto h-full">
                {userCart.length > 0? userCart.map((item)=>{
                    return <div key={item.img} className="grid grid-cols-4 items-center gap-2 p-2 border-b border-b-gray-300">
                            <div className="item-img col-span-1 relative h-40 flex items-center">
                                <img src={item.img} alt={item.title} />
                                <div onClick={()=>removeItemFromCart(item)} className="absolute top-0 right-0 text-white cursor-pointer hover:text-gray-300">
                                    <FaTrashAlt/>
                                </div>
                            </div>
                            <div className="col-span-3 text-white font-pixel ">
                                <div className="item-title-price flex  items-center justify-between font-semibold text-2xl">
                                    <div className="item-title ">{item.title}</div>
                                    <div className="item-price font-semibold flex items-center gap-2">
                                        {item.price}
                                        <img src={staticCoin} width={30} alt='static coin' />
                                    </div>
                                </div>
                                <div className="item-desc text-gray-300">{item.desc}</div>
                            </div>
                    </div>
                }) :
                <div className="empty-cart text-white flex flex-col items-center justify-center h-full">
                    <TbShoppingCartQuestion className="text-[18rem]"/>
                    <p className="sm:text-5xl text-4xl text-center font-pixel">Cart is empty.</p>
                </div>
            }
            </div>
            { userCart.length > 0? <div className="cart-action text-white text-4xl font-pixel flex justify-between items-center mt-auto py-2">
                <div className="proceed-purchase">
                    <Button onClick={checkoutHandler}>Checkout <FaArrowRight /></Button>
                </div>
                <div className="cart-total-price flex gap-2">
                    <span>{totalCartAmount}</span>
                    <img src={staticCoin} width={40} alt="static coin" />
                </div>
            </div> : null}
        </div>
    </div> 
    : null
}