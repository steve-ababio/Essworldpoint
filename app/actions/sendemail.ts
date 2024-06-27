"use server"

import { ContactFormSchema } from "@/schema";
import { ContactFormType } from "../contactus/page";
import { Resend } from "resend";
import ContactFormEmail from "../components/email/contactformemail";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
export async function sendEmail(receiveddata:ContactFormType){
    const {success,data,error} = ContactFormSchema.safeParse(receiveddata);
    if(success){
        const {email,message,name} = data;
        try{
            const res = await resend.emails.send({
                from:"Acme <onboarding@resend.dev>",
                to:"kanyegh123@gmail.com",
                subject:"Message",
                text:`Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                react:(ContactFormEmail(data))
            });
            return {success:true,res}
        }catch(error){
            return {success:false,error}
        }
    }
    if(error){
        return {success:false,error:error.format()}
    }
}