import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const saveSignUp = async(req, res) => {
    const {
        nombre,
        apellido,
        telefono,
        direccion,
        fechaNac,
        cedula,
        nombreUsuario,
        contrasenia,
    } = req.body


    try{
        const resultUser = await prisma.usuario.create({
            data: {
                nombre: nombreUsuario,
                contrasenia
            }
        })



        const resultPaciente = await prisma.paciente.create({
            data: {
                idUsuario_FK: resultUser.idUsuario,
                nombre,
                apellido,
                telefono,
                direccion,
                fechaNac,
                cedula,
            }
        })

        res.status(200).json(resultUser, resultPaciente)
    }catch (error){
        res.status(500).json({
            error: 'Error al guardar el usuario/Paciente'
        })
        throw new Error(error)
    }
}
 