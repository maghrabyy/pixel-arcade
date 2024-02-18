import { FaChevronLeft, FaChevronRight, FaShoppingBasket } from "react-icons/fa";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import CoinsContext from "../Context/CoinsContext";
import staticCoin from '../assets/images/objects/staticcoin.png';
import { Button } from "../util/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import UserItemsContext from "../Context/UserItemsContext";

export const ShopppingCart = ()=>{
    const mountedStyle = { animation: "inShoppingCartAnimation 300ms ease-in" };
    const unmountedStyle = {
    animation: "outShoppingCartAnimation 340ms ease-out",
    animationFillMode: "forwards"
    };
    const { userCart, showCart,setShowCart, removeItemFromCart, incrementQuantity, decrementQuantity, emptyCart } = useContext(CartContext);
    const { userCoins, payWithCoins } = useContext(CoinsContext);
    const { addItems } = useContext(UserItemsContext)
    const totalCartAmount = userCart.reduce((a,b)=>a+(b.selectedItem.price*b.quantity),0);
    const checkoutHandler = ()=>{
        if(userCoins >=  totalCartAmount){
            addItems(userCart);
            payWithCoins(totalCartAmount);
            setShowCart(false);
            emptyCart();
        }
    }
    useEffect(() => {
        if(showCart){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
     }, [showCart]);
    return showCart ? <div className="shopping-cart backdrop-blur-sm fixed w-full h-full z-50 select-none">
        <div onClick={()=>setShowCart(false)} className="overlay fixed z-30 h-full w-full bg-gray-400 opacity-35 cursor-pointer"></div>
        <div style={showCart? mountedStyle : unmountedStyle} className="fixed top-0 right-0 w-5/6 sm:w-4/6 md:w-1/2 h-full z-40 bg-[#10021d] opacity-95 px-4 py-2 flex flex-col justifys-between">
            <div className="cart-header flex items-center justify-between text-white sm:text-4xl text-3xl font-pixel pt-2 pb-4">
                <span>Shopping Cart</span>
                <FaShoppingBasket/>
            </div>
            <div className="cart-items py-2 overflow-auto h-full">
                {userCart.length > 0? userCart.map((item)=>{
                    return <div key={item.selectedItem.img} className="grid grid-cols-4 items-center gap-2 p-2 border-b border-b-gray-300">
                            <div className="item-img col-span-1 h-40 flex items-center">
                                <img src={item.selectedItem.img} alt={item.selectedItem.title} />
                            </div>
                            <div className="col-span-3 text-white font-pixel ">
                                <div className="item-title-price flex  items-center justify-between font-semibold text-2xl">
                                    <div className="item-title ">{item.selectedItem.title}</div>
                                    <div className="item-price font-semibold flex items-center gap-2">
                                        {item.selectedItem.price*item.quantity}
                                        <img src={staticCoin} width={30} alt='static coin' />
                                    </div>
                                </div>
                                <div className="item-desc text-gray-300">{item.selectedItem.desc}</div>
                                <div className="cart-action flex items-center justify-between pe-2">
                                    <div className="item-quantity flex items-center gap-4 mt-2">
                                        <FaChevronLeft onClick={()=>decrementQuantity(item.selectedItem)} className="cursor-pointer hover:text-gray-400" />
                                        <div className="quantity">{item.quantity}</div>
                                        <FaChevronRight onClick={()=>incrementQuantity(item.selectedItem)} className="cursor-pointer hover:text-gray-400" />
                                    </div>
                                    <div onClick={()=>removeItemFromCart(item.selectedItem)} className="item-remove text-white cursor-pointer hover:text-red-500">
                                        <FaTrashAlt/>
                                    </div>
                                </div>
                            </div>
                    </div>
                }).reverse() :
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