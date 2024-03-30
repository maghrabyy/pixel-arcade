import { useState,createContext,useContext, ReactNode, useRef } from "react";
import { CustomAlertColors, CustomAlert } from "../util/Alert";
import { PiCoins } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

type alertContextType = {
    displayAlert:(text:string,colorVarient:keyof typeof CustomAlertColors,alertIcon?:ReactNode)=>void
    insufficientCoinsAlert:()=>void
    playerWonAlert:(coinsAmount:number)=>void
    playerLostAlert:()=>void
}

const AlertContext = createContext<alertContextType>(null as unknown as alertContextType);

export const useAlert = ()=>{
    const alertContext = useContext(AlertContext)
    return alertContext;
}


export const AlertProvider = ({children}:{children:ReactNode})=>{
    const [ showAlert,setShowAlert ] = useState(false);
    const [ alertText,setAlertText ] = useState('');
    const [ alertColor,setAlertColor ] = useState<keyof typeof CustomAlertColors>('success');
    const [ alertIcon, setAlertIcon ] = useState<ReactNode>(null);
    
    let alertTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetAlert = ()=>{
        setAlertText('');
        setAlertIcon(null);
        setShowAlert(false);
    }
    const displayAlert = (text:string,colorVarient:keyof typeof CustomAlertColors, alertIcon?:ReactNode) =>{
        if(alertTimeoutRef.current){
            clearTimeout(alertTimeoutRef.current as NodeJS.Timeout)
        }
        setShowAlert(true);
        setAlertText(text);
        setAlertColor(colorVarient);
        setAlertIcon(alertIcon);
        alertTimeoutRef.current = setTimeout(resetAlert,4000);
    }

    const playerWonAlert = (coinsAmount:number) => displayAlert(`+${coinsAmount}`,'success',<PiCoins/>)
    const playerLostAlert = ()=> displayAlert('-1','error',<FaHeart/>);
    const insufficientCoinsAlert = ()=> displayAlert('You have insufficient pixel coins','warning',<PiCoins/>);

    const valueToShare = {
        insufficientCoinsAlert,
        displayAlert,
        playerWonAlert,
        playerLostAlert
    }
    return <AlertContext.Provider value={valueToShare}>
        <CustomAlert showAlert={showAlert}
         outline={false} 
         alertColor={alertColor} 
         alertIcon={alertIcon} 
         alertText={alertText} />
        {children}
    </AlertContext.Provider>
}