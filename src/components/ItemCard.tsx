import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { IItem } from "../interfaces/Item.interface";
import staticCoin from '../assets/images/objects/staticcoin.png';
import { Button } from '../util/Button';
import { FaShoppingBasket } from "react-icons/fa";

type ItemCardProps = {
    item:IItem
}
export const ItemCard = ({item}:ItemCardProps)=>{
    const { addItemToCart } = useContext(CartContext);

    const AddToCartHandler = ()=>{
            addItemToCart(item);
    }
    return <div className="item-card relative overflow-hidden bg-black select-none bg-opacity-60 h-[400px] flex flex-col justify-end px-4 rounded-md py-2">
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