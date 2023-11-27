import * as request from "./requester"

export const create = async (data) => {
    const result = await request.post("/data/properties", data)
    return result

}