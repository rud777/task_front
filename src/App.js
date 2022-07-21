import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home";
import Taskes from "./pages/Taskes";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/taskes/:id" element={<Taskes/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>


    );
}

export default App;
