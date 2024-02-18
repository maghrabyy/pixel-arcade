import { Navbar } from "../components/navbar"
// import { Footer } from "../components/Footer"
import { ToggleableSidebar } from "../components/ToggleableSidebar"
import { ShopppingCart } from "../components/ShoppingCart"
import { LandingPage } from "../pages/Landing Page/LandingPage"
import { useOutlet } from "react-router-dom"
import { useNavHeight } from "../util/Custom Hooks/useNavHeight"

export const RootLayout = ()=>{
    const navHeight = useNavHeight();
    const outlet = useOutlet();
    return <div className="main-layout flex flex-col h-full">
        <ToggleableSidebar/>
        <ShopppingCart/>
        <Navbar/>
        <div style={{paddingTop:navHeight}}>
            {outlet??
                <LandingPage />
            }
        </div>
        {/* <Footer className="mt-auto"/> */}
    </div>
}