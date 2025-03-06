import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
});

pool.connect()
  .then(() => console.log("🟢 Conectado a PostgreSQL"))
  .catch(err => console.error("🔴 Error en la conexión a PostgreSQL:", err));
