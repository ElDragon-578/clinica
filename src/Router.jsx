import { Route, Routes } from "react-router-dom"
import { Index } from "./Index/index.jsx"
import { SingUp } from "./SingUp/singUp.jsx"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/SignUp" element={<SingUp/>}/>
        </Routes>
    )
}