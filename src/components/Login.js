import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div className="wrapper-login">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required></input>
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an accout? <Link
                            to="#"
                            className="register-link">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    )
}