import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface AboutCardProps {
    title:string,
    body:string,
    imageurl:string,
    edgecolor:string
}
export default function AboutCard({title,body,imageurl,edgecolor}:AboutCardProps){
    return(
        <div className={twMerge(`border border-l-8 rounded-[8px] py-7 px-5 h-full border-slate-400/40`,edgecolor)}>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-[18px] font-bold text-slate-700 ">{title}</h2>
                <div className="w-10 h-10 flex-row-center"><Image src={imageurl} width={512} height={512} className="" alt="telescope"/></div>
            </div>
            <p className="text-slate-600 text-[1rem]">
               {body}
            </p>
        </div>
    )
}