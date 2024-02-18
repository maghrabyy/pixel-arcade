import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { IItem, IUserItem } from "../interfaces/Item.interface";
import staticCoin from '../assets/images/objects/staticcoin.png';
import { Button } from '../util/Button';
import { FaShoppingBasket } from "react-icons/fa";

type ItemCardProps = {
    item:IItem | IUserItem
    ownedItem?:boolean
    horizontalAlign?:boolean
}
export const ItemCard = ({item, ownedItem, horizontalAlign = false}:ItemCardProps)=>{
    const { addItemToCart } = useContext(CartContext);

    const AddToCartHandler = ()=>{
            addItemToCart(item);
    }
    return <div className={`item-card relative overflow-hidden text-white font-pixel text-lg bg-black bg-opacity-60 ${horizontalAlign ? 'grid grid-cols-6 items-center' : 'flex flex-col justify-end h-[400px]'} px-4 rounded-md py-2`}>
        <div className={`img ${horizontalAlign? 'border-r-2' : 'border-b-2'} flex justify-center items-end col-span-1`}>
            <img src={item.img} className='pr-2' alt={item.title} />
        </div>
        <div className="item-info col-span-5">
            <div className="title-desc pl-3">
                <h1 className='title flex items-center justify-between text-2xl'>{item.title} {ownedItem? <span className="quantity">{'quantity' in item ? item.quantity : null}</span> : null}</h1>
                <p className='desc text-gray-400 text-sm'>{item.desc}</p>
            </div>
            {!ownedItem ? <div className="item-price flex justify-center items-center">
                <p>{item.price}</p> <img src={staticCoin} width={25} alt="static pixel coin" />
            </div> : null}
            {!ownedItem ? <div className="add-to-cart absolute top-3 left-1/2 -translate-x-1/2">
                    <Button onClick={AddToCartHandler} width={170}>
                        <span>Add To Cart</span>
                        <FaShoppingBasket />
                    </Button>
            </div> : null}
        </div>
    </div>
}