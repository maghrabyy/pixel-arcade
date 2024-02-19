import { Alert } from "@mui/material";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

enum CustomAlertColors {
    success = "success",
    warning = "warning",
    error = "error"
}


export const CustomAlert = ()=>{
    const [ showAlert,setShowAlert ] = useState(false);
    const [ alertText,setAlertText ] = useState('');
    const [ alertColor,setAlertColor ] = useState(CustomAlertColors.success);
    // const diplayAlert = (text:string,colorVarient:CustomAlertColors) =>{
    //     setShowAlert(true);
    //     setAlertText(text);
    //     setAlertColor(colorVarient);
    // }
    useEffect(()=>{
        setTimeout(()=>{
            setAlertText('');
            setShowAlert(false);
        },4000)
    },[showAlert])
    return showAlert? createPortal(
        <Alert variant="filled" severity={alertColor}>{alertText}</Alert>,
        document.querySelector('.alert-container')!
    ) : null
}