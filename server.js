import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { requestVistas, sumarVistas } from "./backend/controllers/indexController.js"
import { saveSignUp } from "./backend/controllers/signUpController.js"
import { requestLogIn } from "./backend/controllers/LoginController.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/requestVistas", requestVistas)
app.post("/sumarVistas",  sumarVistas)
app.post("/api/saveSignUp", saveSignUp)
app.post("/api/Login", requestLogIn)

app.use((err, req, res, next)=>{
    console.error(err)
    res.status(500).json({error: "Error interno del servidor"})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})