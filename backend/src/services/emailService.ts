import { SendMailOptions } from "nodemailer";
import { transport } from "../config/mailtrap";
import crypto from "crypto"
import * as DatabaseUser from "../models/user.models";


export async function sendEmail(opciones:SendMailOptions) {
    transport.sendMail(opciones, (error,info)=>{
        if (error){
            console.error("error enviando el correo: ", error )
        }else{
            console.log("correo enviado: ", info.response)
        }
    })
}



export async function generateResetToken(email:string):Promise<string|null > {
    const emailResult= DatabaseUser.findByEmail(email)
    if (!emailResult) {
      return null;
    } 
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 60 * 60 * 1000)
    

    
  }