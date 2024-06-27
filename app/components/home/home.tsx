import CtaButton from "@/app/components/ctabutton/ctabutton";
import Navbar from "@/app/components/navbar/navbar";
import Link from "next/link";

export default function Home(){
    return (
        <div className="relative h-full w-full bg-no-repeat bg-[50%_100%] lg:bg-[left_50%] bg-cover bg-image">
            <Navbar colortype="white"/>
            <div className="h-[calc(100%-80px)] flex-col-center gap-y-8 text-white">
                <div className="flex-col-center px-5 w-full">
                    <h2 className="
                        text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.2rem]
                        xl:text-[3.8rem] max-w-[40rem] whitespace-pre-wrap text-balance
                        uppercase font-bold text-center">Transform Your Crew Management
                    </h2>
                    <h3 className="text-[1.0rem] md:text-[1.3rem] text-center font-medium">Expert guidance for your business&apos;s CM needs</h3>
                </div>
               <Link href="#secondaryabout"><CtaButton>Learn more</CtaButton></Link>
            </div>
        </div>
    )
}