export default function Hiring(){
    return (
        <section className="text-center pt-20">
          <h2 className="text-[30px] font-bold text-slate-600 mb-6">WE ARE HIRING</h2>
          <h2 className="text-[20px] font-medium text-slate-700 mb-2">JOIN THE TEAM</h2>
          <p className="text-[1rem] text-slate-600 mb-10">If you&apos;re interested in our open positions, start by applying here and attaching your resume</p>
          <form className="max-w-[50rem] w-full border border-slate-600/40 p-10 rounded-[10px] mx-auto">
            <h3 className="text-slate-600 text-[1.4rem] font-semibold uppercase mb-6">Apply Now</h3>
            <div className="flex-col flex items-start mb-6">
              <label htmlFor="fullname" className="block mb-[3px] text-slate-500">Full Name</label>
              <input type="text" id="fullname" placeholder="james carter" className="border rounded-[5px] text-slate-700 border-slate-400/70 px-7 w-full py-2"/>
            </div>
            <div className="flex flex-col items-start mb-6">
              <label htmlFor="phonenumber" className="block mb-[3px] text-slate-500">Phone Number</label>
              <input type="text" id="phonenumber" placeholder="+233244887790" className="border rounded-[5px] text-slate-700 w-full border-slate-400/70 px-7 py-2"/>
            </div>
            <div className="flex flex-col items-start mb-6">
              <label htmlFor="email" className="block mb-[3px] text-slate-500">E-mail</label>
              <input type="email" placeholder="john@example.com" id="email" className="border rounded-[5px] text-slate-700 w-full border-slate-400/70 px-7 py-2"/>
            </div>
            <div className="flex flex-col items-start mb-6">
              <label htmlFor="message" className="block mb-[3px] text-slate-500">Message</label>
              <textarea rows={5} id="message" className="border rounded-[5px] text-slate-700 w-full border-slate-400/70 px-7 py-2"/>
            </div>
            <div>
              <label></label>
            </div>
            <button className="py-[10px] px-10 bg-[#242424] shadow-md hover:opacity-90 text-white rounded-[6px]">Submit Application</button>
          </form>
        </section>
    )
}