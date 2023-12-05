import { createContext, useState } from "react";
import { authServiceFactory } from "../services/authService"
import { loginFormValidatior, registerFormValidator } from "../utils/FormValidator";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";



export const AuthContext = createContext()

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate();



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
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )

}