import { Router } from "express";
import { encryptPassword, verifyPassword} from "../middleware/userAuth";
import { registerUser } from "../controllers/userController"; 

const router = Router();

// 
router.get("/login",verifyPassword, (req, res) => {
  console.log("se inicio sesion")
  
});

router.post("/register",encryptPassword, registerUser,(req ,res) =>{
  console.log("se registro la cuenta con exito")

}) 
  

export default router;
