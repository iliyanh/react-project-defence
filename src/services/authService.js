import * as request from "./requester";

export const login = (data) => request.post("/users/login", data)
export const register = (data) => request.post("/users/register", data)
export const logout = () => request.get("/users/logout")