import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { IUserItem,ICartItem } from "../interfaces/Item.interface";


type ContextType = {
    userItems:Array<IUserItem>;
    setUserItems:Dispatch<SetStateAction<Array<IUserItem>>>;
    addItems:(cartItems:Array<ICartItem>)=>void;
}


const UserItemsContext = createContext<ContextType>(null as unknown as ContextType);

export const UserItemsProvider = ({children}:{children:ReactNode})=>{
    const [ userItems, setUserItems ] = useState(Array<IUserItem>);
    const addItems = (cartItems:Array<ICartItem>) =>{
        
        for (const cartItem of cartItems) {
            if(userItems.map(item=>item.img).includes(cartItem.selectedItem.img)){
                const itemsArray = [...userItems];
                const userItemIndex = userItems.map(item=>item.img).indexOf(cartItem.selectedItem.img)
                const updatedUserItem:IUserItem = {...userItems[userItemIndex], quantity: userItems[userItemIndex].quantity+cartItem.quantity};
                itemsArray[userItemIndex] = updatedUserItem;
                setUserItems(itemsArray);
            }else{
                const selectedCartItems:IUserItem[] = cartItems.map(cartItem=>({...cartItem.selectedItem,quantity:cartItem.quantity}))
                const updatedUserItems = [...userItems,...selectedCartItems];
                setUserItems(updatedUserItems);
            }
        }
    }
    const valueToShare = {
        userItems,
        setUserItems,
        addItems
    }
    return <UserItemsContext.Provider value={valueToShare}>
        {children}
    </UserItemsContext.Provider>
}

export default UserItemsContext;