import { Route, Routes } from "react-router-dom"
import { Index } from "./Index/index.jsx"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
        </Routes>
    )
}