import axios from "axios";
import { useState } from "react";

import { NavBar } from "../components/navBar";

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
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/api/saveSignUp", formData);

      setResult(result)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full place-content-center place-items-center pt-20">
        <h1 className="text-4xl">
          Registro
        </h1>
      </div>
      <form
        action=""
        className="max-w-[95%] w-full h-auto min-h-[400px] flex flex-col place-items-center m-6 p-6 border rounded-2xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-auto place-content-center place-items-center">
          <h1 className="text-2xl">Registro Personal</h1>
          <span className="">
            Recuerde que la informacion que ingrese en este sera usada para
            registros medicos futuros
          </span>
        </div>
        <div className="max-w-[95%] w-full h-auto min-h-[400px] m-6 p-6 border rounded-2xl shadow-xl">
          {datosPersonal.map((dato) => (
            <div key={dato.id} className="w-full">
              <label htmlFor={dato.name}>{dato.content}</label>
              <input
                type={dato.type}
                id={dato.name}
                name={dato.name}
                placeholder={dato.placeHolder}
                className="w-full h-8 border border-[#332B2B] rounded-lg p-2 mb-2"
                value={formData[dato.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-auto place-content-center place-items-center">
        <h1 className="text-2xl">Registro Usuario</h1>
        <span className="">
          Dentro de estos campos estaran tus datos de ingreso ten cuidado de no
          perderlos
        </span>

        </div>
        <div className="max-w-[95%] w-full h-auto min-h-[200px] m-6 p-6 border rounded-2xl shadow-xl">
          {datosUsuario.map((dato) => (
            <div key={dato.id} className="w-full">
              <label htmlFor={dato.name}>{dato.content}</label>
              <input
                type={dato.type}
                id={dato.name}
                name={dato.name}
                placeholder={dato.placeHolder}
                className="w-full h-8 border border-[#332B2B] rounded-lg p-2 mb-2"
                value={formData[dato.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {
          result && <p className={`w-full h-auto text-center ${result.data.color} text-white mb-2 rounded-xl`}>{result.data.message}</p>
        }
        <button
          type="submit"
          className="w-1/2 h-12 p-2 bg-[#01C9FF] text-white rounded-xl duration-300 ease-in-out hover:bg-[#3991AA] hover:scale-[103%]"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
