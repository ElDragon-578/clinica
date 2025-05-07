import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const requestLogIn = async(req, res)=>{
    const {
        nombre,
        contrasenia
    } = req.body

    try{

        const result = await prisma.usuario.findFirst({
            where:{nombre}
        })

        if(!result){
            return res.status(200).json({
                success: false,
                message: "la sesion no existe"
            })
        }

        return (res.status(200).json({success: true, message: "Inicio de sesion valido"}))
    }catch(error){
        return res.status(500).json({
            success: false,
            error: "Algo salio mal al Iniciar sesion",
            message: "Algo fallo"
        })
        
    }
}