import { Link } from "react-router-dom"


export const Register = () => {
    return (
    <div className="wrapper-register">
        <div className="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" required></input>
                    <label>Username</label>
                </div>
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
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an accout? <Link
                        to="#"
                        className="login-link">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    )
}