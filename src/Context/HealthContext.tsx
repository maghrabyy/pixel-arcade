import { Dispatch, ReactNode,SetStateAction,createContext,useState } from "react"

type stateContextType = {
    userHealth:number;
    setUserHealth:Dispatch<SetStateAction<number>>;
}
const HealthContext = createContext<stateContextType>(null as unknown as stateContextType);

export const HealthProvider = ({children}:{children:ReactNode})=>{
    const [userHealth,setUserHealth] = useState(4);
    const valueToShare = {
        userHealth,
        setUserHealth
    }
    return <HealthContext.Provider value={valueToShare}>
        {children}
    </HealthContext.Provider>
}

export default HealthContext;