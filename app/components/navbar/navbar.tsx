"use client"
import { useEffect, useState } from "react";
import Header from "@/app/components/header/header";
import NavItem from "@/app/components/navitems/navitems";

const SCROLL_THRESHOLD = 30;
export default function Navbar(){
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
    return(
        <nav className={`
            fixed z-[1000] top-0 left-0 w-full 
            flex items-center py-4 h-[80px] text-white 
            px-10 ${scrolldistancereached ? 'bg-black duration-300':''}`
        }>
            <Header />
            <div className="relative ml-auto pr-10">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/services">Our services</NavItem>
                <NavItem href="/contact">Contact us</NavItem>
                <NavItem href="/about">About us</NavItem>
            </div>
        </nav>
    )
}