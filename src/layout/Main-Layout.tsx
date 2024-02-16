import { ReactNode,useState,useEffect } from "react"
import { Navbar } from "../components/navbar"
import { navHeight } from "../components/navbar"

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout = ({children}:MainLayoutProps)=>{
    const [contentTopPadding,setContentTopPadding] = useState<number | undefined>(0);
    useEffect(()=>{
        setContentTopPadding(navHeight);
    },[]);
    return <div className="main-layout">
        <Navbar/>
        <div style={{paddingTop:contentTopPadding}}>
            {children}
        </div>
    </div>
}