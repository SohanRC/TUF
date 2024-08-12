import mysql from "mysql"
import { config } from "dotenv";
config();
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
})

export default db;