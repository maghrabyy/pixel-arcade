import { Navbar } from "../components/navbar"
// import { Footer } from "../components/Footer"
import { ToggleableSidebar } from "../components/ToggleableSidebar"
import { ShopppingCart } from "../components/ShoppingCart"
import { LandingPage } from "../pages/Landing Page/LandingPage"
import { useOutlet } from "react-router-dom"
import { useNavHeight } from "../Custom Hooks/useNavHeight"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const RootLayout = ()=>{
    const location = useLocation().pathname;
    const navHeight = useNavHeight();
    const outlet = useOutlet();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
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