export default function AboutSecondary(){
    return(
        <section id="secondaryabout" className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-10 pt-16">
          <div>
            <img className="w-full h-full inset-0" src={"/assets/images/containers.webp"} alt="containers"  />
          </div>
          <div className="text-slate-700 self-center ">
            <h2 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] whitespace-pre-wrap text-start mb-6 lg:mb-8">EssWorldPoint Crew Manning Business Solutions</h2>
            <p className="mb-6 lg:mb-7 text-[1.0rem]">
              At EssWorldPoint Crew Manning , we offer comprehensive CM
              services to help your business run more efficiently. 
              Contact us today to discover how we can support your business growth.
            </p>
            <button className="hover:opacity-90 px-10 py-[12px] rounded-[6px] text-white shadow-md bg-[#2a2a2a]">Find out More</button>
          </div>
        </section>
    )
}