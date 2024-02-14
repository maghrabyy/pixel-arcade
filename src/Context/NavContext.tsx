import { Dispatch, ReactNode,SetStateAction,createContext,useState } from "react"

type stateContextType = {
    showNav:boolean;
    setShowNav:Dispatch<SetStateAction<boolean>>;
}
const NavContext = createContext<stateContextType>(null as unknown as stateContextType);

export const NavProvider = ({children}:{children:ReactNode})=>{
    const [showNav,setShowNav] = useState(false);
    const valueToShare = {
        showNav,
        setShowNav
    }
    return <NavContext.Provider value={valueToShare}>
        {children}
    </NavContext.Provider>
}

export default NavContext;