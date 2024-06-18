import { companyprinciples } from "@/app/data/data";
import AboutCard from "../aboutcard/aboutcard";


export default function About(){
    return(
        <section className="py-10 px-5"> 
            <h2 className="text-[2rem] mb-12 text-slate-700 font-bold text-center">ABOUT ESSWORLDPOINT</h2>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center gap-6">
                {
                    companyprinciples.map(({id,body,title,imageurl,cardcolor})=>(<AboutCard key={id} edgecolor={cardcolor} body={body} title={title} imageurl={imageurl} />))
                }
            </div>
        </section>
    )
}