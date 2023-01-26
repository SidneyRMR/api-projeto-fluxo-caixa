import express from "express"
import userRoutes from "./routes/acessos"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// rota para acessar api pelo navegador ou front-end
app.use("/", userRoutes)

//define em que porta que será disponibilizado a api da consulta/query
const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`)
})

