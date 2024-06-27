import { object, string } from "zod";

export const ContactFormSchema = object({
    email:string().email({message:"Email is required"}),
    name:string().min(1),
    message:string().min(1)
})