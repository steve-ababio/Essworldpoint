import AboutUsCard from "@/app/components/aboutuscard/aboutuscard";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import { aboutus } from "../data/data";

export default function About(){
    return(
        <main className="h-full w-full relative">
            <Navbar colortype="black" />
            <section className="relative top-[80px] pb-10 px-10">
                <h1 className="font-bold text-slate-600 pt-10 text-[26px] lg:text-[30px] whitespace-pre-wrap text-center mb-6 lg:mb-8">ABOUT US</h1>
                <p className="max-w-[55rem] text-slate-600 w-fulltext-slate-600 mx-auto">
                    Essworld Point was born out of a long awaited dream of
                    getting it right with a team of combined experience 
                    over 30 years of like minded and traveled around the 
                    world extensively,made up of Business Administrators, 
                    Marine Engineers, Welders, Artist of right comprehensive 
                    onboarding services that help your new hires feel welcome 
                    and prepared for their new roles. From paperwork to orientation, 
                    we've got you covered.
                </p>
                <div className="py-12 grid justify-center grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-x-6 gap-y-10 pb-6">
                    {
                        aboutus.map(({title,body,icon})=>(<AboutUsCard key={title} Icon={icon} title={title} body={body}/>))
                    }
                </div>
            </section>
            <Footer />
        </main>
    )
}