import { useNavHeight } from "../../util/Custom Hooks/useNavHeight"

export const MyItemsPage = ()=>{
    const navHeight = useNavHeight();
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
    </div>
}