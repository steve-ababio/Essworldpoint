import { CgClose } from "react-icons/cg"
import { RxHamburgerMenu } from "react-icons/rx"

interface HeaderProps {
    toggleMobileMenu:()=>void,
    showmobilemenu:boolean
}
export default function Header({toggleMobileMenu,showmobilemenu}:HeaderProps) {
    return (
        <header className={`font-bold text-[1.3rem] self-center flex items-center w-full md:w-auto  md:block justify-between ${showmobilemenu ?'  text-slate-600':''}`}>
            <h1>ESSWORLDPOINT</h1>
            <button className="md:hidden" onClick={toggleMobileMenu}>
                {showmobilemenu ? <CgClose size={30} />:<RxHamburgerMenu  size={30} color="white"/>}
            </button>
        </header>
    )
}