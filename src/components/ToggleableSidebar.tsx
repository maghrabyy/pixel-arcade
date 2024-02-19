import { useContext,useEffect } from "react"
import NavContext from "../Context/NavContext"
import { IoGameController } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiSolidInvader } from "react-icons/bi";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import UserContext from "../Context/UserContext";

export const ToggleableSidebar = ()=>{
    const {showNav,setShowNav} = useContext(NavContext);
    const { userAvatar, displayName } = useContext(UserContext);
    const mountedStyle = { animation: "inNavAnimation 300ms ease-in" };
    const unmountedStyle = {
    animation: "outNavAnimation 340ms ease-out",
    animationFillMode: "forwards"
    };
    useEffect(() => {
        if(showNav){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
     }, [showNav]);
    return showNav? <div className={`toggle-nav fixed backdrop-blur-sm w-full h-full z-50 md:hidden`}>
        <div onClick={()=>setShowNav(false)} className="overlay fixed h-full w-full bg-gray-400 opacity-35 cursor-pointer z-30"></div>
        <div  style={showNav? mountedStyle : unmountedStyle} className="nav-menu fixed top-0 left-0 h-full w-5/6 sm:w-4/6 md:w-1/2 z-40 opacity-95  bg-[#10021d]">
            <div onClick={()=>setShowNav(false)} className="close-sidebar z-50 fixed top-3 left-5 text-white font-pixel text-4xl cursor-pointer hover:text-gray-300">X</div>
            <div className="mav-items flex flex-col gap-10 justify-center h-full">
                <div className="user-info flex items-center border-y-2 border-white py-4 gap-4 px-6">
                    <Avatar className="bg-white pt-2" src={userAvatar} alt="user avatar" />
                    <p className="rand-user-name text-white font-pixel text-2xl">{displayName}</p>
                </div>
                <div className="nav-links flex flex-col gap-8 justify-center px-6 text-4xl">
                    <NavLink to={'/'} onClick={()=>setShowNav(false)} className="nav-item ps-2 flex justify-between gap-2"><span>Home</span><IoHome/></NavLink>
                    <NavLink to={'/console'} onClick={()=>setShowNav(false)} className="nav-item ps-2 flex justify-between gap-2"><span>Arcade</span><IoGameController/></NavLink>
                    <NavLink to={'/items-shop'} onClick={()=>setShowNav(false)} className="nav-item ps-2 flex justify-between gap-2"><span>Items Shop</span><FaShoppingBag/></NavLink>
                    <NavLink to={'/my-items'} onClick={()=>setShowNav(false)} className="nav-item ps-2 flex justify-between gap-2"><span>My Items</span><BiSolidInvader/></NavLink>
                    <NavLink to={'/aboutus'} onClick={()=>setShowNav(false)} className="nav-item ps-2 flex justify-between gap-2"><span>About</span><FaPersonCircleQuestion/></NavLink>
                </div>
            </div>

        </div>
  </div> : null
}