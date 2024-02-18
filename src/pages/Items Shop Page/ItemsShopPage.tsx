import { navHeight } from "../../components/navbar"
import { ItemsShop } from "../../components/ItemsShop"

export const ItemsShopPage = ()=>{
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
        <ItemsShop/>
    </div>
}