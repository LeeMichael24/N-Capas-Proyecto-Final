// ButtonMenu.jsx

import { useNavigate } from 'react-router-dom';
import './menuButtom.css'; // Asegúrate de definir estilos aquí

// eslint-disable-next-line react/prop-types
const ButtonMenu = ({ icon, name, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="button-menu" onClick={handleClick}>
      <img src={icon} alt={name} className="button-icon" />
      <span className="button-name">{name}</span>
    </div>
  );
};

export default ButtonMenu;
