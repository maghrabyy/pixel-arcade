import {Dispatch, ReactNode,SetStateAction, createContext, useState } from "react";
import { IItem } from "../interfaces/Item.interface";


type stateContextType = {
    userCart:Array<IItem>;
    setUserCart:Dispatch<SetStateAction<Array<IItem>>>;
    addItemToCart:(item:IItem)=>void;
    removeItemFromCart:(item:IItem)=>void;
    showCart:boolean;
    setShowCart:Dispatch<SetStateAction<boolean>>
}
const CartContext = createContext<stateContextType>(null as unknown as stateContextType);

export const CartProvider = ({children}:{children:ReactNode})=>{
    const [userCart,setUserCart] = useState(Array<IItem>);
    const [showCart,setShowCart] = useState(false);
    const addItemToCart = (item:IItem)=> {
        if(!userCart.includes(item)){
            const cartsArray = [...userCart,item]
            setUserCart(cartsArray);
        }
    }
    const removeItemFromCart = (cartItem:IItem)=>{
        const cartsArray = [...userCart];
        setUserCart(cartsArray.filter((item=>item !== cartItem)))
    }
    const valueToShare = {
        userCart,
        setUserCart,
        addItemToCart,
        removeItemFromCart,
        showCart,
        setShowCart
    }
    return <CartContext.Provider value={valueToShare}>
            {children}        
        </CartContext.Provider>
}

export default CartContext;
