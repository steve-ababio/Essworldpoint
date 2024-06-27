import NavItem from "../navitems/navitems";

export default function Desktop(){
    return(
        <div className="relative ml-auto pr-10 md:block hidden">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/ourservices">Our services</NavItem>
                <NavItem href="/contactus">Contact us</NavItem>
                <NavItem href="/about">About us</NavItem>
            </div>
    )
}