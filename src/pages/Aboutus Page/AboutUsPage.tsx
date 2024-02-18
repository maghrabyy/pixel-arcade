import { useNavHeight } from "../../util/Custom Hooks/useNavHeight"

export const AboutUsPage = ()=>{
    const navHeight = useNavHeight();
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>

    </div>
}