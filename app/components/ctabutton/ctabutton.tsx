import { twMerge } from "tailwind-merge";

interface CtaButtonProp extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode
}
export default function CtaButton({className,children}:CtaButtonProp){
    return(
        <button
            className={twMerge(`
                bg-white py-3 px-10 rounded-[5px] text-slate-900
                font-bold duration-300 hover:opacity-70 text-[16px]`,className)
            }
        >
        {children}
        </button>
    )
}