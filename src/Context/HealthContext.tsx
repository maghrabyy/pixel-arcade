import { Dispatch, ReactNode,SetStateAction,createContext,useState, useEffect, useRef } from "react"
import moment from "moment";

type refillHealthTimerType = {
    minutes:number | string;
    seconds:number | string;
}

type stateContextType = {
    userHealth:number;
    refillHealtherTimer:refillHealthTimerType;
    refillHealth:VoidFunction
    setUserHealth:Dispatch<SetStateAction<number>>;
}
const HealthContext = createContext<stateContextType>(null as unknown as stateContextType);

export const HealthProvider = ({children}:{children:ReactNode})=>{
    const [userHealth,setUserHealth] = useState(4);
    const [refillTimer,setRefillTimer] = useState(moment.duration(15, 'minutes'));
    let refillInterval = useRef<null | NodeJS.Timeout>(null);
    const resetRefillTimer = ()=>{
        setRefillTimer(moment.duration(15, 'minutes'));
    }
    const refillHealth = () =>{
        resetRefillTimer();
        setUserHealth(4);
    }
    useEffect(()=>{
        if(userHealth === 0){
            refillInterval.current = setInterval(() => {
                setRefillTimer(prevTime => {
                  if (prevTime.asSeconds() <= 0) {
                    clearInterval(refillInterval.current as NodeJS.Timeout);
                    refillHealth();
                    return prevTime;
                  }
                  return moment.duration(prevTime.asSeconds() - 1, 'seconds');
                });
              }, 1000);
          
              return () => clearInterval(refillInterval.current as NodeJS.Timeout);
        }else{
            clearInterval(refillInterval.current as NodeJS.Timeout);
        }
    },[userHealth])

    const refillHealtherTimer:refillHealthTimerType = {
        minutes:refillTimer.minutes() < 10? '0' + refillTimer.minutes() : refillTimer.minutes(),
        seconds:refillTimer.seconds() < 10? '0' + refillTimer.seconds() : refillTimer.seconds(),
    }
    const valueToShare = {
        userHealth,
        refillHealtherTimer,
        refillHealth,
        setUserHealth
    }
    return <HealthContext.Provider value={valueToShare}>
        {children}
    </HealthContext.Provider>
}

export default HealthContext;