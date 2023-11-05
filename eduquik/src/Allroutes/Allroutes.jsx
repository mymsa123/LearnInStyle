import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const AllRoutes =()=>{
    return <>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
}

export {AllRoutes}