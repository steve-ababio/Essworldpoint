import { IconType } from "react-icons"

type ServiceCardProp = {
    Icon:IconType
    title:string,
    body:string
}
export default function AboutUsCard({Icon,title,body}:ServiceCardProp){
    return(
        <div className="border border-slate-400/60 rounded-[10px] p-6">
           <div className="h-12 w-12 bg-[#335eb6] flex-row-center rounded-[50%]"><Icon size={20} className="text-white"/></div>
           <h2 className="font-bold text-slate-600 mt-5 mb-2">{title}</h2>
           <p className="text-[14px] text-slate-600">{body}</p>
        </div>
    )
}