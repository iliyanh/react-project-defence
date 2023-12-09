import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes } from "react-router";
import {  AuthProvider } from "./contexts/AuthContext";

import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { PropertyDetails } from "./components/PropertyDetails/PropertyDetails";
import { Edit } from "./components/Edit/Edit";
import { RouteGuard } from "./components/common/RouteGuard";
import { PropertyProvider } from "./contexts/PropertyContext";
import { Comments } from "./components/Comments/Comments";

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
                            <Route path="/comments" element={<Comments />} />
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
