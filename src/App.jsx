import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route exact path="/signup" element={ <Signup/> } />
                <Route exact path="/signin" element={ <Signin/> } />
            </Routes>
        </BrowserRouter>
    )
}
