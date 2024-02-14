import { Dispatch, ReactNode,SetStateAction,createContext,useState } from "react"

type stateContextType = {
    userCoins:number;
    setUserCoins:Dispatch<SetStateAction<number>>;
    payWithCoins:(amount:number)=>void;
    addCoins:(amount:number)=>void
}
const CoinsContext = createContext<stateContextType>(null as unknown as stateContextType);

export const CoinsProvider = ({children}:{children:ReactNode})=>{
    const [userCoins,setUserCoins] = useState(100);
    const payWithCoins = (amount:number)=>{
        if(userCoins>=amount){
            setUserCoins(userCoins-amount)
        }
    }
    const addCoins = (amount:number)=>{
        setUserCoins(userCoins+amount)
    }
    const valueToShare = {
        userCoins,
        setUserCoins,
        payWithCoins,
        addCoins
    }
    return <CoinsContext.Provider value={valueToShare}>
        {children}
    </CoinsContext.Provider>
}

export default CoinsContext;