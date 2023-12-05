import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes, useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";

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

function App() {
    const navigate = useNavigate();
    const [properties, setProperty] = useState([]);
    const propertiesService = propertyServiceFactory();//auth.accessToken


    useEffect(() => {
        propertiesService.getAll()
            .then(result => {
                setProperty(result)
            })
    }, []);


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

    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;
