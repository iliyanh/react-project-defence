import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes, useNavigate } from "react-router";
import { useState } from "react";

import { AuthContext } from "./contexts/AuthContext";
import * as authService from "./services/authService";
import * as propertiesService from "./services/propertiesService";

import {Navigation} from "./components/Navigation";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog";
import { Create } from "./components/Create";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";



function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const onLoginSubmit = async (data) => {
        try {
            //const { email, password } = data;
            const result = await authService.login(data);
            setAuth(result)
            navigate("/catalog")
        } catch (error) {
            console.log("Email or Password doesn't match!");
        }
    }
    const onRegisterSubmit = async (values) => {
        const {repeatPassword, ...registerData} = values
        if(repeatPassword !== registerData.password){
            return
            //throw new Error("Password doesn't match!")
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result)
            navigate("/catalog")
        } catch (error) {
            console.log("There's a problem!");
        }
    }
    const onLogout = async () => {
        //TODO
        //await authService.logout()
        setAuth({})
    }
    const onCreateProperty = async (data) => {
        const newGame = await propertiesService.create(data, auth.accessToken)

        console.log("success!");
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={context}>
            <div>
                <Navigation />

                <main id="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/create" element={<Create onCreateProperty={onCreateProperty}/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>

            </div >
        </AuthContext.Provider>
    );
}

export default App;
