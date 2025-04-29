import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { requestVistas, sumarVistas } from "./controllers/indexController.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/requestVistas", requestVistas)
app.post("/sumarVistas",  sumarVistas)

app.use((err, req, res)=>{
    console.log(err.stack)
    res.status(500).json({error: "Error interno del servidor"})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})