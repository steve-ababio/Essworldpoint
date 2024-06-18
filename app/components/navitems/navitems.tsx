import Link from "next/link";

type NavItemProp = {
    href:string,
    children:React.ReactNode
}
export default function NavItem({href,children}:NavItemProp){
    return(
        <Link className="px-4 py-2 font-semibold text-[1.1rem] duration-200 hover:scale-[1.05] " href={href}>
            {children}
        </Link>
    )
}