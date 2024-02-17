import { useContext,useEffect } from "react"
import NavContext from "../Context/NavContext"
import { IoGameController } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiSolidInvader } from "react-icons/bi";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const ToggleableSidebar = ()=>{
    const navigate = useNavigate();
    const {showNav,setShowNav} = useContext(NavContext);
    const mountedStyle = { animation: "inNavAnimation 250ms ease-in" };
    const unmountedStyle = {
    animation: "outNavAnimation 270ms ease-out",
    animationFillMode: "forwards"
    };
    const sidebarBgs = [
        'bg-[url(assets/images/sidebarbg-night.png)] bg-contain bg-center',
        'bg-[url(assets/images/sidebarbg-calmnight.png)] bg-cover bg-center',
        'bg-[url(assets/images/sidebarbg-day.png)] bg-cover bg-center',
        'bg-[url(assets/images/sidebarbg-winter.png)] bg-cover',
        'bg-[url(assets/images/pixelcity.jpg)] bg-cover bg-center'
    ]
    useEffect(() => {
        if(showNav){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
     }, [showNav]);
     const navToPage = (path:string) =>{
        setShowNav(false);
        navigate(path);
     }
    return showNav? <div style={showNav? mountedStyle : unmountedStyle} className={`toggle-sidebar fixed top-0 left-0 h-full w-full z-50 bg-[#10021d] ${sidebarBgs[4]} `}>
        <div onClick={()=>setShowNav(false)} className="close-sidebar absolute top-2 left-5 text-white font-pixel text-4xl cursor-pointer hover:text-gray-300">X</div>
        <div className="flex flex-col justify-center items-center h-full text-4xl nav-menu gap-3">
            <div onClick={()=>navToPage('/')} className="nav-item flex justify-center gap-2"><IoHome/><span>Home</span></div>
            <div onClick={()=>navToPage('/console')} className="nav-item flex justify-center gap-2"><IoGameController/><span>Arcade</span></div>
            <div onClick={()=>navToPage('/items-shop')} className="nav-item flex justify-center gap-2"><FaShoppingBag/><span>Items Shop</span></div>
            <div onClick={()=>navToPage('/my-items')} className="nav-item flex justify-center gap-2"><BiSolidInvader/><span>My Items</span></div>
            <div onClick={()=>navToPage('/aboutus')} className="nav-item flex justify-center gap-2"><FaPersonCircleQuestion/><span>About</span></div>
        </div>
  </div> : null
}