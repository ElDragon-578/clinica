import axios from "axios";
import { useState } from "react";
import { NavBar } from "../components/navBar";
import { useNavigate } from "react-router-dom";

const datosLogin = [
  {
    id: 0,
    content: "Nombre Usuario",
    name: "nombre",
    placeholder: "Escribe tu nombre de usuario",
    type: "text",
  },
  {
    id: 1,
    content: "Constraseña",
    name: "contrasenia",
    placeholder: "Escribe tu contraseña",
    type: "password",
  },
];

export function Login() {
  const [formData, setFormData] = useState({
    nombre: "",
    contrasenia: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/Login",
        formData
      );

      if (response.data.success) {
        console.log("sesion iniciada con exito");
      }

      const {data} = await axios.post("http://localhost:3000/api/authAdmin", formData)

      localStorage.setItem('token', data.token)
      if(data.permisos ==='admin'){
        navigate('/Admin')
      }else{
        navigate('/')
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    <NavBar/>
    <h1 className="w-full h-auto flex place-content-center place-items-center text-6xl pt-20 mb-2">Clínica Genérica</h1>
    <div className="w-full h-auto flex place-content-center place-items-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[55%] h-96 flex flex-col place-content-center place-items-center bg-[#394F55] rounded-2xl text-white"
      >
        {datosLogin.map((dato) => (
          <div
            key={dato.id}
            className="w-[40%] flex flex-col mb-10 text-center"
          >
            <label htmlFor={dato.name}>{dato.content}</label>
            <input
              type={dato.type}
              id={dato.name}
              name={dato.name}
              placeholder={dato.placeholder}
              className="w-full border rounded-2xl p-2"
              value={formData[dato.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-20 p-2 bg-[#01C9FF] rounded-xl duration-300 ease-in-out hover:bg-[#3991AA] hover:scale-[103%]"
        >
          Enviar
        </button>
      </form>
    </div>
    </>
  );
}
