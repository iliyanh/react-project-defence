import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { propertyServiceFactory } from "../services/propertiesService";
import { createFormValidator } from "../utils/FormValidator";

export const PropertyContext = createContext();

export const PropertyProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [properties, setProperty] = useState([]);
    const propertiesService = propertyServiceFactory();//auth.accessToken

    useEffect(() => {
        propertiesService.getAll()
            .then(result => {
                setProperty(result)
            })
    }, []);
    const deleteProperty = (propertyId) => {
        setProperty(state => state.filter(x => x._id !== propertyId));
    };
    const onCreateProperty = async (data) => {
        const isValid = createFormValidator(data)
        if(isValid){
        const newProperty = await propertiesService.create(data)
        setProperty(state => [...state, newProperty])
        navigate("/catalog")
        }
    }
    const onEditProperty = async (values) => {
        const result = await propertiesService.edit(values._id, values)

        setProperty(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`)
    }
    const contextValue = {
        properties,
        deleteProperty,
        onCreateProperty,
        onEditProperty,
    }

    return (
        <>
            <PropertyContext.Provider value={contextValue}>
                {children}
            </PropertyContext.Provider>
        </>
    )

}