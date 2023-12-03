import {requestFactory} from "./requester"


export const propertyServiceFactory = (token) => {
    const request = requestFactory(token);
    const create = async (data) => {
        const result = await request.post("/data/properties", data)
        return result
    }
    const getAll = async () => {
        const result = await request.get("/data/properties")
        const properties = Object.values(result);
        return properties
    }
    const getOne = async (propertyId) => {
        const result = await request.get(`/data/properties/${propertyId}`)
        return result
    }
    return {
        create,
        getAll,
        getOne,
    }
}