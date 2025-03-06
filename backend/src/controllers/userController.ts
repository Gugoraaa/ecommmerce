import { RequestHandler } from "express";
import * as userServices from "../services/userService"

export const registerUser:RequestHandler = async(req, res, next) => {
    try{
        const {email,username,password} = req.body;
        await userServices.findEmail(email)
        await userServices.registerUser(email,username,password)
        next()
      
    }
    catch(error){
        console.error("Error registrando el usuario: ", error)
    }
}

