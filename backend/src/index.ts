import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe"; // 🔹 IMPORTACIÓN CORRECTA]
import StripeRoutes from "./routes/stripe"
import UserRoutes from "./routes/users"

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// 🔹 Inicializar Stripe correctamente
const stripe = new Stripe(process.env.STRIPE_API_KEY as string);


// Middlewares
app.use(cors());
app.use(express.json());
app.use("/stripe", StripeRoutes)
app.use("/user",UserRoutes)

// 🔹 Ruta para crear una sesión de pago en Stripe Checkout


// 🔹 Corregir el nombre de la variable PORT
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
