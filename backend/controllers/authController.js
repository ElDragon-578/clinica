import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

export const authAdmin = async (req, res) => {
    const {nombre, contrasenia} =req.body

    try{
        const user = await prisma.usuario.findFirst({
            where: {nombre}
        })

        if (!user) return res.status(401).json({ message: "Usuario no encontrado" })

        const token = jwt.sign({id: user.idUsuario}, process.env.JWT_SECRET, {expiresIn: '1h'})

        res.json({token, permisos: user.permisos})
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Error al iniciar sesion'})
    }
}