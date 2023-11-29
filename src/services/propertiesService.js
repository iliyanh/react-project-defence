import {requestFactory} from "./requester"


export const propertyServiceFactory = (token) => {
    const request = requestFactory(token);
    const create = async (data) => {
        const result = await request.post("/data/properties", data)
        return result
    }
    return {
        create
    }
}