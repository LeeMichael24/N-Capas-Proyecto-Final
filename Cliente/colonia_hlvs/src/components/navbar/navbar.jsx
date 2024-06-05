import './navbar.css';
import Logo from '../../assets/images/Logo.png';
import { Navigate } from 'react-router-dom';

function Navbar() {
  const name = 'Jose';
  return (
    <nav className="navbar">
      <div className="logo">
      {/* falta el logo */}
        <img className='logo-img' src={Logo} alt="Logo" />
      </div>
      <div className="welcome-message">
        Bienvenido {name}
      </div>
    </nav>
  )
}

export default Navbar