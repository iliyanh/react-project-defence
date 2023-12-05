import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import bcrypt from "bcryptjs-react";

import { AuthContext } from "./contexts/AuthContext";
import { authServiceFactory } from "./services/authService";
import { propertyServiceFactory } from "./services/propertiesService";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";
import { PropertyDetails } from "./components/PropertyDetails";
import { Edit } from "./components/Edit";
import { loginFormValidatior, registerFormValidator } from "./utils/FormValidator";
import { showErrorMessage } from "./utils/errorHandler";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [properties, setProperty] = useState([])
    const authService = authServiceFactory(auth.accessToken);
    const propertiesService = propertyServiceFactory(auth.accessToken);


    useEffect(() => {
        propertiesService.getAll()
            .then(result => {
                setProperty(result)
            })
    }, []);

    const onLoginSubmit = async (data) => {
        const isValid = loginFormValidatior(data)

        if (isValid) {
            try {
            const result = await authService.login(data);
            setAuth(result)
            navigate("/catalog")
            } catch (error) {
                return
            }
        }
    }
    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values

        const isValid = registerFormValidator(values)
        if (isValid) {

            const result = await authService.register(registerData)
            setAuth(result)
            navigate("/catalog")
        }
    }
    const onLogout = async () => {
        await authService.logout()
        setAuth({})
    }
    const onCreateProperty = async (data) => {
        const newProperty = await propertiesService.create(data)
        setProperty(state => [...state, newProperty])
        navigate("/catalog")
    }
    const onEditProperty = async (values) => {
        const result = await propertiesService.edit(values._id, values)

        setProperty(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`)
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
                        <Route path="/create" element={<Create onCreateProperty={onCreateProperty} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalog" element={<Catalog properties={properties} />} />
                        <Route path="/catalog/:propertyId" element={<PropertyDetails />} />
                        <Route path="/catalog/:propertyId/edit" element={<Edit onEditProperty={onEditProperty} />} />
                    </Routes>
                </main>
            </div >
        </AuthContext.Provider>
    );
}

export default App;
