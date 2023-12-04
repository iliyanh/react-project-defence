import { useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useForm } from "../hooks/useForm"

const LoginFormKeys = {
    Email: "email",
    Password: "password"
}

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    }, onLoginSubmit)

    return (
        <div className="wrapper-login">
            <div className="form-box login">
                <h2>Login</h2>
                <form id="login" method="POST" onSubmit={onSubmit}>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}></input>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}></input>
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an accout? <Link
                            to="/register"
                            className="register-link">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}