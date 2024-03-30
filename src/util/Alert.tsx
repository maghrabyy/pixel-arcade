import { ReactNode } from "react";
import { createPortal } from "react-dom";
import {motion} from 'framer-motion';

export enum CustomAlertColors {
    success = "success",
    warning = "warning",
    error = "error"
}

type CustomerAlertType = {
    showAlert:boolean
    alertColor:keyof typeof CustomAlertColors
    outline:boolean
    alertText:string
    alertIcon?:ReactNode
}
export const CustomAlert = ({showAlert,alertColor,alertText,outline, alertIcon}:CustomerAlertType)=>{
    const alertVarient = {
        success:outline? 'border border-green-500 text-green-500' : 'bg-green-500 text-white',
        warning:outline? 'border border-yellow-700 text-yellow-700' : 'bg-yellow-700 text-white',
        error:outline? 'border border-red-600 text-red-600' : 'bg-red-600 text-white'
    }
    const textStyle = 'text-lg font-pixel';
    const alertStyle = 'p-2 rounded-md shadow-md';
    return showAlert? createPortal(
        <motion.div 
        initial={{translateX:'-100%'}} 
        animate={{translateX:0}} 
        className={`fixed top-1 left-1 z-[100] ${alertVarient[alertColor]} ${textStyle} ${alertStyle} flex items-center gap-2`}>
            {alertIcon}
            {alertText}
        </motion.div>,
        document.querySelector('.alert-container')!
    ) : null
}