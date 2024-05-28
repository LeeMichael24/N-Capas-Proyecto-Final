
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      {/* falta el logo */}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="welcome-message">
        Bienvenido
      </div>
    </nav>
  )
}

export default Navbar