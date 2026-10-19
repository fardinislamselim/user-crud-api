import dotenv from "dotenv"
import path from "path"

 
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT || 3000,
    ip: process.env.IP || "0.0.0.0",
    node_env: process.env.NODE_ENV
}