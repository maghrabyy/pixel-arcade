import { useState,useEffect } from "react"
import { Navbar } from "../components/navbar"
import { navHeight } from "../components/navbar"
// import { Footer } from "../components/Footer"
import { ToggleableSidebar } from "../components/ToggleableSidebar"
import { ShopppingCart } from "../components/ShoppingCart"
import { LandingPage } from "../pages/Landing Page/LandingPage"
import { useOutlet } from "react-router-dom"
// import { navHeight } from "../components/navbar"

export const MainLayout = ()=>{
    const [contentTopPadding,setContentTopPadding] = useState<number | undefined>(0);
    useEffect(()=>{
        setContentTopPadding(navHeight);
    },[]);
    const outlet = useOutlet();
    return <div className="main-layout flex flex-col h-full">
        <ToggleableSidebar/>
        <ShopppingCart/>
        <Navbar/>
        <div style={{paddingTop:contentTopPadding}}>
            {outlet??
                <LandingPage />
            }
        </div>
        {/* <Footer className="mt-auto"/> */}
    </div>
}