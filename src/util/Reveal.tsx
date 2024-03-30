import { motion,useInView, useAnimation } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

type RevealProps = {
    children:ReactNode
    className?:string
    style?:any,
    opacity?:number | string
    x?:number | string
    y?:number | string
    scale?: number | string
    duration?: number
}

export const Reveal = ({children,className,style, opacity, x, y, scale,duration}:RevealProps)=>{
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const animationControl = useAnimation();
    useEffect(()=>{
        if(isInView){
            animationControl.start('visible')
        }
    },[isInView,animationControl])
    return <motion.div ref={ref}
        className={className}
        style={style}
        variants={{
            hidden:{opacity:opacity,x:x,y:y,scale:scale},
            visible:{opacity:1,x:0,y:0,scale:1}
            }}
        initial='hidden'
        animate={animationControl}
        transition={{duration:duration}}>
            {children}
        </motion.div>
}

Reveal.defaultProps = {
    opacity:0, 
    x:'0',
    y:'0',
    scale:0.5,
    duration:0.4
}