import Header from "../header/header";
import NavItem from "../navitems/navitems";

export default function Navbar(){
    return(
        <nav className="flex items-center py-4 h-[80px] text-white px-10">
            <Header />
            <div className="ml-auto pr-10">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/services">Our services</NavItem>
                <NavItem href="/contact">Contact us</NavItem>
                <NavItem href="/about">About us</NavItem>
            </div>
        </nav>
    )
}