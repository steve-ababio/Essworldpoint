import CtaButton from "../ctabutton/ctabutton";
import Navbar from "../navbar/navbar";


export default function Home(){
    return (
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-image">
            <Navbar />
            <div className="h-[calc(100%-80px)] flex-col-center gap-y-8 text-white">
                <div className="flex-col-center px-5">
                    <h2 className="text-[2rem] md:text-[3.8rem] text-center w-fit max-w-[60rem] whitespace-pre-wrap uppercase font-bold">Transform Your Crew Management</h2>
                    <h3 className="text-[1.3rem] text-center font-medium">Expert guidance for your business's CM needs</h3>
                </div>
               <CtaButton>Learn more</CtaButton>
            </div>
        </div>
    )
}