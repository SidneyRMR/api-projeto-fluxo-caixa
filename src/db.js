import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

export const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
})

