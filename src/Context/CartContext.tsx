import {Dispatch, ReactNode,SetStateAction, createContext, useState } from "react";
import { IItem, ICartItem } from "../interfaces/Item.interface";
import { useAlert } from "./AlertContext";
import { FaShoppingBasket } from "react-icons/fa";

type stateContextType = {
    userCart:Array<ICartItem>;
    setUserCart:Dispatch<SetStateAction<Array<ICartItem>>>;
    addItemToCart:(item:IItem)=>void;
    removeItemFromCart:(item:IItem)=>void;
    incrementQuantity:(item:IItem)=>void;
    decrementQuantity:(item:IItem)=>void;
    showCart:boolean;
    setShowCart:Dispatch<SetStateAction<boolean>>
    emptyCart:()=>void;
}
const CartContext = createContext<stateContextType>(null as unknown as stateContextType);

export const CartProvider = ({children}:{children:ReactNode})=>{
    const {displayAlert} = useAlert();
    const [userCart,setUserCart] = useState(Array<ICartItem>);
    const [showCart,setShowCart] = useState(false);
    const addItemToCart = (item:IItem)=> {
        if(!userCart.map(cartItem=>cartItem.selectedItem.img).includes(item.img)){
            const cartsArray = [...userCart,{selectedItem:item,quantity:1}]
            setUserCart(cartsArray);
            displayAlert(`${item.title} added to cart.`,'success',<FaShoppingBasket/>)
        }
    }
    const removeItemFromCart = (cartItem:IItem)=>{
        const cartsArray = [...userCart];
        setUserCart(cartsArray.filter((item=>item.selectedItem !== cartItem)))
    }
    const incrementQuantity = (cartItem:IItem)=>{
        const cartsArray = [...userCart];
        const itemIndex = cartsArray.map(item=>item.selectedItem).indexOf(cartItem);
        cartsArray[itemIndex].quantity +=1;
        setUserCart(cartsArray);
    }
    const decrementQuantity = (cartItem:IItem)=>{
        const cartsArray = [...userCart];
        const quantity = cartsArray.find(item=>item.selectedItem === cartItem)?.quantity;
        if(quantity! > 1){
            const itemIndex = cartsArray.map(item=>item.selectedItem).indexOf(cartItem);
            cartsArray[itemIndex].quantity -=1;
            setUserCart(cartsArray);
        }
    }
    const emptyCart = ()=>{
        setUserCart([]);
    }
    const valueToShare = {
        userCart,
        setUserCart,
        addItemToCart,
        removeItemFromCart,
        incrementQuantity,
        decrementQuantity,
        showCart,
        setShowCart,
        emptyCart
    }
    return <CartContext.Provider value={valueToShare}>
            {children}        
        </CartContext.Provider>
}

export default CartContext;
