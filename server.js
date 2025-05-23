import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { requestVistas, sumarVistas } from "./backend/controllers/indexController.js"
import { saveSignUp } from "./backend/controllers/signUpController.js"
import { requestLogIn } from "./backend/controllers/LoginController.js"
import {isAdmin} from "./middleware/isAdmin.js"
import { authAdmin } from "./backend/controllers/authController.js"
import { citasReq } from "./backend/controllers/citasReq.js"
import { crearCitas } from "./backend/controllers/crearCitas.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/requestVistas", requestVistas)
app.use('/dashboard', isAdmin, (req, res) => {
  res.json({ message: `Bienvenido, ${req.usuario.email}` });
})
app.post("/sumarVistas",  sumarVistas)
app.post("/api/saveSignUp", saveSignUp)
app.post("/api/Login", requestLogIn)
app.post("/api/authAdmin", authAdmin)
app.get("/api/citasReq", citasReq)
app.post("/api/crearCitas", crearCitas)

app.use((err, req, res, next)=>{
    console.error(err)
    res.status(500).json({error: "Error interno del servidor"})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})