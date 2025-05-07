import axios from "axios"
import { useEffect, useState } from "react"

import { Header } from "./components/header"
import { NavBar } from "../components/navBar"

export function Index(){
    const [visitas, setVisitas] = useState(0)

    useEffect(()=>{

        const fechtVistas = async ()=>{
            try{
                await axios.post("http://localhost:3000/sumarVistas")

                const response = await axios.get("http://localhost:3000/requestVistas")
    
                setVisitas(response.data[0].cantidad)
            }catch(err){
                console.log("Algo salio mal con el request", err)
            }

        }

        fechtVistas()
    },[])


    return(
        <>
            <NavBar></NavBar>
            <Header></Header>
            <div className="w-full h-auto flex flex-col justify-center place-items-center m-2">
                <p className="w-[50%] p-2 my-2 text-center bg-black border border-gray-400 text-white rounded-2xl">Visistas: {visitas}</p>
            </div>
        </>
    )
}