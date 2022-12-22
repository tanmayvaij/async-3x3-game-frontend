import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Signin/> } />
            </Routes>
        </BrowserRouter>
    )
}
