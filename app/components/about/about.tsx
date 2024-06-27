import { companyprinciples } from "@/app/data/data";
import AboutCard from "../aboutcard/aboutcard";


export default function About(){
    return(
        <section className="pt-16"> 
            <h2 className="text-[25px] md:text-[30px] lg:text-[35px] mb-10 text-slate-700 font-bold text-center">ABOUT ESSWORLDPOINT</h2>
            <div className="
                w-full justify-center flex flex-col gap-6
                max-w-full min-[857px]:items-start min-[857px]:grid
                min-[857px]:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
                {
                    companyprinciples.map(({id,body,title,imageurl,cardcolor})=>(<AboutCard key={id} edgecolor={cardcolor} body={body} title={title} imageurl={imageurl} />))
                }
            </div>
        </section>
    )
}