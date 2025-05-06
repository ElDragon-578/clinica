import axios from "axios";
import { useState } from "react";

const datosPersonal = [
  {
    id: 0,
    content: "Nombre",
    name: "nombre",
    placeHolder: "Escribe tu nombre",
    type: "text",
  },
  {
    id: 1,
    content: "Apellido",
    name: "apellido",
    placeHolder: "Escribe tu apellido",
    type: "text",
  },
  {
    id: 2,
    content: "Telefono",
    name: "telefono",
    placeHolder: "Escribe tu telefono",
    type: "text",
  },
  {
    id: 3,
    content: "Direccion",
    name: "direccion",
    placeHolder: "Escribe tu direccion",
    type: "text",
  },
  {
    id: 4,
    content: "Fecha de Nacimiento",
    name: "fechaNac",
    placeHolder: "Coloca tu fecha de nacimiento",
    type: "date",
  },
  {
    id: 5,
    content: "Cedula",
    name: "cedula",
    placeHolder: "Escribe tu cedula",
    type: "text",
  },
];

const datosUsuario = [
  {
    id: 0,
    content: "Nombre de Usuario",
    name: "nombreUsuario",
    placeHolder: "Ecribe tu nombre dee usuario",
    type: "text",
  },
  {
    id: 1,
    content: "Contraseña",
    name: "contrasenia",
    placeHolder: "Escribe tu contraseña",
    type: "password",
  },
  {
    id: 2,
    content: "Confirmar Contraseña",
    name: "contraseniaConfrimar",
    placeHolder: "Confrima aqui tu contreseña",
    type: "password",
  },
];

export function SingUp() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    fechaNac: "",
    cedula: "",
    nombreUsuario: "",
    contrasenia: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
        await axios.post("http://localhost:3000/api/saveSignUp", formData)
    }catch (err){
        console.log(err)
    }
  }

  return (
    <>
      <h1>Registro Personal</h1>
      <span>
        Recuerde que la informacion que ingrese en este sera usada para
        registros medicos futuros
      </span>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div>
          {datosPersonal.map((dato) => (
            <div key={dato.id} className="w-full">
              <label htmlFor={dato.name}>{dato.content}</label>
              <input
                type={dato.type}
                id={dato.name}
                name={dato.name}
                placeholder={dato.placeHolder}
                className="w-full"
                value={formData[dato.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <h1 className="w-full pt-2">Registro Usuario</h1>
        <span className="w-full pb-2">
          Dentro de estos campos estaran tus datos de ingreso ten cuidado de no
          perderlos
        </span>
        <div>
          {datosUsuario.map((dato) => (
            <div key={dato.id} className="w-full">
              <label htmlFor={dato.name}>{dato.content}</label>
              <input
                type={dato.type}
                id={dato.name}
                name={dato.name}
                placeholder={dato.placeHolder}
                className="w-full"
                value={formData[dato.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="w-full h-12 p-2 bg-[#01C9FF] text-white rounded-xl duration-300 ease-in-out hover:bg-[#9B3A34] hover:scale-[103%]">Enviar</button>
      </form>
    </>
  );
}
