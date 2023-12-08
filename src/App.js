import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes } from "react-router";
import {  AuthProvider } from "./contexts/AuthContext";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";
import { PropertyDetails } from "./components/PropertyDetails";
import { Edit } from "./components/Edit";
import { RouteGuard } from "./components/common/RouteGuard";
import { PropertyProvider } from "./contexts/PropertyContext";

function App() {
    return (
        <AuthProvider>
            <PropertyProvider>
                <div>
                    <Navigation />
                    <main id="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create" element={
                                <RouteGuard>
                                    <Create />
                                </RouteGuard>
                            } />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:propertyId" element={<PropertyDetails />} />
                            <Route element={<RouteGuard />}>
                                <Route path="/catalog/:propertyId/edit" element={<Edit />} />
                            </Route>
                        </Routes>
                    </main>
                </div >
            </PropertyProvider>
        </AuthProvider>
    );
}

export default App;
