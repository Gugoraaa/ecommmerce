import { PassThrough } from "stream";
import { pool } from "../config/database";

interface User{
  email : string;
  username : string;
  password: string;
  id : number; 
}


export async function getUserByEmail(email: string, password: string): Promise<string | User> {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    
  if (result.rows.length === 0) {
    return "usuario no encontrado";
  }
    
  return result.rows[0] as User ; 
  }


export async function findByEmail(email: string) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0] || null;
}

export async function registerUser(email:string, password:string, username:string) {
  try{
  const result = await pool.query(
    "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)",
    [email, username, password]
  );
  return console.log("se agrego el usuario con exito ") 
  }
  catch(error){
    console.error("hubo un error agregando al usuario en la base de datos:", error)
  }
}
export async function registerToken(email:string,token:string,expires:Date) {
  try{
    await pool.query(
      "UPDATE users SET resetToken = $1, resetTokenExpires = $2 WHERE email = $3",
      [token, expires, email]
    );
    console.log("se agrego el token de manera exitosa ")
  }
  catch(error){
    console.error("hubo un error al registrar el token: ",error)
  }
}