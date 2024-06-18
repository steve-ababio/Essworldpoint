import Link from "next/link";

type NavItemProp = {
    href:string,
    children:React.ReactNode
}
export default function NavItem({href,children}:NavItemProp){
    return(
        <Link className="
            px-4 py-2 z-50 relative font-semibold before:w-full
            text-[1.0rem] duration-200 before:content-[''] before:absolute
            before:bg-white/10 before:block before:backdrop-blur-md
            before:-z-10 before:rounded-[5px] before:h-full before:opacity-0
            before:inset-0 hover:before:opacity-100
            "
            href={href}
        >
            {children}
        </Link>
    )
}