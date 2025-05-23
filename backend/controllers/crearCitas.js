import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const crearCitas = async (req, res) =>{
    const {strat, end, horaFinal, horaInicio, title} = req.body

    try{
        const result = await prisma.citas.create({
            data:{
                strat: `${strat}T00:00:00Z`,
                end: `${strat}T00:00:00Z`,
                horaFin: "8:00:00",
                horaInicio: "4:00:00",
                title: "Cita Ocupada",
            }
        })

        res.status(200).json(result)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}