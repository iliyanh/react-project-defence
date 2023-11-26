import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Navigation = () => {
    const { isAuthenticated, username } = useContext(AuthContext);
    return (

        <header className="header">
            <Link className="logo" to="/">Logo</Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/catalog">For sale</Link>
                {isAuthenticated ?
                    <div id="user">
                        <Link to="/create">Create</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to="">{username}</Link>
                    </div>
                    :
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }


            </nav>

        </header>
    )
}
