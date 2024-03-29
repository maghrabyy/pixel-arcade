import { ItemsShop } from "../../components/ItemsShop"
import { useNavHeight } from "../../Custom Hooks/useNavHeight"

export const ItemsShopPage = ()=>{
    const navHeight = useNavHeight();
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
        <ItemsShop/>
    </div>
}