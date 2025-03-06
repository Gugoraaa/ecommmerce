import * as DatabaseUser from "../models/user.models";


export async function registerUser(email:string, password:string, username:string) {
    DatabaseUser.registerUser(email,password,username)
    
}

export async function findEmail(email:string) {
    const existingUser = await DatabaseUser.findByEmail(email);
    if (existingUser) {
        throw new Error("El usuario ya existe");
    } 
}