"use client"
import { useEffect, useState } from "react";
import Header from "@/app/components/header/header";
import Desktop from "@/app/components/desktop/desktop";
import Mobile from "@/app/mobile/mobile";
import { twMerge } from "tailwind-merge";

const SCROLL_THRESHOLD = 30;

export default function Navbar({colortype}:{colortype?:"black"|"white"}){
    const [scrolldistancereached,setScrolledDistanceReached] = useState(false);
    const [showmobilemenu,setShowMobileMenu] = useState(false);
    
    useEffect(function(){
        if(window){
            window.addEventListener("scroll",checkScrollDistance);
        }
        return function(){
            window.removeEventListener("scroll",checkScrollDistance);
        }
    },[])
    function checkScrollDistance(){
        if(window.scrollY >= SCROLL_THRESHOLD){
            setScrolledDistanceReached(true);
        }else{
            setScrolledDistanceReached(false);
        }
    }
    function toggleMobileMenu(){
        setShowMobileMenu(!showmobilemenu);
    }
    function closeMobileMenu(){
        setShowMobileMenu(false);
    }
    return(
        <nav className={twMerge(`
            fixed z-[1000] top-0 left-0 flex items-center py-4 h-[80px] md:px-10 w-full
            ${colortype === "black" ? 'bg-[#1e1e1e]':'transparent'}
            ${showmobilemenu ?'bg-white text-slate-600':''}  text-white px-5
            ${scrolldistancereached ? !showmobilemenu ? 'bg-black/70 backdrop-blur-lg duration-300':'':''}`
        )}>
            <Header showmobilemenu={showmobilemenu}  toggleMobileMenu={toggleMobileMenu} />
            <Desktop />
            {showmobilemenu && <Mobile closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}