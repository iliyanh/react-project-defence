import { useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    }, onRegisterSubmit)

    return (
        <div className="wrapper-register">
            <div className="form-box register">
                <h2>Registration</h2>
                <form method="POST" onSubmit={onSubmit}>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input 
                        type="text" 
                        name="username"
                        value={values.username}
                        onChange={changeHandler}></input>
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}></input>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}></input>
                        <label>Password</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input
                            type="password"
                            name="repeatPassword"
                            value={values.repeatPassword}
                            onChange={changeHandler}></input>
                        <label>Repeat password</label>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="login-register">
                        <p>Already have an accout? <Link
                            to="/login"
                            className="login-link">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}