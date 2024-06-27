import { twMerge } from "tailwind-merge"

interface SlideShowIndicatorProp extends React.HtmlHTMLAttributes<HTMLDivElement>{

}
export default function SlideShowIndicator({className}:SlideShowIndicatorProp){
    return(
        <div className={twMerge('h-3 w-3 rounded-[50%] bg-gray-400',className)}></div>
    )
}