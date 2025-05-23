import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const citasReq = async (req, res) =>{
    try{
        const result = await prisma.citas.findMany()

        res.status(200).json(result)
    }catch(error){
        res.status(500).json({
            message: "error al consultar las citas"
        })
    }
}