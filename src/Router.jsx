import { Route, Routes } from "react-router-dom"
import { Index } from "./Index/index.jsx"
import { SingUp } from "./SingUp/singUp.jsx"
import { Login } from "./LogIn/logIn.jsx"
import { Admin } from "./admin/admin.jsx"
import { CalenderCitas } from "./CalendarioCitas/calendario.jsx"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/SignUp" element={<SingUp/>}/>
            <Route path="/LogIn" element={<Login/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/calender" element={<CalenderCitas/>}/>
        </Routes>
    )
}