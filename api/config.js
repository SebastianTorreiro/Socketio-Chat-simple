import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 4000
export const DB_PASSWORD = process.env.DB_PASSWORD