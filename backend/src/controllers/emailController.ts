import { RequestHandler } from "express";
import * as emailService from "../services/emailService"


export const sendEmaial:RequestHandler = async (req , res , next) => {
    const mailOptions = {
        from: '"Soporte" <tucuenta@gmail.com>',
        to: "usuario@ejemplo.com",
        subject: "Recuperación de contraseña",
        text: "puchale aqui para recuperar tu constraseña",
      };
    const response = await emailService.sendEmail(mailOptions)

}