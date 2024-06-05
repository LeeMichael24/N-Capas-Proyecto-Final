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
        Bienvenido: {name + '!'}
        {/* tienen que mostrarse los parametros de los usarios que ya estan en el login que 
          son los modulos que ya estab agregados, admin, visitante, vigilante, etc
         */}
      </div>
    </nav>
  )
}

export default Navbar