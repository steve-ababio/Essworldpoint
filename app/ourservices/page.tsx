import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ServiceCard from "../components/servicescard/servicescard";
import { services } from "../data/data";

export default function OurServices(){
    return(
        <main className="h-full w-full relative">
            <Navbar colortype="black"/>
            <section className=" px-10 relative top-[80px] pb-10">
                <h1 className="font-bold text-slate-600 pt-10 text-[26px] lg:text-[30px] whitespace-pre-wrap text-center mb-6 lg:mb-8">What do we do? </h1>
                <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-x-6 gap-y-10 pb-6">
                   {
                    services.map(({title,body,image})=>(<ServiceCard key={title} image={image} title={title} body={body}/>))
                   }
                </div>
            </section>
            <Footer />
        </main>
    )
}