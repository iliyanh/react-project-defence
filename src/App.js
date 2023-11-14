
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <a href="/" className="logo">Logo</a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/catalog">Catalog</a>
          <a href="/create">Create</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/logout">Logout</a>
        </nav>

      </header>
      
      
    </div>
        );
}

        export default App;
