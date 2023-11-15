import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog";
import { Create } from "./components/Create";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";

function App() {
    return (
        <div>
            <Navigation />

            <main id="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>

        </div >
    );
}

export default App;
