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
          <h2 className="font-bold text-[35px] whitespace-pre-wrap text-start mb-7">EssWorldPoint Crew Manning Business Solutions</h2>
          <p className="mb-7 text-[1.1rem]">
             At EssWorldPoint Crew Manning , we offer comprehensive CM
             services to help your business run more efficiently. 
             Contact us today to discover how we can support your business growth.
          </p>
          <button className="hover:opacity-90 px-10 py-[12px] rounded-[6px] text-white shadow-md bg-[#2a2a2a]">Find out More</button>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-[30px] font-bold text-slate-600 mb-8">WE ARE HIRING</h2>
        <h2 className="text-[20px] font-medium text-slate-700 mb-8">JOIN THE TEAM</h2>
        <p className="text-[1rem] text-slate-600">If you're interested in our open positions, start by applying here and attaching your resume</p>
        <h3 className="text-slate-600 mt-12 text-[1.2rem] font-semibold mb-5">Apply Now</h3>
        <form className="max-w-[50rem] w-full mx-auto">
          <div className="flex-col flex items-start mb-6">
            <label htmlFor="fullname" className="block mb-[3px] text-slate-500">Full Name</label>
            <input type="text" id="fullname" placeholder="james carter" className="border rounded-[5px] text-slate-700 border-slate-300/70 px-7 w-full py-2"/>
          </div>
          <div className="flex flex-col items-start mb-6">
            <label htmlFor="phonenumber" className="block mb-[3px] text-slate-500">Phone Number</label>
            <input type="text" id="phonenumber" placeholder="+233244887790" className="border rounded-[5px] text-slate-700 w-full border-slate-300/70 px-7 py-2"/>
          </div>
          <div className="flex flex-col items-start mb-6">
            <label htmlFor="email" className="block mb-[3px] text-slate-500">E-mail</label>
            <input type="email" placeholder="john@example.com" id="email" className="border rounded-[5px] text-slate-700 w-full border-slate-300/70 px-7 py-2"/>
          </div>
          <div className="flex flex-col items-start mb-6">
            <label htmlFor="message" className="block mb-[3px] text-slate-500">Message</label>
            <textarea rows={5} id="message" className="border rounded-[5px] text-slate-700 w-full border-slate-300/70 px-7 py-2"/>
          </div>
          <div>
            <label></label>
          </div>
          <button className="py-[10px] px-10 bg-[#242424] shadow-md hover:opacity-90 text-white rounded-[6px]">Submit Application</button>
        </form>
      </section>
    </main>
  );
}
