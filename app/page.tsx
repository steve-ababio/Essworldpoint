import Home from "@/app/components/home/home";
import Image from "next/image";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";

export default function App() {
  return (
    <main className="h-screen">
      <Home />
      <About/>
      <Gallery />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center py-20 mt-10 px-5 gap-x-20 gap-y-10">
        <div className="grow-[2]">
          <img className="w-full h-full inset-0" src={"/assets/images/containers.webp"} alt="containers"  />
        </div>
        <div className="text-slate-700 self-center">
          <h2 className="font-bold text-[35px] whitespace-pre-wrap text-center mb-7">EssWorldPoint Crew Manning Business Solutions</h2>
          <p className="mb-7 text-[1.1rem]">
             At EssWorldPoint Crew Manning , we offer comprehensive CM
             services to help your business run more efficiently. 
             Contact us today to discover how we can support your business growth.
          </p>
          <button className="hover:opacity-90 px-10 py-[12px] rounded-[6px] text-white shadow-md bg-[#2a2a2a]">Find out More</button>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-[30px] font-bold text-slate-700 mb-8">WE ARE HIRING</h2>
        <h2 className="text-[20px] font-medium text-slate-700 mb-8">JOIN THE TEAM</h2>
        <p className="text-[1rem] text-slate-600">If you're interested in our open positions, start by applying here and attaching your resume</p>
        <h3 className="text-slate-700 mt-12 text-[1.2rem] font-semibold">Apply Now</h3>
        <form>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" className="border border-slate-300/40 px-10 py-2"/>
          </div>
        </form>
      </section>
    </main>
  );
}
