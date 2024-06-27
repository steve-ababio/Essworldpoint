type ServiceCardProp = {
    image:string
    title:string,
    body:string
}
export default function ServiceCard({image,title,body}:ServiceCardProp){
    return(
        <div className="border border-slate-400/60 rounded-[10px] p-6">
           <div className="relative mb-4 h-[300px]">
                <img src={image} className="rounded-[8px] w-full h-full object-cover"  alt="blog title" />
            </div>
           <h2 className="font-bold text-slate-600 mt-5 mb-2">{title}</h2>
           <p className="text-[14px] text-slate-600">{body}</p>
        </div>
    )
}