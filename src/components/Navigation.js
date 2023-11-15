import { Link } from "react-router-dom";

function Navigation() {
    return (

        <header className="header">
            <Link className="logo" to="/">Logo</Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/create">Create</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>
            </nav>

        </header>
    )
}
export default Navigation