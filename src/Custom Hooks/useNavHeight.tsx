import { useEffect,useState } from "react";
import { navHeight } from "../components/navbar";

export const useNavHeight = ()=>{
    const [contentTopPadding,setContentTopPadding] = useState<number | undefined>(0);
    useEffect(()=>{
        setContentTopPadding(navHeight);
    },[]);
    return contentTopPadding;
}
