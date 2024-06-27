import NavItem from "../components/navitems/navitems";

interface MobileMenuProps {
    closeMobileMenu:()=>void;
}
export default function Mobile({closeMobileMenu}:MobileMenuProps){
    return(
        <div className={` h-[calc(100%-80px)] bg-white text-slate-600 duration-300 origin-top z-[1000] fixed inset-0 top-[80px]`}>
            <div className="h-full w-full flex flex-col items-center gap-y-14 py-10 ">
                <NavItem href="/" >
                    <div onClick={closeMobileMenu}>HOME</div>
                </NavItem>
                <NavItem href="/ourservices" >
                    <span>OUR SERVICES</span>
                </NavItem>
                <NavItem href="/contactus" >
                    <div onClick={closeMobileMenu}>CONTACT US</div>
                </NavItem>
                <NavItem href="/about">
                    <span>ABOUT US</span>
                </NavItem>
            </div>
        </div>
    )
}