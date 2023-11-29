import { requestFactory } from "./requester";

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.post("/users/login", data),
        register: (data) => request.post("/users/register", data),
        logout: () => request.get("/users/logout"),
    }
}