import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import * as DatabaseUser from "../models/user.models";

export const verifyPassword: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await DatabaseUser.getUserByEmail(email, password);

    if (typeof user === "string") {
      res.status(401).json({ error: user });
      return; 
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ error: "Contraseña incorrecta" });
      return; 
    }

    next();
  } catch (error) {
    console.error("Error en verificación de contraseña:", error);
    res.status(500).json({ error: "Error interno del servidor" });
    return; 
  }
};
export const encryptPassword: RequestHandler = async (req,res, next) =>{
  try {

      const { password } = req.body;
      
      if (!password) {
        res.status(400).json({ error: "Se requiere una contraseña" });
        return 
      }
  
      const saltRounds = 10;
      const encryptedPassword = await bcrypt.hash(password, saltRounds);

      req.body.password = encryptedPassword;
      next();
  }
  catch(error){
    console.error("Error encryptando la contraseña: ", error)
  }
}
