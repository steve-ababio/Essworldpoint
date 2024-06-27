"use client"
import { FaRegAddressCard } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiMailbox } from "react-icons/pi";
import Navbar from "@/app/components/navbar/navbar";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { ContactFormSchema } from "@/schema";
import { sendEmail } from "../actions/sendemail";
import { workingdays } from "../data/data";
import Footer from "../components/footer/footer";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export type ContactFormType = Zod.infer<typeof ContactFormSchema>;
export default function ContactUs(){

    const {
      register,
      handleSubmit,
      formState:{errors,isSubmitting}
    } = useForm<ContactFormType>({
      resolver:zodResolver(ContactFormSchema)
    });
    const processForm:SubmitHandler<ContactFormType> = async(data)=>{
      const response = await sendEmail(data);
    }
    return(
        <main className="h-full w-full relative">
        <Navbar colortype="black" />
        <section className="relative top-[80px] pb-10 px-10">
          <h1 className="font-bold text-slate-600 pt-10 text-[26px] lg:text-[30px] whitespace-pre-wrap text-center mb-6 lg:mb-8">CONTACT US</h1>
          <div className="flex justify-center items-end flex-wrap gap-6" >
            <div id="contactinfo" className="basis-[550px]">
              <h1 className="text-slate-500 text-[1.6rem] mb-6 font-semibold">Contact Info</h1>
              <div>
                <div className="mb-8">
                    <h2 className="font-semibold text-slate-500 text-[1.2rem] mb-3 text-start">Better yet, see us in person!</h2>
                    <p className="text-slate-600 text-[14px]">We love our customers, so feel free to visit during normal business hours.</p>
                </div>
                <div className="mb-8">
                    <h2 className="mb-4 font-semibold text-slate-700">ESSWORLDPOINT LTD</h2>
                    <div className="text-slate-600 border border-slate-400 pl-6 text-[14px] rounded-[8px] py-5">
                        <p className="mb-6 gap-3 flex items-center">
                            <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><GrLocation size={20} className="text-slate-500" /></div>
                            <span>Community 11 Post Office, off Tema General Hospital Road</span>
                        </p>
                        <p className="mb-6 gap-3 flex items-center">
                        <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><FaRegAddressCard size={20} className="text-slate-500"/></div>
                            <span> GT-117-5993</span>
                        </p>
                        <p className="mb-6 gap-3 flex items-center">
                        <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><PiMailbox size={20} className="text-slate-500" /></div>
                            <span>P.O.Box CO 977 Tema, Greater Accra, Ghana</span>
                        </p>
                        <p className="flex mb-6 gap-3 items-center">
                            <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><FiMail size={20} className="text-slate-500" /></div>
                            <span>info@essworldpointgh.com</span>
                        </p>
                        <p className="flex mb-6 gap-3 items-center">
                            {/* <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><FiMail size={20} className="text-slate-500" /></div> */}
                            <span>Office: <a href="tel:">+233 303303451</a></span>
                        </p>
                        <p className="flex mb-6 gap-3 items-center">
                            {/* <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><FiMail size={20} className="text-slate-500" /></div> */}
                            <span>Mobile: <a href="tel:">+ 233 538300592</a></span>
                        </p>
                        <p className="flex gap-3 items-center">
                            {/* <div className="shadow-[2px_2px_10px_rgba(150,150,150,0.3)] p-2 rounded-[50%]"><FiMail size={20} className="text-slate-500" /></div> */}
                            <span>Mobile: <a href="tel:">+ 233 2088229062</a></span>
                        </p>
                    </div>
                    
                </div>
              </div>
            </div>
            <div id="contactform" className="basis-[550px] rounded-[10px] py-7 px-6 h-fit shadow-[-1px_-1px_8px_#ddd,1px_1px_8px_#ddd]">
              <form onSubmit={handleSubmit(processForm)} className="max-w-[50rem] w-full mx-auto">
                <div className="flex-col flex text-[14px] items-start mb-4">
                  <label htmlFor="fullname" className="block mb-[3px] text-slate-500"> Name</label>
                  <input {...register("name")} type="text" id="fullname" className="border rounded-[5px] text-slate-700 border-slate-400/70 px-7 w-full py-2"/>
                  {errors.name?.message && <p className="ml-1 mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col items-start mb-4">
                  <label htmlFor="email" className="block mb-[3px] text-slate-500">E-mail*</label>
                  <input {...register("email")} type="email" id="email" className="border rounded-[5px] text-slate-700 w-full border-slate-400/70 px-7 py-2"/>
                  {errors.email?.message && <p className="ml-1 mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col items-start mb-6">
                  <label htmlFor="message" className="block mb-[3px] text-slate-500">Message</label>
                  <textarea {...register("message")} rows={5} id="message" className="border rounded-[5px] text-slate-700 w-full border-slate-400/70 px-7 py-2"/>
                  {errors.message?.message && <p className="ml-1 mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                <div>
                  <label></label>
                </div>
                <button disabled={isSubmitting} onSubmit={handleSubmit(processForm)} className="py-[10px] px-10 bg-[#242424] shadow-md hover:opacity-90 text-white rounded-[6px]">
                  {isSubmitting ? 'Sending message...':'Send Message'}</button>
            </form>
            </div>
          </div>
          <div className="text-center mt-14">
              <h1 className="text-slate-600 mb-8 font-bold text-[23px]">Working Hours</h1>
              <div>
                <div>
                  {
                    workingdays.map(({day,starttime,endtime,closed})=>{
                      const d = new Date().getDay();

                      if(closed === "closed"){
                          if(days[d] === day){
                            return <div className="font-bold text-slate-800 mb-3"><span>{day}  </span><span>{closed}</span></div>
                          }
                        return <div className="text-slate-600 mb-3"><span>{day}  </span><span>{closed}</span></div>
                      }
                      if(days[d] === day){
                        return <div className="font-bold text-slate-800 mb-3"><span>{day}  </span><span>{starttime} - {endtime}</span></div>
                      }
                      return <div className="text-slate-600 mb-3"><span>{day}  </span><span>{starttime} - {endtime}</span></div>
                    })
                  }
                </div>
              </div>
            </div>
        </section>
        <Footer />
        </main>
    )
}