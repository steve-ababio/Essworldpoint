import { ContactFormType } from "@/app/contactus/page";

interface ContactFormEmailProps extends ContactFormType{
}

export default function ContactFormEmail({email,name,message}:ContactFormEmailProps){
    return(
        <div>
            <h1>Message</h1>
            <p>From <strong>{name}</strong> at {email}</p>
            <h2>Message:</h2>
            <p>{message}</p>
        </div>
    )
}