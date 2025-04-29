import pkg from '@prisma/client';
const {PrismaClient} = pkg

const prisma = new PrismaClient()

export const requestVistas = async(req, res) =>{
    try{
        const result = await prisma.vistas.findMany()

        console.log(result)

        res.status(200).json(result)
    }catch (error){
        res.status(500).json({
            error: 'Error al guardar los datos'
        })
        throw new Error(error)
    }
}

export const sumarVistas = async (req, res) => {
    try {
      const vista = await prisma.vistas.findFirst()
  
      if (!vista) {
        await prisma.vistas.create({
          data: { cantidad: 1 },
        })
        return res.status(201).json({ mensaje: "Registro creado con 1 visita" })
      }
      
      const nuevaCantidad = vista.cantidad + 1
  
      await prisma.vistas.update({
        where: { id: vista.id },
        data: { cantidad: nuevaCantidad },
      })
  
      res.status(200).json({ cantidad: nuevaCantidad })
    } catch (error) {
      console.error("Error al sumar visita", error)
      res.status(500).json({ error: "No se pudo sumar la visita" })
    }
  }