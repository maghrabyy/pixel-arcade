import { ReactNode,useState,useEffect } from "react"
import { Navbar } from "../components/navbar"
import { navHeight } from "../components/navbar"
import { LandingPage } from "../components/LandingPage"

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout = ({children}:MainLayoutProps)=>{
    const [contentTopPadding,setContentTopPadding] = useState<number | undefined>(0);
    useEffect(()=>{
        setContentTopPadding(navHeight);
    },[]);
    return <div className="main-layout">
        <div className="navbar-landing">
            <Navbar/>
            <div className="landing" style={{paddingTop:contentTopPadding}}>
                <LandingPage/>
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
}